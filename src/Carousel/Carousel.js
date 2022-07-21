// Reference: https://github.com/Ziratsu/Carousel-react
// https://www.youtube.com/watch?v=og3wCO98HkQ
import './Carousel.css';
import BtnCarousel from './BtnCarousel';
import dataCarousel from './DataCarousel';
import React, {useState, useEffect, useRef} from 'react';

export default function Carousel() {
    const [slideIndex, setSlideIndex] = useState(1);
    // false for englishg true for chinese
    const [lang, setLang] = useState(false);

    const nextSlide = () => {
        if(slideIndex !== dataCarousel.length){
            setSlideIndex(slideIndex + 1);
        } 
        else if (slideIndex === dataCarousel.length){
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1);
        }
        else if (slideIndex === 1){
            setSlideIndex(dataCarousel.length);
        }
    }

    const moveDot = index => {
        setSlideIndex(index);
    }

    // auto play
    const autoPlayRef = useRef();

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    })
      
    useEffect(() => {
        const play = () => {
          autoPlayRef.current();
        }
    
        const interval = setInterval(play, 3000);
        return () => clearInterval(interval);
    }, [])

    // change language in carousel
    useEffect(() => {            
        const enBTN = document.getElementById('enBTN');
        const zhBTN = document.getElementById('zhBTN');

        enBTN.addEventListener("click", (e) => {
            setLang(false);
        });

        zhBTN.addEventListener("click", (e) => {
            setLang(true);
        });
   }, [])

    return (
        <div className="container-Carousel">
            {dataCarousel.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Carousel_Imgs/img${index + 1}.jpg`} 
                        alt="img gallery"/>
                        
                        {
                            lang === false ?
                            <p>{obj.title_en}</p> :
                            <p>{obj.title_zh}</p>
                        }
                    </div>
                )
            })}

            <BtnCarousel moveSlide={nextSlide} direction={"next"} />
            <BtnCarousel moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 17}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}