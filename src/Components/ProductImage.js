import React, { Component } from 'react';
import style from './ProductImage.module.css';

class ProductImage extends Component {
  render() {
    const { src } = this.props;
    return (
      <img className={style.img} src={src} alt="perfume top photograph"></img>
    );
  }
}

export default ProductImage;
