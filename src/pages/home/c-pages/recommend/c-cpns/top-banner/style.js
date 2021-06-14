import styled from "styled-components";

export const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center center/6000px;
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`;
export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    width: 730px;
    height: 270px;
    background-color: red;
    /* overflow: hidden; */

    .image {
      width: 100%;
    }
  }
`;
export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
})`
  display: "block";
  width: 250px;
  height: 270px;
  background: url(${require("@/assets/img/download.png").default});
`;

export const BannerControl = styled.div`
  button {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    width: 37px;
    height: 63px;
    background-color: transparent;
    background-image: url(${require("@/assets/img/banner_sprite.png").default});
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
