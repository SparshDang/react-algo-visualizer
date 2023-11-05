import React from 'react'

import style from './Bar.module.css';

export default function Bar({value, height}) {

  return (
    <div className={style.bar} style={{height:`${height}rem`}}>
      {value}
    </div>
  )
}
