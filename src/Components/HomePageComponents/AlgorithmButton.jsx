import React from 'react'
import { Link } from 'react-router-dom';

import style from './AlgorithmButton.module.css';

export default function AlgorithmButton(props) {
  return (
    <Link className={style.main} to={props.link}>
      {props.text}
    </Link>
  )
}
