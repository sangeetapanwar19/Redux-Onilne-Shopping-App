import React,{useDeferredValue, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {image,title,price,category,description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => {
            console.log("Err",err);
        });

        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
    },[productId])
    return(
        <div class="container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ):(
                <div class="row mt-5 mb-5">
                <div class="col-lg-5 col-md-5 col-sm-6">
                  <div class="white-box text-center">
                    <img
                      src={image}
                      class="img-responsive"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-6">
                  <h3 class="card-title">{title}</h3>
                  <h6 class="card-subtitle">{price}</h6>
                  <h4 class="box-title mt-2">{category}</h4>
                  <p>{description}</p>
                  <button
                    class="btn btn-dark btn-rounded mr-1"
                    title=""
                    data-original-title="Add to cart"
                  >ADD TO CART
                  </button>
                  <button class="btn btn-primary btn-rounded mx-2">Buy Now</button>
                </div>
              </div>
            )}
      </div>
    )
}

export default ProductDetail;