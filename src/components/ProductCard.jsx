import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const ProductTitle = product.title.length > 40 ? `${product.title.slice(0, 40)}...` : product.title;
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
            </div>

            <div className="product-info">
                <h3 className="product-title" title={product.title}>{ProductTitle}</h3>

                <p className="product-category">{product.category}</p>

                <div className="product-bottom">
                    <span className="product-price">${product.price}</span>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;