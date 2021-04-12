import React from 'react'
import './HomePage.css'
import ShopQuality from '../../components/ShopQuality/ShopQuality'
import Category from '../../components/Category/Category'
import Footer from '../../components/Footer/Footer'
const HomePage = () => {

    return (
        <div className="homepage-container">
                    <div className="cover-image" >
                        <div class="container">
                            <div class="row align-items-center vh-100">
                                <div class="col-lg-8 text-white" data-swiper-parallax-x="-100%">
                                    <h1 class="display-1 mt-1 mb-3 font-weight-light">Fashion Week <b class="d-block">Lookbook '19</b></h1>
                                    <a href="listing-full.html" class="btn btn-sm btn-white btn-action">Shop Now <span class="icon-arrow-right"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                <ShopQuality />
                <Category></Category>
                <Footer></Footer>
            </div>
    )
}

export default HomePage
