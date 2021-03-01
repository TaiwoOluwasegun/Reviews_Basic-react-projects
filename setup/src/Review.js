import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index, setIndex] = useState(1);
  const {id,name, job, image, text} = people[index];

 const checkIndex = (index) =>{
   if(index > people.length -1){
     return 0
   };
   if (index < 0){
     return people.length -1
   }
   return index
 }

  const nextPerson = ()=>{
    setIndex((index)=>{
      let newIndex = index +1;
      return checkIndex(newIndex) ;
    })

  };
  const prevPerson = ()=>{
    setIndex((index)=>{
      let newIndex = index -1;
      return checkIndex(newIndex);
    })

  };

  const randomNumber = ()=>{
    let ranNumber =Math.floor( Math.random() * people.length);
    if (ranNumber === index){
      ranNumber = index+1;
    }
  setIndex(checkIndex(ranNumber)) ;
   
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={()=>prevPerson()} className="prev-btn">
          <FaChevronLeft/>
        </button>
        <button  onClick={()=>nextPerson()}  className="next-btn">
          <FaChevronRight/>
        </button>
      </div>
      <button className="random-btn" onClick={randomNumber}>
     suprise M
        </button>
    </article>
  );
};

export default Review;
