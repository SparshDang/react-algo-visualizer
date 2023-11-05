import React from "react";
import { Link, Outlet } from "react-router-dom";

import Dropdown from "./Dropdowns/Dropdown";

import style from "./Root.module.css";

export default function Root() {
  return (
    <>
      <div className={style.main}>
        <Link to="/" className={style.title}> Algo Visualizer</Link>
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
      <Outlet/>
    </>
  );
}
