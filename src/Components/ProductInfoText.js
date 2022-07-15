import React, { Component } from 'react';
import cartLogo from '../Images/icon-cart.svg';

class ProductInfoText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: this.props.info.price,
    };
  }

  priceAfterDiscount = () => {
    const discount = 11.7647;

    this.setState({
      price: this.state.price / discount,
    });
  };

  render() {
    const { category, title, description, price } = this.props.info;
    return (
      <div>
        <p>{category}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          {this.state.price} <span>{`$${price}`}</span>
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

export default ProductInfoText;
