import React from "react";
import { Button, Card } from "react-bootstrap";
import d from "../../assets/firstslide.jpeg";
import LocationAndNearPlaces from "./LocationAndNearPlaces";
import MoreHomesForYou from "./MoreHomesForYou";
import FeaturesAndServices from "./FeaturesAndServices";
import ReactPlayer from "react-player";
import ImageLable from "../../components/ImageLabel";

function ShowHomeAsCard(props) {
  const [imgwidth, imgHeight, setImgShow] = React.useState(180, 100);

  return (
    <Card className=" border-0 p-5  ">
      <div className="row ">
        {/** first column for show home imgaes  */}
        <div className="col-auto">
          <Card.Img src="./home3.jfif" height={200}></Card.Img>
          <div className="row mt-4">
            <div className="col-auto">
              <img
                className="ps-1 rounded"
                src="home4.jfif"
                width={180}
                height={100}
              />
              <img
                className="ps-1 rounded"
                src="home1.jfif"
                width={180}
                height={100}
              />
              <img
                className="ps-1 rounded"
                src="home2.jfif"
                width={180}
                height={100}
              />
            </div>
          </div>
        </div>

        {/**second column for show home detalis and seller contact buttons  */}
        <div className="col-auto ">
          <Card.Body>
            <Card.Title>
              <div className="d-flex">
                <h6>
                  3000 ${" "}
                  <small className="text-small-emphasis text-color-primary">
                    per month
                  </small>
                </h6>
                <span className="fw-lighter ps-2 pe-2 ">|</span>{" "}
                <h6>
                  owned by: <small className="text-small-emphasis">IZAR</small>
                </h6>
              </div>
            </Card.Title>
            <Card.Text className=" mb-0">
              <div className="row h-auto">
                <small>$799,0004 bd3 ba-- sqft</small>
              </div>
              <div className="row h-auto">
                <small>545 E Park Avenue, Long Beach, NY 1156</small>
              </div>
              <div className="row h-auto">
                <small>For saleZestimate®: $786,700</small>
              </div>
              <div className="row h-auto">
                <small>Est. payment: $5,324/mo</small>
              </div>
              <div className="row h-auto">
                <small>Get pre-qualified</small>
              </div>
              <div className="row h-auto">
                <small>For saleZestimate®: $786,700</small>
              </div>
              <div className="row h-auto">
                <small>Get pre-qualified</small>
              </div>
            </Card.Text>

            {/**this row show feature and services */}
            <div className="row mt-4">
              <div className="col-auto">
                <ImageLable
                  ImageClassName="rounded"
                  imgSrc="./wifi.jfif"
                  TextClassName=""
                  ImgWidth={30}
                  ImgHeight={30}
                  Text="wifi enabled"
                />
              </div>
              <div className="col-auto">
                <ImageLable
                  ImageClassName="rounded"
                  imgSrc="./duplex.jfif"
                  TextClassName=""
                  ImgWidth={30}
                  ImgHeight={30}
                  Text="Nice View"
                />
              </div>
              <div className="col-auto">
                <ImageLable
                  ImageClassName="rounded"
                  imgSrc="./duplex.jfif"
                  TextClassName=""
                  ImgWidth={30}
                  ImgHeight={30}
                  Text="Heater"
                />
              </div>
            </div>
            {/**second row for feature and services */}
            <div className="row ">
              <div className="col-auto">
                <ImageLable
                  ImageClassName="rounded"
                  imgSrc="./beds.png"
                  TextClassName=""
                  ImgWidth={30}
                  ImgHeight={30}
                  Text="beds"
                />
              </div>
              <div className="col-auto">
                <ImageLable
                  ImageClassName="rounded"
                  imgSrc="./bath.png"
                  TextClassName=""
                  ImgWidth={30}
                  ImgHeight={30}
                  Text="baths"
                />
              </div>
              <div className="col-auto">
                <ImageLable
                  ImageClassName="rounded"
                  imgSrc="./duplex.jfif"
                  TextClassName=""
                  ImgWidth={30}
                  ImgHeight={30}
                  Text="Windows"
                />
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-auto">
                {/**seller contact buttons */}
                <span className="ps-2">
                  <Button className="btn-light border border-1 border-primary ">
                    <lable className="text-primary h6">Seller Detalis</lable>
                  </Button>
                </span>
                <span className="ps-2">
                  <Button className="btn-light border border-1 border-primary ">
                    <lable className="text-primary h6">Seller WhatsApp</lable>
                  </Button>
                </span>
              </div>
            </div>
          </Card.Body>
        </div>

        {/**third column for share button */}
        <div className="col-auto  ps-5 - me-1">
          <Button>Share</Button>
        </div>
      </div>
    </Card>
  );
}

export default function MainPageForHouseDetails() {
  return (
    <div className="row">
      <h5 className="ps-5 text-primary m-1">
        Kansas Rental Buildings - New Baghdad
      </h5>
      {ShowHomeAsCard(null)}

      <h5 className="ps-5 m-1 text-primary">Location And Near Places :</h5>
      <LocationAndNearPlaces />
      <h5 className="ps-5 m-1 text-primary">Take a tour in home :</h5>
      {/**add video to page */}
      <div className=" mt-4 mb-4 player-wrapper">
        <ReactPlayer
          className="react-player w-100 ps-5 pe-5"
          url="https://www.youtube.com/watch?v=3jYvAjldNHo"
          playing={true}
          controls={true}
        />
      </div>
      <h5 className="ps-5 text-primary m-1">Features And services :</h5>

      <FeaturesAndServices />
      <br />
      <h5 className="ps-5 m-1 mb-4 text-primary">MoreHomes For You :</h5>
      <MoreHomesForYou className="m-5" />
    </div>
  );
}
