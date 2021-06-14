import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { discoverMenu } from "@/common/local-data";

import { HeaderDiscover } from "./style";

export default memo(function MYHome(props) {
  const { route } = props;
  return (
    <HeaderDiscover>
      <div className="top">
        <ul className="wrapper wrap-v1">
          {discoverMenu.map((item, index) => {
            return (
              <li key={item.title} className="item">
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {renderRoutes(route.routes)}
    </HeaderDiscover>
  );
});
