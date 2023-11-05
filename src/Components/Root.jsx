import React from "react";
import { Link, Outlet } from "react-router-dom";

import Dropdown from "./Dropdowns/Dropdown";
import DropDownButton from "./Dropdowns/DropDownButtons";

import style from "./Root.module.css";

export default function Root() {
  return (
    <>
      <div className={style.main}>
        <Link to="/" className={style.title}>
          Algo Visualizer
        </Link>
        <div className={style["dropdown-container"]}>
          <Dropdown title="Sorting">
            <DropDownButton text="Bubble Sort" url="sort/bubble" />
            <DropDownButton text="Selection Sort" url="sort/selection" />
            <DropDownButton text="Insertion Sort" url="sort/insertion" />
            <DropDownButton text="Merge Sort" url="sort/merge" />
          </Dropdown>
          <Dropdown title="Searching">
            <DropDownButton text="Linear Search" url="search/linear" />
            <DropDownButton text="Binary Search" url="search/binary" />
          </Dropdown>
        </div>
      </div>
      <Outlet />
    </>
  );
}
