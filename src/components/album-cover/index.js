import React, { memo } from "react";

import { getImage } from "@/utils/format-utils";

import { AlbumCoverWrapper } from "./style";

export default memo(function AlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px" } = props;
  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="image">
        <img src={getImage(info.picUrl, size)} alt="" />
        <a href="/todo" className="mask image_cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="title text-nowrap">{info.name}</div>
        <div className="editor text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  );
});
