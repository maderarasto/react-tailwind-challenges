import Slide from "../components/Slide";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

type SlideshowProps = {
    movies: Challenges.MobileMovieAd.Movie[]
}

export default function Slideshow({
    movies
}: SlideshowProps) {
    const [current, setCurrent] = useState(0);

    // Computed properties
    const prevSlides = [...movies.keys()].slice(0, current);
    const nextSlides = [...movies.keys()].slice(current + 1);

    function resolveClassName(index: number) {
        let className = 'translate-x-[0%] z-20';

        if (prevSlides.includes(index)) {
            className = 'translate-x-[-50%]';
            
            if (index === prevSlides[prevSlides.length - 1]) {
                className += ' z-10';
            }
        } else if (nextSlides.includes(index)) {
            className = 'translate-x-[50%]'
            
            if (index === nextSlides[0]) {
                className += ' z-10';
            }
        }

        return className;
    }

    function handleLeftArrowClick() {
        setCurrent(prevCurrent => (prevCurrent - 1) >= 0 ? prevCurrent - 1 : prevCurrent)
    }

    function handleRightArrowClick() {
        setCurrent(prevCurrent => (prevCurrent + 1) < movies.length ? prevCurrent + 1 : prevCurrent)
    }

    return (
        <div className="px-12 overflow-hidden">
            <div className="relative h-[600px]">
                {prevSlides.length > 0 ? (
                    <button 
                        type="button" 
                        title="Slide to left" 
                        onClick={handleLeftArrowClick}
                        className="absolute top-1/4 -left-8 text-white z-50 hover:text-white"
                    >
                        <FontAwesomeIcon icon={faAngleLeft} size="xl" />
                    </button>
                ) : ''}
                {movies.map(({id, title, date, image, duration, synopse}, index) => (
                    <Slide  
                        key={id} 
                        title={title} 
                        date={date} 
                        image={image} 
                        duration={duration}
                        synopse={synopse}
                        active={index === current}
                        className={resolveClassName(index)}
                    />
                ))}
                {nextSlides.length > 0 ? (
                    <button 
                        type="button" 
                        title="Slide to right" 
                        onClick={handleRightArrowClick}
                        className="absolute top-1/4 -right-8 text-white z-50 hover:text-white"
                    >
                        <FontAwesomeIcon icon={faAngleRight} size="xl" />
                    </button>
                ) : ''}
            </div>
        </div>
    );
}