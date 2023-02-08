import React from "react";
import banner from "../assets/images/banner.jpg";

export default function Header() {
  return (
    <header>
      <div className="header__container">
        <span className="header__title">REACT & NODE</span>
        <span className="header__subtitle">BLOG</span>
      </div>
      <img className="header__image" src={banner} alt="" />
      <div className="bottom__fade__bottom"></div>
    </header>
  );
}
