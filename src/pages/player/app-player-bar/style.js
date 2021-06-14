import styled from "styled-components";

export const AppPlayerBarWrapper = styled.div`
  background: url(${require("@/assets/img/playbar_sprite.png").default}) repeat 0 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  height: 42px;

  .prev,
  .next {
    width: 28px;
    height: 28px;
    margin: 5px 8px 0 0;
    cursor: pointer;
  }
  .prev {
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }

  .play {
    cursor: pointer;
    width: 36px;
    height: 36px;
    margin-right: 8px;
    background-position: 0 ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    &:hover {
      background-position: -40px ${(props) => (props.isPlaying ? "-165px" : "-204px")};
    }
  }
`;
export const PlayInfo = styled.div`
  display: flex;
  align-items: center;

  .image {
    width: 34px;
    height: 35px;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 15px;
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  .play {
    display: flex;
    flex-direction: column;
    width: 581px;
    height: 37px;

    .word {
      position: relative;
      top: -6px;
      height: 28px;
      line-height: 28px;
      .song {
        color: #e8e8e8;
      }

      .singer {
        margin-left: 15px;
        color: #9b9b9b;
      }
    }

    .progress {
      display: flex;
      align-items: center;
      height: 9px;
      position: relative;
      top: -6px;

      .ant-slider {
        width: 466px;
        margin: 0;
        padding: 0;

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -250px;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png").default}) left -66px;
        }

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png").default}) right 0;
        }
      }

      .time {
        margin-left: 10px;
        .now-time {
          color: #a1a1a1;
        }
        .divider {
          color: #797979;
          margin: 0 3px;
        }

        .duration {
          color: #797979;
        }
      }
    }
  }
`;
export const Operator = styled.div`
  display: flex;
  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;

    .favor,
    .share {
      cursor: pointer;
      width: 25px;
      height: 25px;
      margin-right: 2px;
    }
    .favor {
      background-position: -88px -163px;
      &:hover {
        background-position: -88px -189px;
      }
    }
    .share {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
  }

  .right {
    padding-left: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-position: -147px -248px;

    .voice,
    .cycle,
    .list {
      width: 25px;
      height: 25px;
      margin-right: 2px;
      cursor: pointer;
    }
    .list {
      box-sizing: content-box;
      padding-left: 21px;
      width: 38px;
    }

    .voice {
      background-position: -2px -248px;

      &:hover {
        background-position: -31px -248px;
      }
    }

    .cycle {
      background-position: ${(props) => {
        switch (props.sequence) {
          case 0:
            return "-3px -344px";
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
        }
      }};

      &:hover {
        background-position: ${(props) => {
          switch (props.sequence) {
            case 0:
              return "-33px -344px";
            case 1:
              return "-93px -248px";
            case 2:
              return "-93px -344px";
            default:
          }
        }};
      }
    }

    .list {
      background-position: -42px -68px;
      color: #666;

      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`;
