"use client";

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./details.css";
import next from 'next';

export const Details = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <div className="text-header">
        <h2>Registration & Booking at GoStudent</h2>
        <h4>The leading platform for online tutoring</h4>
      </div>
      
      <div className="inputs">
        <label>
          Login Phone Number (preferably the student’s)
          <PhoneInput
            className="phone-input"
            country={'us'}
            value={phone}
            onChange={phone => setPhone(phone)}
          />
        </label>

        <label>
          Contact Phone Number 
          <PhoneInput
            className="phone-input"
            country={'us'}
            value={phone}
            onChange={phone => setPhone(phone)}
          />
        </label>

        <label>
          Contact Email Address 
          <input type="email" placeholder="Enter your email" />
        </label>

        <label>
          Contact Name
          <input type="text" placeholder="Enter your name" />
        </label>

        <label>
          Billing Address
          <input type="text" placeholder="Address" />
        </label>

        <div className="col-3">
          <label>
            Postal Code
            <input type="text" placeholder="Postal Code" />
          </label>
          <label className='center'>
            City
            <input type="text" placeholder="City" />
          </label>
          <label>
            Country
            <input type="text" placeholder="Country" />
          </label>
        </div>

        <label>
          Monthly Sessions
          <select>
            <option>8 Sessions</option>
            <option>12 Sessions</option>
            <option>16 Sessions</option>
          </select>
        </label>

        <h3>Select Payment Method</h3>
        <div className="payment-method">
          <label>
            SIPA
            <input type="radio" name="paymentPlan" value="sepa" />
          </label>
          <label>
            VISA
            <input type="radio" name="paymentPlan" value="credit" /> 
          </label>
        </div>

        <label>
          Card Holder
          <input type="text" placeholder="Card Holder's Name" />
        </label>
        
        <label>
          Card Number
          <input type="text" placeholder="Card Number" />
        </label>
      </div>
    </div>
  );
};
