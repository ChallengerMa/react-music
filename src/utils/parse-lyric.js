const lyricExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export const parseLyric = (str) => {
  const lineLyric = str.split("\n");
  const lyric = [];

  for (const item of lineLyric) {
    if (item) {
      const result = lyricExp.exec(item);
      if (!result) continue;
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
      const time = time1 + time2 + time3;
      const content = item.replace(lyricExp, "").trim();
      lyric.push({ time, content });
    }
  }
  return lyric;
};
