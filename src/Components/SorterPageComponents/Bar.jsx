import React from "react";

import { motion } from "framer-motion";

import style from "./Bar.module.css";

export default function Bar(props) {
  const height = ((props.value + 1) / 10) * 20;

  return (
    <motion.div
      className={`${style.bar} ${props?.current ? style.current : ""} ${props?.found ? style.found : ""}`}
      layout
      style={{ height: `${height}rem` }}
    >
        {props.show && props.value}
    </motion.div>
  );
}
