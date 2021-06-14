import React, { memo } from "react";
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from "./style";

import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";

export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});

// function Recommend(props) {
//   const { getTopBanners } = props;
//   useEffect(() => {
//     getTopBanners();
//   }, [getTopBanners]);

//   return (
//     <div>
//       <h2>Recommend</h2>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getTopBanners() {
//     dispatch(getTopBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
