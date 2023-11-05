import React from 'react'

import style from './DropDownButtons.module.css'
import { Link } from 'react-router-dom'

export default function DropDownButton(props) {
  return (
    <Link to={props.url}>
    <div className={style.main}>
        {props.text}     
    </div>
    </Link>
  )
}
