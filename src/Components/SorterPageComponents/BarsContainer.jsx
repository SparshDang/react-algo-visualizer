import React from "react";

import style from "./BarsContainer.module.css";
import Bar from "./Bar";

export default function BarsContainer(props) {
  return (
    <div className={style.container}>
      {props.list.map((item, index) => {
        return (
          <Bar
            key={item}
            value={item}
            current={props?.current === index}
            found={props?.elementFound && props?.current === index}
            show={props.searching}
          />
        );
      })}
    </div>
  );
}
