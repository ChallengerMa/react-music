import { getSongDetail, getLyric } from "@/services/player";
import { getRandomNumber } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";

import * as actionTypes from "./constants";

export const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

export const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

export const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});

export const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList,
});

export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex,
});

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(["player", "sequence"]);
    const playList = getState().getIn(["player", "playList"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    switch (sequence) {
      case 1:
        //随机播放
        if (playList.length === 1) break;
        let index = -1;
        do {
          index = getRandomNumber(playList.length);
        } while (index === currentSongIndex);
        currentSongIndex = index;
        break;
      default:
        //上一个，下一个
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }

    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(getLyricAction(currentSong.id));
  };
};

export const getCurrentSongAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const index = playList.findIndex((item) => item.id === ids);

    let song = null;
    if (index !== -1) {
      song = playList[index];
      dispatch(changeCurrentSongIndexAction(index));
      dispatch(changeCurrentSongAction(song));
      dispatch(getLyricAction(song.id));
    } else {
      getSongDetail(ids).then((res) => {
        song = res.songs && res.songs[0];
        if (!song) return;

        const newList = [...playList];
        newList.push(song);

        dispatch(changeCurrentSongAction(song));
        dispatch(changePlayListAction(newList));
        dispatch(changeCurrentSongIndexAction(newList.length - 1));

        dispatch(getLyricAction(song.id));
      });
    }
  };
};

export const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then((res) => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricListAction(lyricList));
    });
  };
};
