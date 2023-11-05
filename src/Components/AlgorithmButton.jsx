import React from 'react'
import style from './AlgorithmButton.module.css';

export default function AlgorithmButton(props) {
  return (
    <div className={style.main}>
      {props.text}
    </div>
  )
}
