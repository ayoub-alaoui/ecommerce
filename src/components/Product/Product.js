import React from 'react'
import "./Product.css"; 
import DetailProduct from "../../containers/DetailProduct/DetailProduct"; 
import {Link } from 'react-router-dom'

const Product = ({item, category_id}) => {
    return (
    <Link to={`/detail_product/${category_id}/${item.id}` }>
         <div class="cont col-md-4">
        <figure>
        <a href=""><i class="fab fa-gratipay"></i></a>
            <span class="badge badge-success">New</span>
            <img id="imagee" src="https://anninc.scene7.com/is/image/LO/559871_4899?$plp$" alt="" />
        </figure>
            <div className="card-footer">
                        <a href="">B</a>
                        <span className="brand">{item.title}</span>
                        <span className="price">99.99$</span>
            </div>
        </div>
    </Link>
    )
}

export default Product
