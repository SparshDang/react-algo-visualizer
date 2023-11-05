import React from "react";

import Dropdown from "./Dropdowns/Dropdown";

import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.main}>
      <div className={style.title}> Algo Visualizer</div>
      <div className={style["dropdown-container"]}>
        <Dropdown title="Sorting">
          <div>Bubble Sort</div>
          <div>Selection Sort</div>
          <div>Insertion Sort</div>
          <div>Merge Sort</div>
        </Dropdown>
        <Dropdown title="Seaching">
          <div>Linear Search</div>
          <div>Binary Search</div>
        </Dropdown>
      </div>
    </div>
  );
}
