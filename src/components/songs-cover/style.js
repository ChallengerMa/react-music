import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
  width: 140px;
  margin: 20px 0;

  .top {
    height: 140px;
    position: relative;

    img {
      width: 100%;
    }

    .cover {
      position: absolute;
      display: flex;
      align-items: center;
      bottom: 0;
      width: 100%;
      height: 27px;
      background-color: rgba(0, 0, 0, 0.4);

      .erji {
        width: 14px;
        height: 11px;
        margin-left: 10px;
        background-position: 0 -24px;
      }

      .count {
        margin-left: 7px;
        color: #ccc;
      }

      .play {
        position: absolute;
        right: 10px;
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
  }

  .bottom {
    color: #000;
    font-size: 14px;
  }
`;
