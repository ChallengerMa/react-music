export const getCount = (num) => {
  if (num < 100000) return num;
  else if (num < 100000000) return Math.floor(num / 10000) + "万";
  else return Math.floor(num / 100000000) + "亿";
};

export const getImage = (url, size) => {
  return url + `?param=${size}×${size}`;
};

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export const getPlaySong = (id) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};
