import React, {useState, useEffect} from 'react'
import './ShopQuality.css'; 
import database from '../Firebase/Firebase'
import { Link } from 'react-router-dom';
import {ROUTE} from '../../constants/route'

const ShopQuality = () => {
    const [categories, setCategories]= useState([]); 

    const getCategories = () => {
            database.collection('categories').onSnapshot( snapshot => {
             let listCategories=   snapshot.docs.map( doc => {
                    return {
                        id: doc.id, 
                        category_name:doc.data().category_name, 
                        category_image_link: doc.data().category_image_link
                    }
                })
                setCategories(listCategories); 
            })
    }
    useEffect(getCategories, []); 

    return (
        <div className="container mt-5">
            <div class="row ">
                
                <h1>Featured Products</h1>
                
            </div>
        <div className="shop-quality-container mt-5 ">
            
        {
            categories.map( item => {
                return (
                    <Link  className="nav-link" style={{color:'black'}} to={`allproducts/${item.category_name}/${item.id}`}>
                        <div className="quality-item-container">
                            <div className="img-container support-local" style={{backgroundImage:`url(${item.category_image_link})`}}/>
                            <h3> {item.category_name}</h3>
                            <p>All materials come from local producers. Together we can create a stronger and better community.</p>
                        </div>
                    </Link>
                   
                )
            })
        }
        {/* <div className="quality-item-container">
            <div className="img-container high-quality" />
            <h3> High Quality </h3>
            <p>Materials used are high quality proves to last for many years.</p>
        </div>
        <div className="quality-item-container">
            <div className="img-container eco-friendly" />
            <h3> Eco Friendly </h3>
            <p>Rest assured that the process and materials used will never harm our environment.</p>
        </div> */}
    </div>
    </div>
       
    )
}

export default ShopQuality
