import React, { useState } from 'react'

const FAQ = ({data,Toggle,Active}) => {
    const {question, answer} = data;
    
    
  return (
    <li >
      <div className="accordion-grid">
        <p> {question}</p>
        <button className={Active?"active-btn":" "} onClick={Toggle}>{Active?"Delete":"Show"}</button>
      </div>
      <p>{Active && answer}</p>
    </li>
  );
}

export default FAQ
