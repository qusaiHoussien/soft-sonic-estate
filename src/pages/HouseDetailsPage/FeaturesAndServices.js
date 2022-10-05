import React from "react";
import beds from "../../assets/beds.png";
import ImageLable from "../../components/ImageLabel";

export default function FeaturesAndServices() {
  return (
    <div className="row ps-5">
      <div className="col">
        <ImageLable
          ImageClassName="rounded"
          TextClassName=""
          ImgWidth={60}
          ImgHeight={60}
          Text="6 Duplex"
          imgSrc="./duplex.jfif"
        />
      </div>
      <div className="col">
        <ImageLable
          ImageClassName="rounded"
          TextClassName=""
          ImgWidth={60}
          ImgHeight={60}
          Text="6 bedrooms"
          imgSrc="./beds.png"
        />
      </div>
      <div className="col">
        <ImageLable
          ImageClassName="rounded"
          TextClassName=""
          ImgWidth={60}
          ImgHeight={60}
          Text="4 bathrooms"
          imgSrc="bath.png"
        />
      </div>
      <div className="col">
        <ImageLable
          ImageClassName="rounded"
          TextClassName=""
          ImgWidth={60}
          ImgHeight={60}
          Text="Forced Air"
          imgSrc="./air.jfif"
        />
      </div>
      <div className="col">
        <ImageLable
          ImageClassName="rounded"
          TextClassName=""
          ImgWidth={60}
          ImgHeight={60}
          Text="2 attached garage space"
          imgSrc="garag.jfif"
        />
      </div>
    </div>
  );
}
