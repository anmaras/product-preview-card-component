import React, { Component } from 'react';
import style from './ProductImage.module.css';

class ProductImage extends Component {
  render() {
    const { src, srcDesk } = this.props;
    return (
      <picture>
        <source media="(min-width:736px" srcSet={srcDesk}></source>
        <img className={style.img} src={src} alt="perfume top photograph"></img>
      </picture>
    );
  }
}

export default ProductImage;
