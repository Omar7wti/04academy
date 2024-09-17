"use client"

import React from 'react';
import Select from 'react-select';
import Flag from 'react-world-flags';
import "./header.css"

const countries = [
  { value: 'US', label: 'United States', code: 'US' },
  { value: 'EG', label: 'Egypt', code: 'EG' },
  { value: 'GB', label: 'United Kingdom', code: 'GB' },
  { value: 'FR', label: 'France', code: 'FR' },
  { value: 'DE', label: 'Germany', code: 'DE' },
  { value: 'IT', label: 'Italy', code: 'IT' },
  { value: 'SA', label: 'Saudi Arabia', code: 'SA' }, 
  { value: 'AE', label: 'United Arab Emirates', code: 'AE' }, 
  { value: 'JP', label: 'Japan', code: 'JP' }, 
  { value: 'KR', label: 'South Korea', code: 'KR' }, 
  { value: 'IN', label: 'India', code: 'IN' }, 
  { value: 'CN', label: 'China', code: 'CN' }, 
  { value: 'BR', label: 'Brazil', code: 'BR' }, 
  { value: 'MX', label: 'Mexico', code: 'MX' }, 
  { value: 'RU', label: 'Russia', code: 'RU' }, 
  { value: 'ID', label: 'Indonesia', code: 'ID' }, 
];


export const Header = () => {
  const customSingleValue = ({ data }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Flag code={data.code} style={{ width: '20px', marginRight: '10px' }} />
      {data.label}
    </div>
  );

  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <Flag code={data.code} style={{ width: '20px', marginRight: '10px' }} />
        {data.label}
      </div>
    );
  };

  return (
    <div className='header__container'>
      <Select
        className='dropdown'
        options={countries}
        components={{ Option: customOption, SingleValue: customSingleValue }}
      />
    </div>
  );
};
