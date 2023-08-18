import React from "react";
import "./delivery.css";
import Filters from "../common/filter";
import Deliverycollection from "./deliverycollection";
import TopBrands from "./topbrands";
import Exploresection from "../common/exploresection";
import { restaurants } from "../../data/restaurents";

const deliveryfilter = [
  {
    id: 1,
    icon: <i className="fu fu-rr-settings-sliders absolute-center"></i>,
    title: "filter",
  },
  {
    id: 2,
    title: "Rating 4.0+",
  },
  {
    id: 3,

    title: "Safe and Hygenic",
  },
  {
    id: 4,

    title: "Pure Veg",
  },
  {
    id: 5,
    icon: <i className="fu fu-rr-settings-sliders absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id: 6,

    title: "Great Offers",
  },
];

const restaurantLists = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterlist={deliveryfilter} />
      </div>
      <div>
        <Deliverycollection />
        <TopBrands />
        <Exploresection
          list={restaurantLists}
          collectionName="Delivery Restaurants"
        />
      </div>
    </div>
  );
};

export default Delivery;
