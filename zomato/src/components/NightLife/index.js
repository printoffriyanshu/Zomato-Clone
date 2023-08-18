import React from 'react'
import "./NightLife.css"
import Collection from '../common/collection';
import Filters from '../common/filter';
import Exploresection from '../common/exploresection';
import { nightLife } from '../../data/nightlife';

const nightFilter=[
  {
    id:1,
    icon:<i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title:"filter",
  },
  {
    id:2,
    title:"Pro Offers",
    icon:<i className='fi fi-rr-angel-down absolute-center'></i>,
  },
  {
    id:3,
    title:"Distance",
    icon:<i className='fi fi-rr-angel-down absolute-center'></i>,
  },
  {
    id:4,
    title:"Pro Offers",
    icon:<i className='fi fi-rr-apps-sort absolute-center'></i>,
  },
  {
    id:5,
    title:"Rating: 4.0+",
    
  },
  {
    id:6,
    title:"Pubs & Bar",
  },
];

const collectionlist=[
   {
    id:"1",
    title:"Microbreweries",
    cover:"https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078835.jpg?output-format=webp",
    places:"29 places",
   },
   {
    id:"2",
    title:"Best Bars & Pubs",
    cover:"https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg?output-format=webp",
    places:"19 places",
   },
];

const nightList=nightLife;
const NightLife = () => {
  return (
    <div>
     <Collection list={collectionlist} />
     <div className='max-width'>
     <Filters filterlist={nightFilter}/>
     </div>
     <Exploresection list={nightList} collectionName="Nightlife Restaurent" />
    </div>
  )
}

export default NightLife