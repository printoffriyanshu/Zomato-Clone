import React, { useState } from 'react'
import Header from "../../components/common/header";
import Taboption from '../../components/common/taboption';
import Footer from '../../components/common/footer';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/DiningOut';
import NightLife from '../../components/NightLife';
const HomePage = () => {

  const [activeTab,setActiveTab]=useState("Delivery")

  return (
    <div>
       <Header />
       <Taboption activeTab={activeTab} setActiveTab={setActiveTab} />
       {getCorrectScreen(activeTab)}
       <Footer/>
    </div>
  );
};
const getCorrectScreen=(tab)=>{
  switch (tab) {
    case "Delivey":
      return <Delivery/>;
    case "DiningOut":
      return <DiningOut/>;
    case "Nightlife":
      return <NightLife/>;
    default:
      return <Delivery/>;
  }
}

export default HomePage;