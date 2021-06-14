import styled from "styled-components";

export const HeaderDiscover = styled.div`
  .top {
    background-color: #c20c0c;
    height: 30px;

    .wrapper {
      display: flex;
      padding-left: 180px;
      position: relative;
      top: -5px;

      .item {
        a {
          display: inline-block;
          color: #fff;
          padding: 0 13px;
          height: 20px;
          line-height: 20px;
          margin: 7px 17px 0;

          &:hover,
          &.active {
            border-radius: 20px;
            background-color: #9b0909;
            text-decoration: none;
          }
        }
      }
    }
  }
`;
