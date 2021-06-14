import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopListAction } from "../../store/actionCreators";

import ThemeHeaderRCM from "@/components/theme-header-rcm";
import TopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";

export default memo(function RecommendRanking() {
  const dispatch = useDispatch();
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单" />
      <div className="content">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});
