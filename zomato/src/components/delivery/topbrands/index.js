import React from "react";
import "./topbrands.css";
import NextArrow from "../../common/carousel/nextarrow";
import PrevArrow from "../../common/carousel/prevarrow";
import Slider from "react-slick";
const TopbrandList = [
  {
    id: 1,
    time: "31min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
  },
  {
    id: 2,
    time: "32min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp",
  },
  {
    id: 3,
    time: "27min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
  },
  {
    id: 4,
    time: "35min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1cbe03ee1c6933e8fb2021cd835e889d_1624021602.png?output-format=webp",
  },
  {
    id: 5,
    time: "35min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
  },
  {
    id: 6,
    time: "30min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png?output-format=webp",
  },
  {
    id: 7,
    time: "19min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
  },
  {
    id: 8,
    time: "38min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
  },
  {
    id: 9,
    time: "25min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a175a6938688350fb3da3018da6293db_1625244343.png?output-format=webp",
  },
  {
    id: 10,
    time: "32min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/798d657e25775febef6687da9c4d6e92_1514367872.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {TopbrandList.map((brand) => {
          return (
            <div>
              <div className="top-brand-cover">
                <img
                  src={brand.cover}
                  className="top-brands-image"
                  alt="{brand.time}"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
