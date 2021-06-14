import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  width: ${(props) => props.width + "px"};

  .image {
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};

    img {
      width: ${(props) => props.size + "px"};
      height: ${(props) => props.size + "px"};
    }

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props) => props.size + "px"};

    .title {
      color: #000;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .editor {
      color: #666;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
