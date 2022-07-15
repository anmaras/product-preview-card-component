import React, { Component } from 'react';
import cartLogo from '../Images/icon-cart.svg';
import style from './ProductInfo.module.css';

class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: this.props.price,
    };
  }

  render() {
    const { category, title, description, price } = this.props;

    return (
      <section className={style['product-info']}>
        <p className={style['product-id']}>{category}</p>
        <h1 className={style['product-title']}>{title}</h1>
        <p className={style['product-description']}>{description}</p>
        <p className={style['product-price']}>
          $149.99 <span>{`$${price}`}</span>
        </p>
        <button>
          <img
            src={cartLogo}
            style={{ display: 'inline' }}
            alt="cart logo"
          ></img>
          Add to Cart
        </button>
      </section>
    );
  }
}

export default ProductInfo;
