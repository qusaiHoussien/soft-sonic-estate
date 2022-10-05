import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import beds from "../../assets/beds.png";



const homes = {
  cImg: "./home3.jfif",
  value: 2000,
  location: "new Baghdad",
  beds: 2,
  baths: 2,
  btnName: "View More",
  bImg: beds,
  baImg: beds,
};

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

var counter = 1;

function ShowHomeCardInHomePage(props) {
  const navigate=useNavigate();
  return (
    <>
      <Card className="h-100">
        <div className="position-absolute ps-3 pt-2 text-light">
          <Card.Title>{props.Title}</Card.Title>
        </div>
        <Card.Img src={props.cImg} className="h-100" />
        <Card.ImgOverlay>
          <div>
            <Card.Body className="ps-0">
              <Button
                className=" btn btn-sm btn-light position-absolute bottom-0 mb-2 ms-0"
                onClick={()=>{
                  navigate(`/HouseDetalis`);
                }}
              >
                <span className="fs-6">{props.btnName}</span>
                <i>{`   >`}</i>
              </Button>
            </Card.Body>
          </div>
        </Card.ImgOverlay>
      </Card>{" "}
    </>
  );
}



export default function HomesCard(props) {

  return (
    <div className="row row-cols-md-3 h-100 scrolling-wrapper">
      {homearray.map((item) => ShowHomeCardInHomePage(item))}
    </div>
  );
}
