import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.completeProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
          <div class="col-md-3 d-flex mb-2">
            <Link to={`/product/${id}`}>
            <div className="card align-items-center" key={id}>
              <div className="image">
                <img src={image} alt={title} width={200} height={200} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="price">{price}</div>
                <div className="category">{category}</div>
              </div>
            </div>
            </Link>
          </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
