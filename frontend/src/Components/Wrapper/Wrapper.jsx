import React from 'react'
import './Wrapper.css'


const Wrapper = () => {

  const serviceData = [
    {
      title: "Free Shipping",
      subtitle: "Orders above ₹299",
      bg: "#fdefe6",
    },
    {
      title: "Fastest Delivery",
      subtitle: "Get your Goodies in a Flash!",
      bg: "#ceebe9",
    },
    {
      title: "Cash on Delivery",
      subtitle: "Pay when you Receive",
      bg: "#e2f2b2",
    },
    {
      title: " Back Guarantee",
      subtitle: "Hassle-Free Returns",
      bg: "#d6e5fb",
    },
  ];
    
  return (
    <div className='wrappers'>
        {serviceData.map((item,index)=>{
            return(
                <div className="wrapper" key={index} style={{backgroundColor:item.bg}} >
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p> 
                </div>
            )
        })}
    </div>
  )
}

export default Wrapper
