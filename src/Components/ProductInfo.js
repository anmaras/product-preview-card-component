import React, { Component } from 'react';
import cartLogo from '../Images/icon-cart.svg';

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
      <div>
        <p>{category}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
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
      </div>
    );
  }
}

export default ProductInfo;
