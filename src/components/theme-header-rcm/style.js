import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      color: #333;
      margin-right: 20px;
    }

    .keyword {
      display: flex;
      .item {
        a {
          color: #666;
        }
        .divider {
          padding: 0 10px;
          color: #ccc;
        }
        &:last-child .divider {
          display: none;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    a {
      color: #666;
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`;
