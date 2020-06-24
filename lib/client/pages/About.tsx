import React, { useState } from 'react';
import { HomeProps } from '../../models';

export default (props: HomeProps) => {
  const [ clicks, setClicks ] = useState(0);

  function onClick() {
    setClicks(clicks + 1);
  }

  return (
    <h1 onClick={onClick}>
      {props.title} - You've clicked this header {clicks} times. Wow.
    </h1>
  )
}