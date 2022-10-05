import React from "react";
import { Button, FormSelect } from "react-bootstrap";
export default function Search(props) {
  const [btnShow, setBtnShow] = React.useState("ForSale");
  return (
    <>
      <div className="border border-1 border-light shadow-lg  ">
        <div className="w-100 justify-content-center mt-4 mb-2 btn-toolbar">
          {/**add button {for rent, for sale, for invest} to search box */}
          <div className=" btn btn-group-lg m-0  p-0 rounded  border-1 border-primary">
            <Button
              name="ForSale"
              className={
                "fs-6 rounded-0 " + (btnShow !== "ForSale" ? "btn-light" : null)
              }
              onClick={() => {
                setBtnShow("ForSale");
              }}
            >
              For Sale
            </Button>
            <Button
              name="ForRent"
              className={
                " rounded-1 border-1 border-top-0 border-bottom-0 border-primary fs-6 " +
                (btnShow !== "ForRent" ? "btn-light" : null)
              }
              onClick={() => {
                setBtnShow("ForRent");
              }}
            >
              For Rent
            </Button>
            <Button
              name="ForInvest"
              className={
                "fs-6 rounded-0 " +
                (btnShow !== "ForInvest" ? "btn-light" : null)
              }
              onClick={() => {
                setBtnShow("ForInvest");
              }}
            >
              For Invest
            </Button>
          </div>
        </div>
        {/**add input type for location */}
        <div className="w-100 p-3">
          <input type="text" placeholder="Location" className="form-control" />
        </div>

        {/**add selects */}
        <div className="w-100 row ps-4 mb-5">
          <FormSelect className="col m-1" name="pro">
            <option value="PropertyType">Property Type</option>
          </FormSelect>
          <FormSelect className="col m-1" name="pro">
            <option value="PriceRange">Price Range</option>
          </FormSelect>
          <FormSelect className="col m-1" name="pro">
            <option value="Rooms">Rooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </FormSelect>
          <FormSelect className="col m-1" name="pro">
            <option value="Beds">Beds</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </FormSelect>
        </div>

        {/**add result button */}
        <div className="top-96 left-25 position-absolute  justify-content-center w-44 left-32 top-92 top-25">
          <Button
            name="Result"
            className="w-100"
            onClick={() => {
              setBtnShow("Result");
            }}
          >
            <label>Result</label>
          </Button>
        </div>
      </div>
    </>
  );
}
