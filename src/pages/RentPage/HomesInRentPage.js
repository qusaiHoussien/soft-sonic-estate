import React from "react";
import { Card, Button } from "react-bootstrap";
import d from "../../assets/firstslide.jpeg";
import beds from "../../assets/beds.png";
import ImageLable from "../../components/ImageLabel";

{
  /**this object store home properties */
}
const homes = {
  cImg: "./home1.jfif",
  value: 2000,
  location: "new Baghdad",
  beds: 2,
  baths: 2,
};

{
  /**this array store homes that we want to show it for user */
}
const homearray = [
  homes,
  homes,
  homes,
  homes,
  homes,
  homes,
  homes,
  homes,
  homes,
  homes,
];

function ShowHomeCardInRentPage(props) {
  return (
    <>
      <Card className="border-0">
        <Card.Img src={props.cImg} width={200} height={175}></Card.Img>

        <Card.Body>
          {/**show rent price and location */}
          <Card.Title className="d-flex fs-6">
            {props.value} $
            <small className="text-small-emphasis">{props.location}</small>
          </Card.Title>

          <Card.Text className="row">
            <br /> {/** show beds logo */}
            <div className="col fs-6">
              <ImageLable
                ImageClassName="rounded"
                imgSrc="./beds.png"
                TextClassName="text-small-emphasis"
                ImgWidth={30}
                ImgHeight={30}
                Text="5Beds"
              />
            </div>
            {/** show bath logo */}
            <div className="col">
              <ImageLable
                ImageClassName="rounded"
                imgSrc="./bath.png"
                TextClassName="text-small-emphasis"
                ImgWidth={30}
                ImgHeight={30}
                Text="5Baths"
              />
            </div>
          </Card.Text>

          {/** show rent button top of image of card */}
          <Card.ImgOverlay>
            <div className="ps-75 ">
              <Button className=" rounded-4 mt-0 btn btn-sm btn-light position-absolute bottom-10 mb-2 ms-0">
                Rent
              </Button>
            </div>
          </Card.ImgOverlay>
        </Card.Body>
      </Card>
    </>
  );
}

export default function HomesInRentPage(props) {
  /**this variable for count homes that show in column */
  let counter = 0;
  function IncreaseCounter() {
    counter = counter + 1;
  }
  function ZeroCounter() {
    counter = 0;
  }
  return (
    <>
      {/**create row for homes and add scroll */}
      <div className="row overflow-y h-450">
        {/**loop for show all homes in array */}
        {homearray.map((item) => (
          <>
            <div className="col">
              {ShowHomeCardInRentPage(item)} {IncreaseCounter()}
            </div>

            {counter === 3 && <div className="row ">{ZeroCounter()}</div>}
          </>
        ))}
      </div>
    </>
  );
}
