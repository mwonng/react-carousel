import React from 'react';
import './Indicator.css';
import Dot from './Dot';

export default (props) => {
  let array = Array(props.carouselNum).fill(0)
  const indicator = array.map((a,i)=>{
    return(
      <Dot key={i} index={i} clickHandler={props.dotAction} currentIndex={props.currentIndex} />
    )
  })
  return(
    <div className="indicator">
      {indicator}
    </div>
  )
}