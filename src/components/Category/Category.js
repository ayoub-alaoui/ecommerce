import React from 'react'
import './Category.css'

import img2 from "../../assets/images/news-2.jpg";
import img3 from "../../assets/images/news-3.jpg";
import img4 from "../../assets/images/news-4.jpg";
import img5 from "../../assets/images/news-5.jpg";
import img6 from "../../assets/images/news-6.jpg";
const Category = () => {
    return (
      <section class="work wow bounceInUp"  data-wow-duration=".5s" data-wow-delay=".5s" id="works"><br/><br/><br/><br/><br/>
      <div class="container-fluid">
          <div class="row no-gutters">
              <div class="col-md-3 col-sm-3 col-xs-3">
                  <div class="img-wrapper">
                    
                      <a href="img/1.png" title="image description will be here">
                          <img src={img2} alt="" className="img-responsive" />
                      </a>
                  </div>
                  
              </div>
              <div class="col-md-3 col-sm-3 col-xs-3">
                   <div class="img-wrapper">
                      <a href="img/2.png" title="image description will be here">
                          <img src={img2} class="img-responsive" />
                      </a>
                  </div>
              </div>
              
              <div class="col-md-3 col-sm-3 col-xs-3">
                   <div class="img-wrapper">
                      <a href="img/3.png" title="image description will be here">
                          <img src={img3} class="img-responsive" />
                      </a>
                  </div>
              </div>
              
              <div class="col-md-3 col-sm-3 col-xs-3">
                   <div class="img-wrapper">
                      <a href="img/4.png" title="image description will be here">
                          <img src={img4} class="img-responsive" />
                      </a>
                  </div>
              </div>
                 
                 
                 <div class="col-md-3 col-sm-3 col-xs-3">
                  <div class="img-wrapper">
                      <a href="img/5.png" title="image description will be here">
                          <img src={img5} class="img-responsive" />
                      </a>
                  </div>
                  
              </div>
              <div class="col-md-3 col-sm-3 col-xs-3">
                   <div class="img-wrapper">
                      <a href="img/6.png" title="image description will be here">
                          <img src={img6} class="img-responsive" />
                      </a>
                  </div>
              </div>
              
              <div class="col-md-3 col-sm-3 col-xs-3">
                   <div class="img-wrapper">
                      <a href="img/2.png" title="image description will be here">
                          <img src={img4} class="img-responsive" />
                      </a>
                  </div>
              </div>
              
              <div class="col-md-3 col-sm-3 col-xs-3">
                   <div class="img-wrapper">
                      <a href="img/1.png" title="image description will be here">
                          <img src={img5} class="img-responsive" />
                      </a>
                  </div>
              </div>
          
          </div>
      </div>

  </section>
    )
}

export default Category
