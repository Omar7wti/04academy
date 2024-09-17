"use client"

import React, { useState } from 'react';
import "./booking.css"

export const Booking = () => {
  const [sessions, setSessions] = useState(8);
  const regularPrice = 29.60; // Regular price per session
  const discount = 0.05; // 5% discount
  const setupFee = 0.00;

  const discountedPrice = regularPrice * (1 - discount);
  const totalPrice = sessions * discountedPrice;

  return (
    <div>
      <h3>Order Overview</h3>
      <div className="box">
        <div>6 month</div>
        <div>9 month</div>
        <div>12 month</div>
        <div>18 month</div>
        <div>24 month</div>
        <div>36 month</div>
      </div>
      <div className="discount">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
        Pay in advance - EXTRA 5% DISCOUNT
      </div>
      <div class="info-row">
        <span>Number of sessions:</span>
        <span>{sessions}</span>
      </div>
      <div class="info-row">
        <span>Regular Price:</span>
        <span>€{regularPrice.toFixed(2)}</span>
      </div>
      <div class="info-row">
        <span>Your Price:</span>
        <span>€{discountedPrice.toFixed(2)}</span>
      </div>
      <div class="info-row green">
        <span>Discount (5%):</span>
        <span>€{-((regularPrice - discountedPrice) * sessions).toFixed(2)}</span>
      </div>
      <div class="info-row purple">
        <span>Setup Fee:</span>
        <span>€{setupFee.toFixed(2)}</span>
      </div>
      <div class="info-row purple">
        <span>Total:</span>
        <span>€{totalPrice.toFixed(2)}</span>
      </div>
      <div className='terms'>
        <input type="checkbox"/>
        <p>I agree to the <a href="#">terms and conditions</a> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <button>Order Now</button>
    </div>
  );
};
