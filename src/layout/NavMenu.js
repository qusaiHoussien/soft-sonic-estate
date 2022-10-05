import React from "react";
import ImageLable from "../components/ImageLabel";

export default function NavMenu() {
  return (
    <nav className="navbar border border-1   w-100 navbar-light bg-light mt-0 pt-2 pb-2  navbar-expand-lg">
      <div className="container-fluid">
        <a href="Home" className="navbar-brand  pt-3">
          <ImageLable
            ImageClassName="rounded"
            imgSrc="./logo512.png"
            TextClassName="h4 text-primary"
            ImgWidth={50}
            ImgHeight={50}
            Text="oswatech"
          />
        </a>
        <button
          className="navbar-toggler  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="   navbar-collapse justify-content-between"
          id="navmenu"
        >
          {/**first section in navbar */}
          <div className="justify-content-start">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item d-flex">
                <a href="Home" className="nav-link">
                  Home
                </a>
                <span className=" h4 ms-2 mt-1 fw-light">|</span>
              </li>
              <li className="nav-item d-flex">
                <a href="#" className="nav-link">
                  Buy
                </a>
                <span className=" h4 ms-2 mt-1 fw-light">|</span>
              </li>
              <li className="nav-item d-flex">
                <a href="Rent" className="nav-link">
                  Rent
                </a>
                <span className=" h4 ms-2 mt-1 fw-light">|</span>
              </li>
            </ul>
          </div>

          {/**second section in navbar */}
          <div className="justify-content-end">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item d-flex">
                <a href="#" className="nav-link">
                  Contact Us
                </a>
                <span className=" h4 ms-2 mt-1 fw-light">|</span>
              </li>
              <li className="nav-item">
                <a
                  href="Login"
                  className="nav-link btn btn-outline-primary ms-4 me-2"
                >
                  LOG IN
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link btn btn-outline-primary ms-2 me-2"
                >
                  SIGN UP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
