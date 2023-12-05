import * as React from "react";
import Accordion from "react-bootstrap/Accordion";
import heroImage from "../../assets/Images/Arosbaya-3.jpeg";
import kerapanSapi1 from "../../assets/Images/karapan-sapi-1.jpg";

export default function Home() {
  return (
    <>
      <main>
        <div class="container container-homepage" id="hero">
          <div class="hero-text-wrapper d-flex flex-column text-center">
            <span class="hero-title">Find Your Suitable Destination</span>
            <span class="hero-subtitle">
              Explore incredible things to do around Madura
            </span>
          </div>
          <img
            class="container-fluid hero-img"
            src={heroImage}
            alt="HeroImage"
          />
          <form class="hero-form col-lg-8 d-flex flex-column justify-content-between">
            <div class="hero-input-wrapper d-flex flex-row align-items-center justify-content-between">
              <div class="d-flex flex-column align-items-start gap-2">
                <label class="hero-input-label" for="location">
                  Location
                </label>
                <div class="d-flex flex-row align-items-center">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Masukan Destinasi Anda Disini"
                  />
                  <img
                    src="assets/Icon/search-icon.svg"
                    width="16px"
                    height="16px"
                    alt="Search Icon"
                  />
                </div>
              </div>
              <div class="d-flex flex-column align-items-start gap-1">
                <label class="hero-input-label" for="filter">
                  Filter
                </label>
                <div class="dropdown">
                  <button
                    class="btn-filter dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter berdasarkan rating
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        5 Stars
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        4 Stars
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        3 Stars
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        2 Stars
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        1 Stars
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button type="submit" class="btn btn-lg btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>

        <div class="container container-homepage" id="trending-tours">
          <div class="d-flex flex-column gap-5">
            <div class="header-wrapper d-flex justify-content-between position-relative">
              <div class="header-title-wrapper d-flex flex-column gap-1">
                <h1 class="header-title">Trending Tours</h1>
                <p class="header-subtitle">
                  Explore the Latest Trending Tours From the exotic adventures
                </p>
              </div>
              <div class="d-flex gap-3 justify-content-center arrow-wrapper">
                <button
                  class="carousel-control-prev arrow-left "
                  type="button"
                  data-bs-target="#carouselTrendingTours"
                  data-bs-slide="prev"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 7L9 12L14 17"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  class="carousel-control-next arrow-right"
                  type="button"
                  data-bs-target="#carouselTrendingTours"
                  data-bs-slide="next"
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 17L15 12L10 7"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="carouselTrendingTours"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 mb-3">
                      <div class="trending-card-wrapper">
                        <div class="trending-card">
                          <div class="trending-card-viral">
                            <svg
                              width="18"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.832 21.801C15.958 21.175 20 18.926 20 13.111C20 7.81999 16.127 4.29599 13.341 2.67699C12.724 2.31699 12 2.78999 12 3.50499V5.33299C12 6.77499 11.394 9.40699 9.71 10.502C8.85 11.061 7.92 10.224 7.816 9.20399L7.73 8.36599C7.63 7.39199 6.638 6.80099 5.86 7.39499C4.461 8.45999 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22C11.087 22 11.249 21.994 11.417 21.985C10.111 21.874 8 21.064 8 18.444C8 16.394 9.495 15.009 10.631 14.334C10.937 14.154 11.294 14.389 11.294 14.744V15.334C11.294 15.784 11.469 16.489 11.884 16.971C12.354 17.517 13.043 16.945 13.098 16.227C13.116 16.001 13.344 15.857 13.54 15.971C14.181 16.346 15 17.146 15 18.444C15 20.492 13.871 21.434 12.832 21.801Z"
                                fill="#ffc600"
                              />
                            </svg>
                          </div>
                          <img
                            class="img-fluid"
                            alt="100%x280"
                            src={kerapanSapi1}
                          />
                          <div class="trending-card-body">
                            <span class="trending-card-title">
                              Kerapan Sapi Tradisi Kecepatan dan Kekuatan yang
                              Menggugah!
                            </span>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <a class="trending-card-link" href="/detail.html">
                            See More
                          </a>
                          <div class="d-flex align-items-center gap-2 trending-card-star">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span>4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-md-flex d-sm-none mb-3">
                      <div class="trending-card-wrapper">
                        <div class="trending-card">
                          <div class="trending-card-viral">
                            <svg
                              width="18"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.832 21.801C15.958 21.175 20 18.926 20 13.111C20 7.81999 16.127 4.29599 13.341 2.67699C12.724 2.31699 12 2.78999 12 3.50499V5.33299C12 6.77499 11.394 9.40699 9.71 10.502C8.85 11.061 7.92 10.224 7.816 9.20399L7.73 8.36599C7.63 7.39199 6.638 6.80099 5.86 7.39499C4.461 8.45999 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22C11.087 22 11.249 21.994 11.417 21.985C10.111 21.874 8 21.064 8 18.444C8 16.394 9.495 15.009 10.631 14.334C10.937 14.154 11.294 14.389 11.294 14.744V15.334C11.294 15.784 11.469 16.489 11.884 16.971C12.354 17.517 13.043 16.945 13.098 16.227C13.116 16.001 13.344 15.857 13.54 15.971C14.181 16.346 15 17.146 15 18.444C15 20.492 13.871 21.434 12.832 21.801Z"
                                fill="#ffc600"
                              />
                            </svg>
                          </div>
                          <img
                            class="img-fluid"
                            alt="100%x280"
                            src={kerapanSapi1}
                          />
                          <div class="trending-card-body">
                            <span class="trending-card-title">
                              Kerapan Sapi Tradisi Kecepatan dan Kekuatan yang
                              Menggugah!
                            </span>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <a class="trending-card-link" href="/detail.html">
                            See More
                          </a>
                          <div class="d-flex align-items-center gap-2 trending-card-star">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span>4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-lg-flex d-md-none d-sm-none  mb-3">
                      <div class="trending-card-wrapper">
                        <div class="trending-card">
                          <div class="trending-card-viral">
                            <svg
                              width="18"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.832 21.801C15.958 21.175 20 18.926 20 13.111C20 7.81999 16.127 4.29599 13.341 2.67699C12.724 2.31699 12 2.78999 12 3.50499V5.33299C12 6.77499 11.394 9.40699 9.71 10.502C8.85 11.061 7.92 10.224 7.816 9.20399L7.73 8.36599C7.63 7.39199 6.638 6.80099 5.86 7.39499C4.461 8.45999 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22C11.087 22 11.249 21.994 11.417 21.985C10.111 21.874 8 21.064 8 18.444C8 16.394 9.495 15.009 10.631 14.334C10.937 14.154 11.294 14.389 11.294 14.744V15.334C11.294 15.784 11.469 16.489 11.884 16.971C12.354 17.517 13.043 16.945 13.098 16.227C13.116 16.001 13.344 15.857 13.54 15.971C14.181 16.346 15 17.146 15 18.444C15 20.492 13.871 21.434 12.832 21.801Z"
                                fill="#ffc600"
                              />
                            </svg>
                          </div>
                          <img
                            class="img-fluid"
                            alt="100%x280"
                            src={kerapanSapi1}
                          />
                          <div class="trending-card-body">
                            <span class="trending-card-title">
                              Kerapan Sapi Tradisi Kecepatan dan Kekuatan yang
                              Menggugah!
                            </span>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <a class="trending-card-link" href="/detail.html">
                            See More
                          </a>
                          <div class="d-flex align-items-center gap-2 trending-card-star">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span>4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-lg-4 col-md-6 mb-3">
                      <div class="trending-card-wrapper">
                        <div class="trending-card">
                          <div class="trending-card-viral">
                            <svg
                              width="18"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.832 21.801C15.958 21.175 20 18.926 20 13.111C20 7.81999 16.127 4.29599 13.341 2.67699C12.724 2.31699 12 2.78999 12 3.50499V5.33299C12 6.77499 11.394 9.40699 9.71 10.502C8.85 11.061 7.92 10.224 7.816 9.20399L7.73 8.36599C7.63 7.39199 6.638 6.80099 5.86 7.39499C4.461 8.45999 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22C11.087 22 11.249 21.994 11.417 21.985C10.111 21.874 8 21.064 8 18.444C8 16.394 9.495 15.009 10.631 14.334C10.937 14.154 11.294 14.389 11.294 14.744V15.334C11.294 15.784 11.469 16.489 11.884 16.971C12.354 17.517 13.043 16.945 13.098 16.227C13.116 16.001 13.344 15.857 13.54 15.971C14.181 16.346 15 17.146 15 18.444C15 20.492 13.871 21.434 12.832 21.801Z"
                                fill="#ffc600"
                              />
                            </svg>
                          </div>
                          <img
                            class="img-fluid"
                            alt="100%x280"
                            src={kerapanSapi1}
                          />
                          <div class="trending-card-body">
                            <span class="trending-card-title">
                              Kerapan Sapi Tradisi Kecepatan dan Kekuatan yang
                              Menggugah!
                            </span>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <a class="trending-card-link" href="/detail.html">
                            See More
                          </a>
                          <div class="d-flex align-items-center gap-2 trending-card-star">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span>4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-md-flex d-sm-none mb-3">
                      <div class="trending-card-wrapper">
                        <div class="trending-card">
                          <div class="trending-card-viral">
                            <svg
                              width="18"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.832 21.801C15.958 21.175 20 18.926 20 13.111C20 7.81999 16.127 4.29599 13.341 2.67699C12.724 2.31699 12 2.78999 12 3.50499V5.33299C12 6.77499 11.394 9.40699 9.71 10.502C8.85 11.061 7.92 10.224 7.816 9.20399L7.73 8.36599C7.63 7.39199 6.638 6.80099 5.86 7.39499C4.461 8.45999 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22C11.087 22 11.249 21.994 11.417 21.985C10.111 21.874 8 21.064 8 18.444C8 16.394 9.495 15.009 10.631 14.334C10.937 14.154 11.294 14.389 11.294 14.744V15.334C11.294 15.784 11.469 16.489 11.884 16.971C12.354 17.517 13.043 16.945 13.098 16.227C13.116 16.001 13.344 15.857 13.54 15.971C14.181 16.346 15 17.146 15 18.444C15 20.492 13.871 21.434 12.832 21.801Z"
                                fill="#ffc600"
                              />
                            </svg>
                          </div>
                          <img
                            class="img-fluid"
                            alt="100%x280"
                            src={kerapanSapi1}
                          />
                          <div class="trending-card-body">
                            <span class="trending-card-title">
                              Kerapan Sapi Tradisi Kecepatan dan Kekuatan yang
                              Menggugah!
                            </span>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <a class="trending-card-link" href="/detail.html">
                            See More
                          </a>
                          <div class="d-flex align-items-center gap-2 trending-card-star">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span>4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 d-lg-flex d-md-none d-sm-none  mb-3">
                      <div class="trending-card-wrapper">
                        <div class="trending-card">
                          <div class="trending-card-viral">
                            <svg
                              width="18"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.832 21.801C15.958 21.175 20 18.926 20 13.111C20 7.81999 16.127 4.29599 13.341 2.67699C12.724 2.31699 12 2.78999 12 3.50499V5.33299C12 6.77499 11.394 9.40699 9.71 10.502C8.85 11.061 7.92 10.224 7.816 9.20399L7.73 8.36599C7.63 7.39199 6.638 6.80099 5.86 7.39499C4.461 8.45999 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22C11.087 22 11.249 21.994 11.417 21.985C10.111 21.874 8 21.064 8 18.444C8 16.394 9.495 15.009 10.631 14.334C10.937 14.154 11.294 14.389 11.294 14.744V15.334C11.294 15.784 11.469 16.489 11.884 16.971C12.354 17.517 13.043 16.945 13.098 16.227C13.116 16.001 13.344 15.857 13.54 15.971C14.181 16.346 15 17.146 15 18.444C15 20.492 13.871 21.434 12.832 21.801Z"
                                fill="#ffc600"
                              />
                            </svg>
                          </div>
                          <img
                            class="img-fluid"
                            alt="100%x280"
                            src={kerapanSapi1}
                          />
                          <div class="trending-card-body">
                            <span class="trending-card-title">
                              Kerapan Sapi Tradisi Kecepatan dan Kekuatan yang
                              Menggugah!
                            </span>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <a class="trending-card-link" href="/detail.html">
                            See More
                          </a>
                          <div class="d-flex align-items-center gap-2 trending-card-star">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span>4.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container container-homepage" id="top-destinations">
          <div class="d-flex flex-column gap-5">
            <div class="header-wrapper d-flex justify-content-between position-relative">
              <div class="d-flex text-lg-start text-md-center text-sm-center flex-column gap-1">
                <h1 class="header-title">Top destinations</h1>
                <p class="header-subtitle">
                  Explore the Latest Top Destinations From the exotic adventures
                </p>
              </div>
              <a
                href="#"
                class="browse-button d-flex gap-2 justify-content-center align-items-center"
              >
                <span> Browse All Destinations </span>
                <svg
                  width="32"
                  height="25"
                  viewBox="0 0 43 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.335 13.3333H9.33498C8.58831 13.3333 8.00165 12.7466 8.00165 12C8.00165 11.2533 8.58831 10.6666 9.33498 10.6666H33.335C34.0816 10.6666 34.6683 11.2533 34.6683 12C34.6683 12.7466 34.0816 13.3333 33.335 13.3333Z"
                    fill="black"
                  />
                  <path
                    d="M26.6684 22.6667C26.4935 22.6688 26.3201 22.6343 26.1594 22.5655C25.9986 22.4966 25.8541 22.3948 25.735 22.2667C25.2017 21.7334 25.2017 20.9067 25.735 20.3734L34.135 11.9734L25.735 3.57336C25.2017 3.04003 25.2017 2.21336 25.735 1.68003C26.2684 1.1467 27.095 1.1467 27.6284 1.68003L36.9617 11.0134C37.495 11.5467 37.495 12.3734 36.9617 12.9067L27.6284 22.24C27.3617 22.5067 27.015 22.64 26.695 22.64L26.6684 22.6667Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-3">
                <div class="trending-card-wrapper">
                  <div class="trending-card">
                    <img class="img-fluid" alt="100%x280" src={kerapanSapi1} />
                    <div class="trending-card-body">
                      <span class="trending-card-title huge">
                        Temukan Keindahan Tersembunyi di Gili Iyang Madura
                      </span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <a class="trending-card-link" href="/detail.html">
                      See More
                    </a>
                    <div class="d-flex align-items-center gap-2 trending-card-star">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 d-lg-flex d-md-none d-sm-none mb-3">
                <div class="trending-card-wrapper">
                  <div class="trending-card">
                    <img
                      class="img-fluid top-destination"
                      alt="100%x280"
                      src={kerapanSapi1}
                    />
                    <div class="trending-card-body">
                      <span class="trending-card-title">
                        Kerapan Sapi Tradisi Kecepatan dan Kekuatan yang
                        Menggugah!
                      </span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <a class="trending-card-link" href="/detail.html">
                      See More
                    </a>
                    <div class="d-flex align-items-center gap-2 trending-card-star">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 d-lg-flex d-md-none d-sm-none mb-3">
                <div class="trending-card-wrapper">
                  <div class="trending-card">
                    <img
                      class="img-fluid top-destination"
                      alt="100%x280"
                      src={kerapanSapi1}
                    />
                    <div class="trending-card-body">
                      <span class="trending-card-title">
                        Kerapan Sapi Tradisi Kecepatan dan Kekuatan yang
                        Menggugah!
                      </span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <a class="trending-card-link" href="/detail.html">
                      See More
                    </a>
                    <div class="d-flex align-items-center gap-2 trending-card-star">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container container-homepage" id="guest-review">
          <div class="d-flex flex-column gap-5">
            <div class="header-wrapper d-flex justify-content-between align-items-center">
              <div class="header-title-wrapper d-flex flex-column gap-1">
                <h1 class="header-title">What Traveler Says?</h1>
                <p class="header-subtitle">
                  Explore the Guest Review From the exotic adventures
                </p>
              </div>
              <a
                href="#"
                class=" btn btn-primary btn-md d-flex align-items-center review-button"
              >
                Give a Review
              </a>
            </div>
            <div class="row review-card-wrapper">
              <div class="col-lg-6 col-md-6 col-sm-12 ">
                <div class="d-flex flex-column gap-4 review-card">
                  <div class="d-flex gap-1 review-star">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div class="review-desc">
                    “ Nestled in the Indonesian archipelago, Madura is a
                    destination that beckons travelers with its unique blend of
                    culture, natural beauty, and unforgettable experiences. As I
                    recently had the pleasure of exploring this enchanting
                    island. ”
                  </div>
                  <div class="d-flex justify-content-between review-footer">
                    <div class="d-flex flex-column review-user">
                      <span class="review-user-title">Brookly John</span>
                      <span class="review-user-subtitle">CEO Of Tanij</span>
                    </div>
                    <img
                      src="assets/Images/review-user.png"
                      class="review-user-img"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="d-flex flex-column gap-4 review-card">
                  <div class="d-flex gap-1 review-star">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.9844 10.7232L17.7562 14.4132L19.0228 19.9069C19.0898 20.1941 19.0707 20.4947 18.9678 20.7711C18.8649 21.0475 18.6829 21.2874 18.4444 21.4609C18.2059 21.6344 17.9215 21.7337 17.6269 21.7464C17.3323 21.7592 17.0404 21.6848 16.7878 21.5326L11.9963 18.6263L7.215 21.5326C6.96241 21.6848 6.67055 21.7592 6.37591 21.7464C6.08128 21.7337 5.79693 21.6344 5.55843 21.4609C5.31993 21.2874 5.13786 21.0475 5.03498 20.7711C4.9321 20.4947 4.91298 20.1941 4.98 19.9069L6.24469 14.4188L2.01563 10.7232C1.79195 10.5303 1.6302 10.2756 1.55068 9.99113C1.47115 9.70666 1.47739 9.40504 1.5686 9.1241C1.65981 8.84315 1.83194 8.59539 2.0634 8.41188C2.29486 8.22838 2.57535 8.11729 2.86969 8.09256L8.44406 7.60974L10.62 2.41974C10.7336 2.14742 10.9253 1.9148 11.1709 1.75117C11.4164 1.58755 11.7049 1.50024 12 1.50024C12.2951 1.50024 12.5836 1.58755 12.8291 1.75117C13.0747 1.9148 13.2664 2.14742 13.38 2.41974L15.5625 7.60974L21.135 8.09256C21.4293 8.11729 21.7098 8.22838 21.9413 8.41188C22.1727 8.59539 22.3449 8.84315 22.4361 9.1241C22.5273 9.40504 22.5335 9.70666 22.454 9.99113C22.3745 10.2756 22.2127 10.5303 21.9891 10.7232H21.9844Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div class="review-desc">
                    “ Nestled in the Indonesian archipelago, Madura is a
                    destination that beckons travelers with its unique blend of
                    culture, natural beauty, and unforgettable experiences. As I
                    recently had the pleasure of exploring this enchanting
                    island. ”
                  </div>
                  <div class="d-flex justify-content-between review-footer">
                    <div class="d-flex flex-column review-user">
                      <span class="review-user-title">Brookly John</span>
                      <span class="review-user-subtitle">CEO Of Tanij</span>
                    </div>
                    <img
                      src="assets/Images/review-user.png"
                      class="review-user-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container container-homepage" id="cta">
          <div class="row align-items-center cta-wrapper">
            <div class="col-lg-6">
              <h1 class="text-lg-start text-sm-center">
                Discover More Now! Explore the Possibilities.
              </h1>
            </div>
            <div class="col-lg-6">
              <div class="d-flex flex-column gap-3 cta-form">
                <input
                  type="email"
                  name="email"
                  value=""
                  placeholder="Your Email..."
                />
                <div class="d-flex justify-content-between align-items-center cta-form-subscribe">
                  <a href="#" class="cta-form-subscribe-link">
                    Subscribe and get notified
                  </a>
                  <button
                    href="#"
                    class=" btn btn-primary btn-sm d-flex align-items-center cta-button"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
