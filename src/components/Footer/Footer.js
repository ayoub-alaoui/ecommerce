import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
    <footer class="bg-dark text-white py-0 mt-5 ">
      <div class="container">
        <div class="row separated">
          <div class="col-lg-6 py-10">
            <div class="row">
              <div class="col-md-8">
                <p>Thanks to <a href="https://www.opumo.com/" class="underline">Opumo</a> for the product images used in this demo theme. Head over to <a href="https://www.opumo.com/" class="underline">their store</a> to get these products.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-10">
                <h4 class="eyebrow mb-2">Quick Links</h4>
                <ul class="list-group list-group-columns">
                  <li class="list-group-item"><a href="about.html">About</a></li>
                  <li class="list-group-item"><a href="contact.html">Contact Us</a></li>
                  <li class="list-group-item"><a href="faq.html">FAQ</a></li>
                  <li class="list-group-item"><a href="blog.html">Blog</a></li>
                  <li class="list-group-item"><a href="text.html">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 py-10">
            <div class="row justify-content-end">
              <div class="col-lg-10">
                <h4 class="eyebrow mb-2">Subscribe</h4>
                <div class="input-group">
                  <input type="text" class="form-control form-control-lg" placeholder="Email" aria-label="Subscribe" aria-describedby="button-addon2" />
                  <div class="input-group-append">
                    <button class="btn btn-white" type="button" id="button-addon2">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-end mt-3">
              <div class="col-lg-10">
                <h4 class="eyebrow mb-2">Follow us</h4>
                <nav class="nav nav-icons">
                  <a class="nav-link" href="#!"><i class="fab fa-facebook"></i></a>
                  <a class="nav-link" href="#!"><i class="fab fa-twitter"></i></a>
                  <a class="nav-link" href="#!"><i class="fab fa-youtube"></i></a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer
