import React, { memo, useEffect, useRef } from "react";
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Carousel } from "antd";
import AlbumCover from "@/components/album-cover";
import { getNewAlbumAction } from "../../store/actionCreators";
import { NewAlbumWrapper } from "./style";

export default memo(function NewAlbum() {
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="left btn sprite_02" onClick={(e) => carouselRef.current.prev()}></button>
        <div className="album">
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map((item, index) => {
              return (
                <div className="page" key={item}>
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <AlbumCover info={item} key={item.picId} size={100} width={118} bgp="-570px" />;
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button className="right btn sprite_02" onClick={(e) => carouselRef.current.next()}></button>
      </div>
    </NewAlbumWrapper>
  );
});
