import React, { Component } from 'react';
import { HomeProps, HomeState } from '../../models';

export default class Home extends Component<HomeProps, HomeState> {
  state: HomeState = {
    clicks: 0
  }

  onClick = () => {
    this.setState(({clicks}) => ({
      clicks: clicks + 1
    }))
  }

  render() {
    const { state, props, onClick } = this;
    const { clicks } = state;
    const { title } = props;

    return (
      <h1 onClick={onClick}>
        {title} - You've clicked this header {clicks} times. Wow.
      </h1>
    )
  }
}