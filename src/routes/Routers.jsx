import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import About from "./../pages/About";
import CreateProduct from "./../pages/CreateProduct";
// import Product from "./../pages/Product";
import Products from "./../pages/Products";
import Counter from "./../pages/Counter";
import ProductDetails from "./../pages/ProductDetails";
import CryptoDetails from "./../CryptoDetails";
import Error404 from "./../pages/Error404";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="product">
                {/* index is the same of path="" */}
                {/* <Route index element={<Product />}></Route> */}
                <Route path="create" element={<CreateProduct />}></Route>
                <Route path="list" element={<Products />}></Route>
                <Route path="details/:productID" element={<ProductDetails />}></Route>
            </Route>
            <Route path="*" element={<Error404 />}></Route>

            {/* Two Way of using Optional Parameters */}
            {/* this is the first one */}
            <Route path="/crypto-details">
                <Route path=":cryptoSymbol/:id" element={<CryptoDetails />}></Route>
                <Route path=":cryptoSymbol" element={<CryptoDetails />}></Route>
            </Route>
            <Route path="/counter" element={<Counter />}></Route>
            {/* this is the second */}
            {/* <Route   path="/crypto-details/:cryptoSymbol/:id?"
                    element={<CryptoDetails />}
                    ></Route> 
    */}
        </Routes>
 /** 
* Brief description of the function here.
* @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
* @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
* @return {ReturnValueDataTypeHere} Brief description of the returning value here.
*/   )
}

export default Routers
