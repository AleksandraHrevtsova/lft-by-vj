import React, { Component, createRef } from 'react';
import Button from './Button';
import classes from './Player.module.css';

export default class Player extends Component{
  playerRef = createRef();

  play = () => this.playerRef.current.play();

  pause = () => this.playerRef.current.pause();

  render() {
    console.log(this.playerRef);
    return (
      <div>
        <video className={classes.player} src={this.props.source} ref={this.playerRef} />
      </div>

      <div>
        <Button label="Play" onClick={this.play}/>
        <Button label="Pause" onClick={this.pause}/>
      </div>
    )
  }
}
