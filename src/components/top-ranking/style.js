import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  flex: 1;
  box-sizing: border-box;

  .header {
    display: flex;
    height: 100px;
    margin: 20px 0 0 20px;

    .image {
      position: relative;
      width: 80px;
      height: 80px;

      img {
        width: 100%;
        height: 100%;
      }
      .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .info {
      margin: 5px 0 0 10px;
      .title {
        font-size: 14px;
        font-weight: 700;
        color: #000;
        &:hover {
          text-decoration: underline;
        }
      }

      .btn {
        width: 22px;
        height: 22px;
        margin: 10px 10px 0 0;
        cursor: pointer;
      }

      .play {
        background-position: -267px -205px;
      }
      .favor {
        background-position: -300px -205px;
      }
    }
  }

  .list {
    margin: 0 5px 0 15px;
    .list-item {
      display: flex;
      align-items: center;
      height: 32px;
      position: relative;

      .num {
        width: 35px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        font-size: 16px;
        color: #666;
      }

      &:nth-child(-n + 3) .num {
        color: #c10d0c;
      }

      .info {
        width: 170px;
        display: flex;

        .name {
          flex: 1;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }

        .tools {
          display: flex;
          display: none;
          align-items: center;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            cursor: pointer;
            margin-left: 8px;
          }
          .play {
            background-position: -267px -268px;
          }

          .add {
            position: relative;
            top: 2px;
            background-position: 0px -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }

        &:hover .tools {
          display: block;
        }
      }
    }
  }

  .more {
    height: 32px;
    line-height: 32px;
    text-align: right;
    color: #000;
    margin-right: 32px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
