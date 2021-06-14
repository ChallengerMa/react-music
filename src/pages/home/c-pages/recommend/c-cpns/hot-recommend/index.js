import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// import { HotRecommendWrapper } from "./style";
import ThemeHeaderRCM from "@/components/theme-header-rcm";

import { getHotRecommendAction } from "../../store/actionCreators";
import SongsCover from "@/components/songs-cover";
import { HotRecommendWrapper } from "./style";

export default memo(function HotRecommend() {
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="list">
        {hotRecommends.map((item, index) => {
          return <SongsCover info={item} key={item.id} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
