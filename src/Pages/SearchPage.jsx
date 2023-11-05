import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BarsContainer from "../Components/SorterPageComponents/BarsContainer";
import Action from "../Components/Actions/action";

import { linearSearch, binarySearch } from "../Algorithms";

import style from "./SearchPage.module.css";

export default function SearchPage() {
  const [currentElement, setCurrentElement] = useState(0);
  const [elementsList, setElementList] = useState([]);
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const params = useParams();
  const algo = params.id;
  const [elementToSearch, setElementToSearch] = useState();

  const setElementToSearchHandler = () => {
    let searchResult;
    let element = Math.floor(Math.random() * 12);
    setElementToSearch(element);
    if (algo === "binary") {
      searchResult = binarySearch(list, element);
      setElementList(searchResult);
    } else {
      searchResult = linearSearch(list, element);
      setElementList(searchResult);
    }
    setCurrentElement(0);
  };

  useEffect(setElementToSearchHandler, []);

  const disableScreen =
    currentElement === elementsList.length - 1 &&
    elementsList[currentElement] === -1;
  const elementFound = currentElement === elementsList.length - 1;

  return (
    <>
          <h1
        style={{
          textAlign: "center",
        }}
      >
        {algo.toUpperCase()} Search
      </h1>
    <div className={style.barsContainerWrapper}>
      <div className={style.inner_container}>
        <h2>Element To Search : {elementToSearch}</h2>
        {disableScreen && <h3>Element Not Found</h3>}
        {!disableScreen && elementFound && <h3>Element Found</h3>}
      </div>

      <BarsContainer
        list={list}
        current={elementsList[currentElement]}
        elementFound={currentElement === elementsList.length - 1}
        searching={true}
      />
      <div className={style.divider}></div>
      <Action
        nextFunction={() => setCurrentElement((prev) => prev + 1)}
        nextButtonDiabled={
          currentElement === elementsList.length - 1 || disableScreen
        }
        prevFunction={() => setCurrentElement((prev) => prev - 1)}
        prevButtonDiabled={currentElement === 0 || disableScreen}
        thirdBtnHandler={setElementToSearchHandler}
        thirdBtnText="Change Element"
      />
    </div>
    </>
  );
}
