import React from 'react';
import "./Input.css"

export default function Input(props) {

  const {placeholder, onChange} = props
  
  return (
    <div className={'input-box'}>
      <input onChange={onChange} placeholder={placeholder}/>
    </div>
  )
}