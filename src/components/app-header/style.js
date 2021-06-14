import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 157px;
    height: 100%;
    background-position: 0 0;
    margin-right: 20px;
    text-indent: -9999px;
  }

  .list {
    display: flex;
    line-height: 70px;
    text-align: center;
  }

  .list-item {
    position: relative;
    a {
      display: block;
      padding: 0 20px;
      color: #ccc;

      &:hover,
      &.active {
        color: #fff;
        text-decoration: none;
        background-color: #000;
      }

      &.active .icon {
        position: absolute;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        background-position: -226px 0;
      }
    }

    :last-child a {
      position: relative;
      ::after {
        content: "";
        position: absolute;
        top: 21px;
        left: 100px;
        width: 28px;
        height: 19px;
        background-image: url(${require("@/assets/img/sprite_01.png").default});
        background-position: -190px 0;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;

  .search {
    margin-top: 19px;
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    margin: 19px 0 0 16px;
    font-size: 12px;
    color: #aaa;
    border: 1px solid #4f4f4f;
    border-radius: 16px;

    &:hover {
      border-color: #fff;
      color: #fff;
      cursor: pointer;
    }
  }

  .login {
    width: 28px;
    color: #787878;
    font-size: 12px;
    margin: 26px 0 0 20px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
