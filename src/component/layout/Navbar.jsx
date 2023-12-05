import React from "react";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container container-homepage">
          <span href="" class="navbar-brand">
            Maduran<span class="navbar-brand active">s.</span>
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="#navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav d-flex gap-3 mx-auto mg-lg-0">
              <li>
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link" aria-current="page" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a class="nav-link" aria-current="page" href="#">
                  Destination
                </a>
              </li>
              <li>
                <a class="nav-link" aria-current="page" href="#">
                  Languange
                </a>
              </li>
            </ul>
            <div class="d-flex gap-4 align-items-center">
              <a href="#" class="nav-link auth">
                Sign Up
              </a>
              <a href="#" class="btn btn-md btn-primary">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
