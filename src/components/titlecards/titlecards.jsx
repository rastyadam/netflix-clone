import React, { useRef, useEffect } from 'react'
import './titlecards.css'
import card_data from '../../data/card_data'



const Titlecards = ({title,category}) => {

  const cardsRef = useRef();

const handleWheel = (event)=>{
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() => {
  if (cardsRef.current) {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }
}, [])

  return (
    <div className="titlecards">
      <h2>{ title?title: "Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {card_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Titlecards
