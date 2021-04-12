import React from 'react'
import './CartDropdown.css'; 
import img from '../../assets/images/demo/product-1.jpg'

const CartDropdown = () => {
    return (
      <div className="cart-dropdown">
             
                    <div class="row gutter-3">
                      <div class="col-12">
                        <h3 class="eyebrow text-dark fs-16 mb-0">My Bag</h3>
                      </div>
                      <div class="col-12">
                        <div class="cart-item">
                          <a href="#!" class="cart-item-image"><img src={img} alt="Image"/></a>
                          <div class="cart-item-body">
                            <div class="row">
                              <div class="col-9">
                                <h5 class="cart-item-title">Bold Cuff Insert Polo Shirt</h5>
                                <small>Fred Perry</small>
                                <ul class="list list--horizontal fs-14">
                                  <li><s>$85.00</s></li>
                                  <li class="text-red">$42.00</li>
                                </ul>
                              </div>
                              <div class="col-3 text-right">
                                <ul class="cart-item-options">
                                  <li><a href="#" class="icon-x"><i class="fas fa-times"></i></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <ul class="list-group list-group-minimal">
                          <li class="list-group-item d-flex justify-content-between align-items-center text-uppercase font-weight-bold">
                            Subtotal
                            <span>$78.00</span>
                          </li>
                        </ul>
                      </div>
                      <div class="col-12">
                        <a href="#" class="btn btn-primary btn-block">Add all to cart</a>
                        <a href="#" class="btn btn-outline-secondary btn-block">View favorites</a>
                      </div>
                    </div>
                    </div>
    )
}

export default CartDropdown; 
