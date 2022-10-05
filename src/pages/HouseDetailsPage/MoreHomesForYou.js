import React from "react";
import { Button, Card } from "react-bootstrap";
import d from "../../assets/firstslide.jpeg";
import beds from "../../assets/beds.png";
import ImageLable from "../../components/ImageLabel";
{
  /**this object store home properties */
}
const homes = {
  cImg: "./home.jfif",
  value: 2000,
  location: "Baghdad street 1st floor",
  rooms: 5,
  beds: 2,
  baths: 2,
};

{
  /**this array store homes that we want to show it for user */
}
const homearray = [homes, homes, homes, homes];
export default function MoreHomesForYou() {
  return (
    <div className="row ps-5">
      {homearray.map((item) => (
        <div className="col">
          <Card>
            <Card.Img src={item.cImg}></Card.Img>
            <Card.Body>
              <Card.Title>
                {item.value + "$ " + item.rooms + "Rooms"}
              </Card.Title>
              <Card.Text>{item.location}</Card.Text>
              <div className="row">
                <div className="col w-100">
                  <Button className=" btn btn-sm btn-light w-100">
                    <small className="w-100">
                      View Home <i>{`>`}</i>
                    </small>
                  </Button>
                </div>
                <div className="col">
                  <ImageLable
                    className="w-100"
                    imgSrc="./bath.png"
                    ImageClassName="rounded"
                    TextClassName="text-small-emphasis w-100"
                    ImgWidth={30}
                    ImgHeight={30}
                    Text={item.baths + "Baths"}
                  />
                </div>
                <div className="col">
                  <ImageLable
                    className="w-100"
                    imgSrc="./beds.png"
                    ImageClassName="rounded"
                    TextClassName="text-small-emphasis"
                    ImgWidth={30}
                    ImgHeight={30}
                    Text={item.beds + "Beds"}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
