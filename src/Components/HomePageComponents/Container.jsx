import React from 'react'

import style from './Container.module.css';

export default function Container(props) {
  return (
    <div className={style.main}>
        <div className={style.header}>{props.title}</div>
        <div className={style.divider}></div>
        <div className={style.children}>
            {props.children}
        </div>   
    </div>
  )
}
