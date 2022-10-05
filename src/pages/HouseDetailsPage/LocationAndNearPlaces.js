import React from "react";
import { Card, Button } from "react-bootstrap";
import d from "../../assets/firstslide.jpeg";
function ShowNearByCard(props) {
  return (
    <Card>
      <Card.Img className=" p-2 pt-0" src="./map.jfif" height={180}></Card.Img>
      <Card.ImgOverlay>
        <div>
          <Card.Body className="ps-0">
            {props.withButton ? (
              <Button className="top-35  left-32  btn btn-sm btn-light position-absolute  mb-2 ms-0">
                <img
                  className="rounded"
                  src={props.imgSrc}
                  width={50}
                  height={50}
                />
              </Button>
            ) : null}
          </Card.Body>
        </div>
      </Card.ImgOverlay>
      <Card.Title className="h1 text-center">{props.title}</Card.Title>
    </Card>
  );
}
export default function LocationAndNearPlaces() {
  return (
    <div>
      <div className="row p-5">
        <div className="col ">
          {ShowNearByCard({ title: "House Location", withButton: false })}
        </div>

        <div className="col ">
          {ShowNearByCard({
            title: "Resturant NearBy",
            imgSrc: "./resturant.png",
            withButton: true,
          })}
        </div>
        <div className="col ">
          {ShowNearByCard({
            title: "Hospital NearBy",
            imgSrc: "./hospital.png",
            withButton: true,
          })}
        </div>
        <div className="col ">
          {ShowNearByCard({
            title: "Parks NearBy",
            imgSrc: "./P.png",
            withButton: true,
          })}
        </div>
        <div className="col ">
          {ShowNearByCard({
            title: "School NearBy",
            imgSrc: "./school.jfif",
            withButton: true,
          })}
        </div>
      </div>
    </div>
  );
}
