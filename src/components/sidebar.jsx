import React from "react";
import aside from "../assets/images/aside.jpg";
import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside>
      <div className="aside__container">
        <span className="__aside__title">ABOUT ME</span>
        <img
          className="aside__image"
          src={aside}
          alt=""
        />
        <p style={{ maxWidth: "30em", margin: "auto" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          numquam voluptate fuga unde eligendi, in atque architecto ipsam illum
          animi distinctio recusandae veniam est. Corporis dolorem rem harum
          autem quasi.
        </p>
        <div className="aside__item">
          <span
            className="aside__title"
            style={{ maxWidth: "40em", margin: "4.01em auto" }}
          >
            CATEGORIES
          </span>
          <div style={{  display: 'flex', justifyContent: "center" }}>
                      <ul className="list-none inline-block categorise" style={{ maxWidth: "30em", textAlign: "center" }}>
              <li>Life</li>
              <li>Music</li>
              <li>Style</li>
              <li>Sport</li>
              <li>Tech</li>
              <li>Game</li>
              <li>Cinema</li>
              <li>Fashion</li>
              <li>Tech</li>
              <li>Game</li>
              <li>Cinema</li>
              <li>Fashion</li>
            </ul>
          </div>
        </div>
        <div className="aside__item">
          <span
            className="aside__title"
            style={{ maxWidth: "40em", margin: "4.01em auto" }}
          >
            FOLLOW US
          </span>
          <ul className="flex gap-3 aside__icons">
            <IconContext.Provider
              value={{ size: 24, className: "social__link" }}
            >
              <FaFacebookSquare />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ size: 24, className: "social__link" }}
            >
              <FaInstagramSquare />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ size: 24, className: "social__link" }}
            >
              <FaPinterestSquare />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ size: 24, className: "social__link" }}
            >
              <FaLinkedin />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ size: 24, className: "social__link" }}
            >
              <FaWhatsappSquare />
            </IconContext.Provider>
            <IconContext.Provider
              value={{ size: 24, className: "social__link" }}
            >
              <FaTwitterSquare />
            </IconContext.Provider>
          </ul>
        </div>
      </div>
    </aside>
  );
}
