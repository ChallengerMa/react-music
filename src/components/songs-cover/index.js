import React, { memo } from "react";

import { getCount, getImage } from "@/utils/format-utils";

import { SongsCoverWrapper } from "./style";

export default memo(function SongsCover(props) {
  const { info } = props;
  return (
    <SongsCoverWrapper>
      <div className="top">
        <img src={getImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <i className="erji sprite_icon"></i>
          <span className="count">{getCount(info.playCount)}</span>
          <i className="play sprite_icon"></i>
        </div>
      </div>
      <div className="bottom">
        <span>{info.name}</span>
      </div>
    </SongsCoverWrapper>
  );
});
