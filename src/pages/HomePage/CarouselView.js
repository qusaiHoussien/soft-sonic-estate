import { render } from "@testing-library/react";
import React, { useState } from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import d from "../../assets/firstslide.jpeg";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <CarouselItem>
        <img
          className="d-block w-100 h-50 opacity-75"
          src={d}
          alt="first slide"
        />
        <Carousel.Caption className="">
          <h1>
            The Best Way To Buy/Rent <br /> Your Next Property
          </h1>
          <p>
            with the most complete source of homes <br />
            for sale and real estate near you
          </p>
        </Carousel.Caption>
      </CarouselItem>

      <CarouselItem>
        <img
          className="d-block w-100 h-100 opacity-75"
          src={d}
          alt="first slide"
        />
        <Carousel.Caption>
          <h1>
            The Best Way To Buy/Rent <br /> Your Next Property
          </h1>
          <p>
            with the most complete source of homes <br />
            for sale and real estate near you
          </p>
        </Carousel.Caption>
      </CarouselItem>

      <CarouselItem>
        <img
          className="d-block w-100 h-100 opacity-75"
          src={d}
          alt="first slide"
        />
        <Carousel.Caption>
          <h1>
            The Best Way To Buy/Rent <br /> Your Next Property
          </h1>
          <p>
            with the most complete source of homes <br />
            for sale and real estate near you
          </p>
        </Carousel.Caption>
      </CarouselItem>

      <CarouselItem>
        <img
          className="d-block w-100 h-100 opacity-75"
          src={d}
          alt="first slide"
        />
        <Carousel.Caption>
          <h1>
            The Best Way To Buy/Rent <br /> Your Next Property
          </h1>
          <p>
            with the most complete source of homes <br />
            for sale and real estate near you
          </p>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
}
