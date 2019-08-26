import React, { Component, createRef } from 'react';
//import { jsx, css } from '@emotion/core';
import css from './Modal.module.css';

export default class Modal extends Component {
  // слушатель событий вешается на глобюпеременную window, чтобы обеспечить
  // закрытие модального окна через Esc или нажатиев любомместе вокруг окна
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  // важно снять слушателя после закрытия окна для профилактики засорения памяти
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { children } = this.props;
    return (
      <div
        className={css.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={css.modal}>{children}</div>
      </div>
    );
  }
}
