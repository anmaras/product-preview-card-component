import React, { Component } from 'react';

class ProductImage extends Component {
  render() {
    const { src } = this.props;
    return <img src={src} alt="perfume top photograph"></img>;
  }
}

export default ProductImage;
