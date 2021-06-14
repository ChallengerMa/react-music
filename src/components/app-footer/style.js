import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;

    .left {
      width: 520px;
      height: 115px;
      padding-top: 15px;
      .para {
        height: 24px;

        .sep {
          padding-right: 14px;
        }

        a.g-wrap3,
        a.s-fc3 {
          color: #666;
        }
        a.s-fc3 {
          padding-right: 10px;
        }
        span.email {
          color: #333;
        }
      }

      .link {
        display: flex;

        .link-item {
          a {
            color: #999;
            &:hover {
              color: #999;
              text-decoration: underline;
            }
          }
        }

        .line {
          padding: 0 10px;
          color: #c2c2c2;
        }
      }
    }

    .right {
      width: 420px;
      height: 70px;
      margin-top: 33px;
      display: flex;
      justify-content: space-between;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .link {
          width: 50px;
          height: 45px;
          color: red;
          background-image: url(${require("@/assets/img/sprite_footer_02.png").default});
          background-size: 110px 450px;
        }
        :nth-child(1) .link {
          background-position: -60px -101px;
        }
        :nth-child(2) .link {
          background-position: 0 0;
        }
        :nth-child(3) .link {
          background-position: -60px -50px;
        }
        :nth-child(4) .link {
          background-position: 0 -101px;
        }

        .title {
          margin-top: 5px;
          display: block;
          width: 52px;
          height: 10px;
          background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
          background-size: 180px 100px;
        }

        :nth-child(1) .title {
          background-position: 2px -90px;
        }

        :nth-child(2) .title {
          background-position: 0 0;
          margin-top: 7px;
        }

        :nth-child(3) .title {
          background-position: 0 -54px;
          margin-top: 6px;
        }

        :nth-child(4) .title {
          background-position: -1px -72px;
          margin-top: 6px;
        }
      }
    }
  }
`;
