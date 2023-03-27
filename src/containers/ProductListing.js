import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import axios from 'axios';

const ProductListing = () => {
    const product = useSelector((state) => state.product);
    const products = useSelector((state) => state.completeProducts);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log("Error",err);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(() =>{
        fetchProducts();
    },[])
    console.log("Product:",product);
    console.log("Products:",products);
    return(
        <div class="container">
        <div class="row">
        <ProductComponent/>
        </div>
        </div>
    )
}
export default ProductListing;