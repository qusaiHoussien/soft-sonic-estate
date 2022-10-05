import React from "react";
import CarouselView from "./CarouselView";
import Login from "../Login";
import Search from "./SearchInHomePage";
import HomesCard from "./HomesCard";
import "../../assets/styles.css";
export default function Home() {
  return (
    <>
      {/**put carousel and search box in page */}
      <div className="h-800">
        <div className="position-relative">
          <CarouselView />
          <div className="top-96 left-25 position-absolute w-50 bg-light">
            <Search />
          </div>
        </div>
      </div>

      <div className="m-3">
        <h3 className="text-center text-primary">
          Explore homes in IRAQ
          <div className=" bg-primary m-auto w-44  h-3"></div>
        </h3>

        <p className="text-center">
          Take a deep dive and browse homes for sale original neibourhood photos{" "}
          <br />
          resident reviews and local insights to find what is right for you
        </p>
      </div>
      <div className="h-300">
        <HomesCard />
      </div>
    </>
  );
}
