import React from "react";
import "./DiningOut.css";
import Collection from "../common/collection";
import { dinninGout } from "../../data/diningout";
import Filters from "../common/filter";
import Exploresection from "../common/exploresection";

const collectionlist = [
  {
    id: "1",
    title: "Trending This week",
    cover:
      "https://b.zmtcdn.com/data/collections/d040fb7cd432d7dd89293cad030d23ed_1691829339.png",
    places: "21 places",
  },
  {
    id: "2",
    title: "10 Unique Dining Experience",
    cover:
      "https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places: "24 places",
  },
  {
    id: "3",
    title: "21 Best Insta-worthy Place",
    cover:
      "https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png",
    places: "23 places",
  },
  {
    id: "4",
    title: "21 Romatic Dining Place",
    cover:
      "https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg",
    places: "21 places",
  },
  {
    id: "5",
    title: "10 Celeb-loved Place",
    cover:
      "https://b.zmtcdn.com/data/collections/8941ea1049484a5864e7a2aaf7e60f61_1688041977.png",
    places: "20 places",
  },
  {
    id: "6",
    title: "26 Serene Rooftop Place",
    cover:
      "https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
    places: "18 places",
  },
  {
    id: "7",
    title: "18 Newly Opened Restaurent",
    cover:
      "https://b.zmtcdn.com/data/collections/a247de0031551d916cbce6a8401c501f_1674569722.jpg",
    places: "10 places",
  },
  {
    id: "8",
    title: "14 Must Visit-Legendary Places",
    cover:
      "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120012.jpg",
    places: "12 places",
  },
];

const diningfilter = [
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

    title: "Alcohol Serving",
  },
  {
    id: 4,

    title: "Pure Veg",
  },
  {
    id: 6,
    title: "Open Now",
  },
];

const diningList = dinninGout;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionlist} />
      <div className="max-width">
        <Filters filterlist={diningfilter} />
      </div>
      <Exploresection list={diningList} collectionName="Dine-out Restaurents" />
    </div>
  );
};

export default DiningOut;
