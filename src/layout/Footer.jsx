import React from "react";
import "./Footer.css";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div>
        질문이 있으신가요? 문의 전화{" "}
        <a href="tel:010-243420234234">010-1234-5678</a> (수신자 부담)
      </div>
      <ul>
        <li>
          <button>자주 묻는 질문</button>
        </li>
        <li>
          <button>고객센터</button>
        </li>
        <li>
          <button>계정</button>
        </li>
        <li>
          <button>미디어 센터</button>
        </li>
        <li>
          <button>투자 정보</button>
        </li>
        <li>
          <button>넷플릭스</button>
        </li>
        <li>
          <button>이용 약관</button>
        </li>
        <li>
          <button>개인정보 처리방침</button>
        </li>
        <li>
          <button>쿠키 설정</button>
        </li>
        <li>
          <button>회사 정보</button>
        </li>
        <li>
          <button>문의 하기</button>
        </li>
      </ul>
      <div>
        <button>
          <IoGlobeOutline />
          한국어
        </button>
      </div>
    </footer>
  );
};

export default Footer;
