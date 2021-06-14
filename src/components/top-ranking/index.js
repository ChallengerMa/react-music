import React, { memo } from "react";
import { useDispatch } from "react-redux";

import { getCurrentSongAction } from "@/pages/player/store";

import { TopRankingWrapper } from "./style";

export default memo(function TopRanking(props) {
  const dispatch = useDispatch();

  const { info } = props;
  const { tracks = [] } = info;

  const getSong = (id) => {
    dispatch(getCurrentSongAction(id));
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={info.coverImgUrl} alt="" />
          <a href="todo" className="image_cover cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="todo" className="title">
            {info.name}
          </a>
          <div>
            <button className="btn sprite_02 play"></button>
            <button className="btn sprite_02 favor"></button>
          </div>
        </div>
      </div>
      <ul className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <li key={item.id} className="list-item">
              <div className="num">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="tools">
                  <button className="btn sprite_02 play" onClick={(e) => getSong(item.id)}></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="more">更多内容&gt;</div>
    </TopRankingWrapper>
  );
});
