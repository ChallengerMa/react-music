import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getCurrentSongAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction,
} from "../store/actionCreators";
import { getImage, formatDate, getPlaySong } from "@/utils/format-utils";

import { Slider, message } from "antd";
import { AppPlayerBarWrapper, Control, PlayInfo, Operator } from "./style";

export default memo(function AppPlayerBar() {
  //state
  const [isPlaying, setIsPlaying] = useState(false); //播放状态
  const [currentTime, setCurrentTime] = useState(0); //当前播放时间
  const [progress, setProgress] = useState(0); //当前滑动块位置
  const [isChange, setIsChange] = useState(false); //当前是否处于拖动状态

  //redux hooks
  const dispatch = useDispatch();
  const { currentSong, playList, sequence, lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      playList: state.getIn(["player", "playList"]),
      sequence: state.getIn(["player", "sequence"]),
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    }),
    shallowEqual
  );

  //other hooks
  const audioRef = useRef();

  useEffect(() => {
    dispatch(getCurrentSongAction(167876));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  }, [currentSong]);

  const singer = currentSong.ar && currentSong.ar[0].name;
  const picUrl = currentSong.al && currentSong.al.picUrl;
  const duration = currentSong.dt;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  //点击播放按钮
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  //拖动滑动块时
  const sliderChange = useCallback(
    (value) => {
      setIsChange(true);
      const time = (value / 100) * duration;
      setCurrentTime(time);
      setProgress(value);
    },
    [duration]
  );
  //滑动块松手后
  const sliderAfterChange = useCallback(
    (value) => {
      const time = (value / 100) * duration;
      audioRef.current.currentTime = time / 1000;
      setCurrentTime(time);
      setIsChange(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );

  //切换播放状态
  const changeSequcnce = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) currentSequence = 0;
    dispatch(changeSequenceAction(currentSequence));
  };

  //切换音乐
  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag));
    audioRef.current.currentTime = 0;
    audioRef.current
      .play()
      .then((res) => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
      });
  };

  const timeUpdate = (e) => {
    const time = e.target.currentTime;
    if (!isChange) {
      setCurrentTime(time * 1000);
      setProgress((currentTime / duration) * 100);

      let i = 0;
      for (; i < lyricList.length; i++) {
        if (currentTime < lyricList[i].time) {
          break;
        }
      }
      if (currentLyricIndex !== i - 1) {
        dispatch(changeCurrentLyricIndexAction(i - 1));
        const content = lyricList[i - 1] && lyricList[i - 1].content;
        message.open({
          key: "lyric",
          content,
          duration: 0,
          className: "lyric-class",
        });
      }
    }
  };

  const ended = () => {
    //单曲循环
    if (sequence === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then((res) => {
          setIsPlaying(true);
        })
        .catch((err) => {
          setIsPlaying(false);
        });
    } else {
      //播放下一首
      dispatch(changeCurrentIndexAndSongAction(1));
    }
  };

  return (
    <div>
      <AppPlayerBarWrapper className="sprite_player">
        <div className="content wrap-v2">
          <Control isPlaying={isPlaying}>
            <button className="prev sprite_player" onClick={(e) => changeMusic(-1)}></button>
            <button className="play sprite_player" onClick={(e) => playMusic()}></button>
            <button className="next sprite_player" onClick={(e) => changeMusic(1)}></button>
          </Control>
          <PlayInfo>
            <div className="image">
              <img src={getImage(picUrl, 35)} alt="" />
            </div>
            <div className="play">
              <div className="word">
                <a href="#/" className="song">
                  {currentSong.name}
                </a>
                <a href="/#" className="singer">
                  {singer}
                </a>
              </div>
              <div className="progress">
                <Slider
                  value={progress}
                  onChange={sliderChange}
                  onAfterChange={sliderAfterChange}
                />
                <div className="time">
                  <span className="now-time">{showCurrentTime}</span>
                  <span className="divider">/</span>
                  <span className="duration">{showDuration}</span>
                </div>
              </div>
            </div>
          </PlayInfo>
          <Operator sequence={sequence}>
            <div className="left">
              <button className="sprite_player favor"></button>
              <button className="sprite_player share"></button>
            </div>
            <div className="right sprite_player">
              <button className="sprite_player voice"></button>
              <button className="sprite_player cycle" onClick={(e) => changeSequcnce()}></button>
              <button className="sprite_player list">{playList.length}</button>
            </div>
          </Operator>
        </div>
        <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)} onEnded={(e) => ended()}></audio>
      </AppPlayerBarWrapper>
    </div>
  );
});
