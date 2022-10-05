import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className=" mt-3 mb-5"> {props.children}</div>

      <Footer />
    </>
  );
}
