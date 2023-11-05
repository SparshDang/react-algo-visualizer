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
            <Link to="sort/bubble">Bubble Sort</Link>
            <Link to="sort/selection">Selection Sort</Link>
            <Link to="sort/insertion">Insertion Sort</Link>
            <Link to="sort/merge">Merge Sort</Link>
          </Dropdown>
          <Dropdown title="Seaching">
            <Link to="search/linear">Linear Search</Link>
            <Link to="search/linear">Binary Search</Link>
          </Dropdown>
        </div>
      </div>
      <Outlet/>
    </>
  );
}
