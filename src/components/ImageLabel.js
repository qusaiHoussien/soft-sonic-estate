import React from "react";
export default function ImageLable(props) {
  return (
    <>
      <img
        className={props.ImageClassName}
        width={props.ImgWidth}
        height={props.ImgHeight}
        src={props.imgSrc}
      />
      <lable className={props.TextClassName}>
        <small>{props.Text}</small>
      </lable>
    </>
  );
}
