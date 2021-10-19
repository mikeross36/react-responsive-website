import React, {useState, useEffect} from "react"
import { slides } from "./data"
import {FaQuoteRight, FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa"

export default function Slider(){
    const [currentSlide, setCurrentSlide] = useState(0)

    const previouseSlide = function(){
        setCurrentSlide(currentSlide === 0 ? slides.length -1 : currentSlide -1)
    }

    const nextSlide = function(){
        setCurrentSlide(currentSlide === slides.length -1 ? 0 : currentSlide +1)
    }

    useEffect(function(){
        const slider = setInterval(function(){
            setCurrentSlide(function(slide){
                let activeSlide = slide + 1;
                if(activeSlide > slides.length -1){
                    activeSlide = 0
                }
                return activeSlide
            })
        }, 3000)
        return function(){
            clearInterval(slider)
        }
    },[currentSlide])
    
    return (
        <section className="slider">
            <h2>user testimonials</h2>
            <div className="slider-wrapper">
                {slides.map(function(slide, index){
                    const {id, image, name, title, quote} = slide;
                    let position = "next-slide"

                    if(index === currentSlide){
                        position = "active-slide"
                    }
                    else if(index === currentSlide -1 || (currentSlide === 0 && index === slides.length -1)){
                        position = "prev-slide"
                    }

                    return (
                        <article key={id} className={`slide ${position}`}>
                            <img src={image} alt={name} />
                            <h3>{name}</h3>
                            <p className="title">{title}</p>
                            <blockquote className="quote">{quote}</blockquote>
                            <FaQuoteRight className="quote-icon" />
                        </article>
                    )
                })}
            </div>
            <button className="prev-btn"
                onClick={previouseSlide}>
                <FaAngleDoubleLeft />
            </button>
            <button className="next-btn"
                onClick={nextSlide}>
                <FaAngleDoubleRight />
            </button>
        </section>
    )
}