import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BarsContainer from "../Components/SorterPageComponents/BarsContainer";
import { linearSearch, binarySearch } from "../Algorithms";

import style from "./SearchPage.module.css";

export default function SearchPage() {
  const [currentElement, setCurrentElement] = useState(0);
  const [elementsList, setElementList] = useState([]);
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const params = useParams();
  const algo = params.id;
  const [elementToSearch, setElementToSearch] = useState();

  useEffect(() => {
    let searchResult;
    let element = Math.floor(Math.random() * 11);
    setElementToSearch(element);
    if (algo === "binary") {
      searchResult = binarySearch(list, element);
      setElementList(searchResult);
    } else {
      searchResult = linearSearch(list, element);
      setElementList(searchResult);
    }
  }, []);

  return (
    <div className={style.barsContainerWrapper}>
        <div>
            <h2>Element To Search : {elementToSearch}</h2>
        </div>
      <BarsContainer
        list={list}
        current={elementsList[currentElement]}
        elementFound={currentElement === elementsList.length - 1}
        searching={true}
      />
      <div className={style.divider}></div>
      <div className={style.actions}>
        <button
          onClick={() => setCurrentElement((prev) => prev + 1)}
          disabled={currentElement === elementsList.length - 1}
        >
          Next
        </button>
        <button
          onClick={() => setCurrentElement((prev) => prev - 1)}
          disabled={currentElement === 0}
        >
          Previous
        </button>
      </div>
    </div>
  );
}
