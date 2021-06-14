import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  margin-top: 50px;
  .content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;

    .album {
      width: 645px;
      height: 180px;
      .page {
        display: flex !important;
        justify-content: space-around;
        margin-top: 30px;
        overflow: hidden;
      }
    }

    .btn {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .left {
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .right {
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }
  }
`;
