import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { headerLinks } from "@/common/local-data";
import { HeaderLeft, HeaderWrapper, HeaderRight } from "./style";

export default memo(function MYAppHeader() {
  const showSelectItem = (item, index) => {
    if (index === 3 || index === 4) {
      return (
        <span>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        </span>
      );
    } else {
      return (
        <span>
          <NavLink to={item.link} exact>
            {item.title}
            <i className="sprite_01 icon"></i>
          </NavLink>
        </span>
      );
    }
  };
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/#" className="logo sprite_01">
            网易云音乐
          </a>
          <ul className="list">
            {headerLinks.map((item, index) => {
              return (
                <li key={item.title} className="list-item">
                  {showSelectItem(item, index)}
                </li>
              );
            })}
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search" />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
