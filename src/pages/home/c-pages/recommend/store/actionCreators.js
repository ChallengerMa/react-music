import {
  CHANGE_HOT_RECOMMENDS,
  CHANGE_TOP_BANNERS,
  CHANGE_NEW_ALBUMS,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING,
} from "./constants";

import { getTopBanners, getHotRecommends, getNewAlbums, getTopList } from "@/services/recommend";

export const changeTopBannerAction = (res) => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

export const changeHotRecommendsAction = (res) => ({
  type: CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});

export const changeNewAlbumAction = (res) => ({
  type: CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
});

export const changeUpRankingAction = (res) => ({
  type: CHANGE_UP_RANKING,
  upRanking: res.playlist,
});

export const changeNewRankingAction = (res) => ({
  type: CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

export const changeOriginRankingAction = (res) => ({
  type: CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendsAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeNewRankingAction(res));
          break;
        case 2:
          dispatch(changeOriginRankingAction(res));
          break;
        case 3:
          dispatch(changeUpRankingAction(res));
          break;
        default:
      }
    });
  };
};
