import React from 'react'
import  "./deliveryitem.css"
const DeliveryItems = ({item}) => {
  return (
    <div className='delivery-item-cover'>
     <img src={item.cover} className='delivery-item-image absolute-center' alt='{item.title}'/>
     <div className='delivery-item-title absolute-center' >{item.title}</div>
    </div>
  )
}

export default DeliveryItems