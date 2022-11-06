import React from "react";
import { Button } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      {/**first footer */}
      <footer
        className="text-light bg-primary  rounded-bottom rounded-5  
       position-relative mb-0 pt-5 "
      >
        {/**add {subscribe to mail feed} on top of footer*/}
        <div
          className="d-flex h-40 justify-content-between w-30 bg-light top--5 left-35 position-absolute
       rounded border border-1 border-light shadow-lg "
        >
          <div className="ms-3 col mt-2 ms-2">
            <small className="ms-4 form-check-label text-primary">
              Subscribe to mail feed
            </small>
          </div>
          <Button name="Done" className={" me-3 "}>
            Done -{">"}
          </Button>
        </div>

        <div className="container-fluid ps-5">
          {/**add footer lists */}
          <div className="row">
            {/**first list */}
            <div className="col mt-md-0 mt-3">
              <h6 className="  ">SoftSonic</h6>
              <div className="row w-45 h-3 ps-5 mb-2 ms-1 bg-light"></div>
              <p className="text-small-emphasis">
                the most beautiful exclusive
                <br />
                properties and luxury apartments
              </p>
            </div>

            {/**second list */}
            <div className="col mb-md-0 mb-3">
              <h6>Useful Links</h6>
              <div className="row w-45 h-3 mb-2 ms-1 bg-light"></div>
              <ul className="list-unstyled ">
                <li>
                  <a
                    href="#!"
                    className="text-light text-decoration-none text-small-emphasis"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-light text-decoration-none text-small-emphasis"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-light text-decoration-none text-small-emphasis"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col mb-md-0 mb-3">
              <h6 className="">Help?</h6>
              <div className="row w-45 h-3 mb-2 ms-1 bg-light"></div>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#!"
                    className="text-light text-decoration-none text-small-emphasis"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-light text-decoration-none text-small-emphasis"
                  >
                    Term&Condition 2
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-light text-decoration-none text-small-emphasis"
                  >
                    Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="text-light text-decoration-none text-small-emphasis"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            {/**third list */}
            <div className="col mb-md-0 mb-3">
              <h6>Download The App</h6>
              <div className="row w-45 h-3  mb-2 ms-1 bg-light"></div>
              <div className="d-flex">
                <Button className="m-1 btn-light">
                  <img src="./apple.webp" width={25} height={25} /> Apple Store
                </Button>
                <Button className="m-1 btn-light">
                  <img src="./GooglePlayIcon.png" width={30} height={20} />{" "}
                  Google Play
                </Button>
              </div>
            </div>

            <div className="row ">
              <div className="col">
                <img
                  className=" col rounded-circle mt-3 pe-1"
                  src="./facebookIcon.png"
                  width={35}
                  height={35}
                />
                <img
                  className=" col rounded-circle mt-3 pe-1"
                  src="./twiterIcon.png"
                  width={35}
                  height={35}
                />
                <img
                  className="col rounded-circle mt-3"
                  src="./telegramIcon.png"
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-3"></div>
      </footer>
      {/**second footer */}
      <footer className="bg-info  d-flex justify-content-evenly text-light p-3  mt-0">
        <small className="text-small-emphasis ">
          {" "}
          © 2022 Copyright: Oswatech
        </small>

        <small className="text-small-emphasis">
          {" "}
          Terms & Condition | Privacy Policy
        </small>
      </footer>
    </>
  );
}
