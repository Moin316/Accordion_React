import React, { useEffect, useState } from 'react'
import faq from './api/faq.json'
import FAQ from './components/UI/FAQ';
const Accordion = () => {
    const [data,setData]=useState([]);
    const [active,setActive]=useState(false);
    useEffect(()=>{
        setData(faq);
    },[])
    const HandleButton=(id)=>{
        setActive((prev)=>
            (prev===id?false:id)
        );
    }
  return (
    <>
      <h1>Accordion</h1>
      <ul className="section-accordion">
        {data.map((item) => (
          <FAQ key={item.id} data={item} Active={active===item.id} Toggle={()=>HandleButton(item.id)}/>
        ))}
      </ul>
    </>
  );
}

export default Accordion
