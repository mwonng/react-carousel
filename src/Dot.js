import React from 'react';

export default (props) => {
  const isCurrent = props.index === props.currentIndex? 'current':'';
  return(
    <div className={`dot ${isCurrent}`}
      onClick={() => props.clickHandler(props.index)}>
    </div>
  )
}