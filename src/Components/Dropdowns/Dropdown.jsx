import React, { useState } from "react";
import { BsFillCaretUpFill } from "react-icons/bs";

import style from "./Dropdown.module.css";

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={style.main}>
      <div className={style.button} onClick={openCloseHandler}>
        <div>{props.title}</div>
        <BsFillCaretUpFill className={isOpen ? style.flipped : ""}/>
      </div>
      <div className={`${style.children} ${isOpen ? style.open : ""}`}>
        {props.children}
      </div>
    </div>
  );
}
