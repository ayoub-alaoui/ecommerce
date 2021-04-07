import React from 'react'
import {ROUTE} from '../../constants/route'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://getbootstrap.com/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://getbootstrap.com/">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://getbootstrap.com/">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="https://getbootstrap.com/" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    )
}

export default Header
