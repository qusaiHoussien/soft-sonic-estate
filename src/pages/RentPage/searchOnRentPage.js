import React from "react";
import { Button, FormSelect } from "react-bootstrap";

export default function search() {
  return (
    <div className="row border border-2 border-light shadow-lg  justify-content-between row-cols-md-12 ps-5 pe-5 ">
      {/**input type for location */}
      <div className="col-3">
        <input type="text" placeholder="Location" className="form-control" />
      </div>
      {/**selects  */}
      <FormSelect className="col  ">
        <option value="ForRent">For Rent</option>
      </FormSelect>
      <FormSelect className="col ">
        <option value="PriceRange">Price</option>
      </FormSelect>
      <FormSelect className="col ">
        <option value="Beds">Beds</option>
      </FormSelect>
      <FormSelect className="col">
        <option value="MoveDate">Move Date</option>
      </FormSelect>
      <FormSelect className="col">
        <option value="More">More</option>
      </FormSelect>
      <div className="col"></div>
      <Button className="col btn btn-sm btn-primary">
        <span className="fs-6">Search</span>
      </Button>
    </div>
  );
}
