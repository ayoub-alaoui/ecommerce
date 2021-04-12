import React, {useEffect, useState} from 'react'
import './AllProductPage.css'
import database from '../../components/Firebase/Firebase'; 
import Product from "../../components/Product/Product"
const AllProductPage = (props) => {
    const [products, setProducts]= useState([]); 

    const getProducts = () => {
            database.collection('categories').doc(props.match.params.id).collection("products").onSnapshot( snapshot => {
             let listProducts= snapshot.docs.map( doc => {
                    return {
                        id: doc.id, 
                        title:doc.data().title
                        
                    }
                })

                setProducts(listProducts);
               
            })
    }
    useEffect(getProducts, []); 
    console.log(props)

    return (
    <main>
    
             <section className="pt-6">
            {/* container div de toute la section  */}
            <div className="container">
                <div className="row gutter-6">
                    {/* le aside à gauche avec les filters */}
                    <aside className="col-lg-3 sidebar">
                        <div class="widget d-none d-lg-block">
                            <h2 class="widget d-none d-lg-block">Women</h2>
                            <ul id="page-nav" class="nav flex-column nav-accordion">
                                <li class="nav-item"><a class="nav-link" href="#!">Coats &amp; Jackets</a></li>
                                <li class="nav-item"><a class="nav-link" href="#!">Dresses</a></li>
                                <li class="nav-item"><a class="nav-link" href="#!">Polo Shirts</a></li>
                                <li class="nav-item"><a class="nav-link" href="#!">Sweatshirts</a></li>
                                <li class="nav-item"><a class="nav-link" href="#!">T-Shirts &amp; Tops</a></li>
                                <li class="nav-item"><a class="nav-link" href="#!">Knitwear</a></li>
                            </ul>
                        </div>
                        <div className="widgets">
                            <span className="widgets-title">
                                Filters
                            </span>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">style</button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">Coats</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">jackets</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">T-shirts</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">T-shirts</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">T-shirts</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">size</button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">XS</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">S</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">L</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">color</button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">Blue</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">Black</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" for="flexCheckChecked">Red</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Price</button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="range">
                                        <input id="price" type="range" id="vol" name="vol" min="0" max="50"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="col-lg-9">
                        <div class="container overflow-hidden">
                        <div className="row gutter-1 align-items-end">
                                        <h6>Dresses</h6>
                                    </div>
                            <div class="row gy-5">
                                {
                                    products.map( item => {
                                        return <Product 
                                        key={item.id} 
                                        item={item}   
                                        category_id={props.match.params.id} /> 
                                        
                                    })
                                   
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    )
}

export default AllProductPage
