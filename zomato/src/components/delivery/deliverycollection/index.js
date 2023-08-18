import React from "react";
import "./deliverycollection.css";
import NextArrow from "../../common/carousel/nextarrow";
import PrevArrow from "../../common/carousel/prevarrow";
import Slider from "react-slick";
import DeliveryItems from "./deliveryitem";

const deliveryitems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 2,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 3,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
  {
    id: 4,
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  },
  {
    id: 5,
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 6,
    title: "Italian",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/6e4652a07d4850046388c830ebb71ac41678798512.jpeg",
  },
  {
    id: 7,
    title: "Momos",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
  },
  {
    id: 8,
    title: "Paneer",
    cover:
      "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
  },
  {
    id: 9,
    title: "Chowmein",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const Deliverycollection = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat What makes You Happy</div>
        <Slider {...settings}>
          {deliveryitems.map((item) => {
            return <DeliveryItems item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Deliverycollection;
