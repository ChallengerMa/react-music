import React, { memo } from "react";
import { HeaderWrapper } from "./style";
import PropTypes from "prop-types";

const ThemeHeaderRCM = memo(function (props) {
  const { title, keywords } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h2 className="title">{title}</h2>
        <ul className="keyword">
          {keywords.map((item, index) => {
            return (
              <li key={item} className="item">
                <a href="todo">{item}</a>
                <span className="divider">|</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="sprite_02 icon"></i>
      </div>
    </HeaderWrapper>
  );
});

ThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
};

ThemeHeaderRCM.defaultProps = {
  keywords: [],
};

export default ThemeHeaderRCM;
