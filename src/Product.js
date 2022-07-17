import React, { Component } from 'react';
import ProductImage from './Components/ProductImage';
import ProductInfo from './Components/ProductInfo';
import style from './Product.module.css';
import imageProductMobile from './Images/image-product-mobile.jpg';
import imageProductDesktop from './Images/image-product-desktop.jpg';

const mockup = {
  imgSrc: imageProductMobile,
  imgSrcDesktop: imageProductDesktop,
  productCategory: 'Perfume',
  productTitle: 'Gabrielle Essence Eau De Parfum',
  productDescription: `A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.`,
  price: 169.99,
  discount: 11.7654 / 100,
};

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: mockup.imgSrc,
      imgSrcDesktop: mockup.imgSrcDesktop,
      productCategory: mockup.productCategory,
      productTitle: mockup.productTitle,
      description: mockup.productDescription,
      price: mockup.price,
      newPrice: mockup.priceAfterDiscount,
    };
  }

  render() {
    const {
      imgSrc,
      productCategory,
      productTitle,
      description,
      price,
      imgSrcDesktop,
    } = this.state;

    return (
      <div className={style.product}>
        <ProductImage src={imgSrc} srcDesk={imgSrcDesktop} />
        <ProductInfo
          category={productCategory}
          title={productTitle}
          description={description}
          price={price}
        />
      </div>
    );
  }
}

export default Product;
