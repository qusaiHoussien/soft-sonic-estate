import React from "react";
import Search from "./searchOnRentPage";
import RentCards from "./HomesInRentPage";
import { Button, FormSelect } from "react-bootstrap";
export default function MainPageForRent() {
  return (
    <div>
      <h4 className="text-center mt-4">Rent Your Perfect Property</h4>
      <Search />
      <div className="mt-4 row">
        {/** map column */}
        <div className="col-12 col-md border border-1 border-light">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            className="w-100 h-100"
            frameBorder="0"
            style={{}}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        {/** homes column */}

        <div className="col-12 col-md ">
          <div className="d-flex justify-content-between">
            <h5 className="text-primary">kansas Rental Buildings </h5>
            <div className="d-flex">
              <lable className="w-10 mt-1">sort by:</lable>
              <FormSelect className="col me-1 ms-1">
                <option value="Name">Name</option>
              </FormSelect>
            </div>
          </div>
          <small>112 Result</small>
          <RentCards />
        </div>
      </div>
    </div>
  );
}
