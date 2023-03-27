import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div class="container">
        <div class="row d-flex">
            <div class="col-md-3">
                <img src="/cart.png" width={100} height={100}/>
            </div>
            <div class="col-md-6 d-flex align-items-center">
            <form>
               <input type="text" name="query" class="form-control" placeholder="Search Here"/>
            </form>
            </div>
            <div class="col-md-3 d-flex align-items-center justify-content-end">
                <ul class="d-flex">
                    <li class="px-1">
                     <img src="/facebook.png" width={40} height={40}/>
                    </li>
                    <li class="px-1">
                     <img src="/linkedin.png" width={40} height={40}/>
                    </li>
                    <li class="px-1">
                     <img src="/googleplus.png" width={40} height={40}/>
                    </li>
                    <li class="px-1">
                     <img src="/twitter.png" width={40} height={40}/>
                    </li>
                </ul>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <div className="col-md-8">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item px-2">
                  <Link href="/" class="text-white">
                    Home
                  </Link>
                </li>
                <li class="nav-item px-2">
                  <Link href="/about" class="text-white">
                    About
                  </Link>
                </li>
                <li class="nav-item px-2">
                  <Link href="/products" class="text-white">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
          <button type="button" class="btn btn-dark m-1"><Link href="/login" class="text-white">
          Login
          </Link></button>
          <button type="button" class="btn btn-dark m-1"><Link href="/" class="text-white">
          Logout
          </Link></button>
          <button type="button" class="btn btn-dark m-1"><Link href="/registration" class="text-white">
          Registration
          </Link></button>
          </div>
        </div>
      </nav>
        </div>
    )

};

export default Header;

