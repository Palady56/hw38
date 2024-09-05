import React from 'react';
import "./Button.css"

export default function Button(props) {

  const {text, onClick, className} = props
  
  return (
    <div className={'btn-box'}>
      <button className={className} onClick={onClick}>{text}</button>
    </div>
  )
}