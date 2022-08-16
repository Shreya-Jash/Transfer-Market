import React from 'react'
import "../slider/slider.css"
import leftarrow from "../slider/Icons/left.png"
import rightarrow from "../slider/Icons/right.png"


export default function BtnSlider({direction,moveSlide}) {
  return (
    <div>
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img 
                src={direction === "next" ? rightarrow : leftarrow}/>
        </button>
    </div>
  )
}
