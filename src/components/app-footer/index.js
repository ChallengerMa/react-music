import React, { memo } from "react";

import { footerLinks, footerImages } from "@/common/local-data";

import { FooterWrapper } from "./style";

export default memo(function MYAppFooter() {
  return (
    <FooterWrapper>
      <div className="wrap-v2 content">
        <div className="left">
          <div className="para">
            <ul className="link">
              {footerLinks.map((item, index) => {
                return (
                  <li key={item.title} className="link-item">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                    <span className="line">|</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="para">
            <span className="sep">网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a
              href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
              className="g-wrap3"
              target="_blank"
              rel="noreferrer"
            >
              浙网文[2021] 1186-054号
            </a>
          </div>
          <div className="para">
            <span className="sep">违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <span className="email">ncm5990@163.com</span>
          </div>
          <div className="para">
            <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noreferrer" className="s-fc3">
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
              target="_blank"
              rel="noreferrer"
              className="g-wrap3"
            >
              浙公网安备 33010902002564号
            </a>
          </div>
        </div>
        <ul className="right">
          {footerImages.map((item, index) => {
            return (
              <li className="item" key={item.link}>
                <a href={item.link} rel="noopener noreferrer" target="_blank" className="link">
                  {" "}
                </a>
                <span className="title">{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </FooterWrapper>
  );
});
