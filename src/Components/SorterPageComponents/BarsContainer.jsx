import React from 'react';

import style from './BarsContainer.module.css';
import Bar from './Bar';

export default function BarsContainer(props) {
  return (
    <div className={style.container}>
        {props.list.map(
            (item, index) => {
                const height = ((item + 1)/10) * 16;
                return <Bar key={index} value={item} height={height}/>
            }
        )}
      
    </div>
  )
}
