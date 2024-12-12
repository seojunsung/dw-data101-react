import React from "react";
import "./Header.css";
import { SiNetflix } from "react-icons/si";
import { IoGlobeOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <button className="logo">
        <SiNetflix />
      </button>

      <ul className="btns">
        <li>
          <button className="h lang">
            <IoGlobeOutline />
            한국어
          </button>
        </li>
        <li>
          <button className="h login">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
