import React from 'react'
// import { useSelector } from 'react-redux'

// pass parameters with props.
function Product(props) {
    return (
        <div className="row">
            <div className="row border-info border-bottom py-2">
                <div className="col-6 col-md-3" >Product name: </div>
                <div className="col-6 col-md-9" >{props.product.name}</div>
            </div>
            <div className="row border-info border-bottom py-2">
                <div className="col-6 col-md-3" >Description: </div>
                <div className="col-6 col-md-9" >{props.product.description}</div>
            </div>
            <div className="row border-info border-bottom py-2">
                <div className="col-6 col-md-3" >Price: </div>
                <div className="col-6 col-md-9" ><b>${props.product.price}</b></div>
            </div>
        </div>
    )
}


export default Product
