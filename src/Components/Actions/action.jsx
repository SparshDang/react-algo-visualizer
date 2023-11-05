import React from 'react'

import style from './action.module.css'

export default function Action(props) {
  return (
    <div className={style.actions}>
    <button
      onClick={props.nextFunction}
      disabled={props.nextButtonDiabled}
    >
      Next
    </button>
    <button
      onClick={props.prevFunction}
      disabled={props.prevButtonDiabled}
    >
      Previous
    </button>
    <button onClick={props.thirdBtnHandler}>{props.thirdBtnText}</button>
  </div>
  )
}
