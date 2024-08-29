import React from 'react'
import './Success.css'

const Success = () => {
  return (
    <>
    <div className="success">
        <div className="success-content">
            <i class="fa-regular fa-circle-check"></i>
            <p>Order Successfully Placed</p>
            <a href="/orders">Check Status</a>
        </div>
    </div>
    </>
  )
}

export default Success
