import React, {useEffect, useState} from 'react'
import './DetailProduct.css'
import database from '../../components/Firebase/Firebase'; 
import { connect} from "react-redux"

const DetailProduct = (props) => {
  const [product, setProduct] = useState({})
const getProduct = () => {
    database.collection("categories").doc(props.match.params.category)
          .collection("products")
          .doc(props.match.params.id)
          .get().then( doc => {
              console.log(doc.data())
              setProduct({
                  id:doc.id, 
                  title: doc.data().title,
                  size:doc.data().size,
                  stock:doc.data().stock,
                  color:doc.data().color,
                  image:doc.data().image_url,
                  price:doc.data().price
              })
          })
}

const addProduct = (product) =>  {
    props.dispatch({
        type:"ADD", 
        data: product
    });
}

 useEffect(getProduct, []); 

    return (
        <section>
       
            <div className="container">
                <div className="row">
                    <div class="div1 col-2">
                        <div className="cont-imgs  ">
                            <img src="https://demo.htmlhunters.com/shopy/assets/images/demo/product-1.jpg" alt="" />
                            <img src="https://demo.htmlhunters.com/shopy/assets/images/demo/product-1-2.jpg" alt="" />
                            <img src="https://demo.htmlhunters.com/shopy/assets/images/demo/product-1-3.jpg" alt="" />
                        </div>

                    </div>
                    <div class="carou col-6 ">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={product.image} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://demo.htmlhunters.com/shopy/assets/images/demo/product-1-2.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://demo.htmlhunters.com/shopy/assets/images/demo/product-1-3.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="filter col-4">
                        <div>
                            
                            <span>BRAND</span>
                            <h1>{product.title}</h1>
                            <span>{product.price}$</span>
                        </div>
                        <h4>SIZE</h4>
                        <div className="size">
                            <label className="btn">
                                <input type="radio" name="customRadio" id="option-1"></input>
                            XS
                            </label>

                            <label className="btn">
                                <input type="radio" name="customRadio" id="option-1"></input>
                            S
                            </label>
                            <label className="btn">
                                <input type="radio" name="customRadio" id="option-1"></input>
                            L
                            </label>
                            <label className="btn">
                                <input type="radio" name="customRadio" id="option-1"></input>
                            XL
                            </label>

                            <label className="btn">
                                <input type="radio" name="customRadio" id="option-1"></input>
                            XXL
                            </label>
                        </div>
                        <h4>COLOR</h4>
                        <div className="color">
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary"></button>
                                <button type="button" class="btn btn-secondary"></button>
                                <button type="button" class="btn btn-success"></button>
                                <button type="button" class="btn btn-danger"></button>
                                <button type="button" class="btn btn-warning"></button>
                                <button type="button" class="btn btn-dark"></button>
                            </div>
                        </div>
                        <div className="display">
                            <h5>PRODUCT CODE</h5>
                            <h5>H182420Z</h5>
                        </div>
                        <div className="add_to_cart">
                            <button className="add" onClick={() => addProduct(product)}>ADD TO CART</button>
                        </div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Details</button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Black leather and mesh
                                    Black rubber sole
                                    Metal star and rose shaped studs
                                    Metal studs
                                    Adjustable Velcro straps
                                    Made in Italy
                                    Staged in Alyscamps in the city of Arles—an ancient Roman necropolis that also serves as a promenade—the Cruise 2019 explores the idea of hybridization.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Shipping and returns</button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam, assumenda dolor veritatis nesciunt numquam commodi quaerat. Pariatur debitis tenetur necessitatibus similique placeat id, voluptate nesciunt dolor dolorum quidem <quae className=""></quae>.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Reviews(1)</button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Jannete : Nice jacket! Fits great. Looks good. Would buy again..</div>
                                </div>
                            </div>
                        </div>
                        <h6>Share this product</h6>
                        <div className="socials">
                            <a href=""><i class="fab fa-facebook-square"></i></a>
                            <a href=""><i class="fab fa-instagram-square"></i></a>
                            <a href=""><i class="fab fa-twitter-square"></i></a>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems:state.cartItems
    }
}
export default connect(mapStateToProps)(DetailProduct)

