import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, clearProductSelected } from './../redux/slices/ProductSlice.js'
import { clearProductSelectedAndInitCounter } from '../redux/actions/action.js';
import Product from '../components/Product.jsx';

const Products = () => {

    const navigate = useNavigate();
    const [ goTo, setGoTo ] = useState(false);

    // Using 'useSelector' for getting all Products and ProductSelected from ProductSlice
    const [ products, productSelected ] = useSelector((state) => [ state.productStore.products, state.productStore.productSelected ]);
    // Using 'useDispatch' for dispatching all actions(functions) from ProductSlice
    const dispatch = useDispatch();

    const productsList = products.map((product) =>
    (
        <div className="row mx-5 border-bottom border-info" key={product.id}>
            <div className="col-md-6 p-2">
                {product.name}
            </div>
            <div className="col-md-6 p-2">
                <button
                    className="btn btn-success"
                    onClick={() => dispatch(getProduct(product))}
                >
                    Details</button>
            </div>
        </div>
    )
    )

    console.log("products: ", products);

    return (
        <div>
            <h1>ProductList Component</h1>
            <button
                className="btn btn-primary"
                onClick={() => navigate('/product/create')}
            >
                Add a new product</button>
            <br />
            <br />
            <button
                className="btn btn-primary"
                onClick={() => { setGoTo((current) => !current) }}
            >
                Add a new product (useState)</button>

            {
                goTo && <Navigate to="/product/create" />
            }
            <p>{goTo ? "true" : "false"}</p>
            <hr />

            <div className="products row mx-2">
                <h1 className="text-center">Product List</h1>
                <div className="text-center mb-4">
                    <button
                        type="button"
                        className="btn btn-warning "
                        onClick={() => { dispatch(clearProductSelectedAndInitCounter()) }}
                    >
                        Reset all</button>
                </div>
                <hr />
                <div className="mt-2">
                    {productsList}
                </div>
            </div>
            <hr />

            <div className="product row mx-2">
                <h1 className="text-center">Product Details</h1>

                {
                    productSelected ? <Product product={productSelected} /> : <div className="alert alert-info text-center"> You should select Product First</div>

                }
            </div>


        </div >
    )
}

export default Products
