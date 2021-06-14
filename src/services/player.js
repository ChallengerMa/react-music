import request from "./request";

export const getSongDetail = (ids) => {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
};

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  });
}
