import React, { useState, useEffect } from 'react';
import './Slideshow.scss';
import API from '../../../common/API.js';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const defaultSlides = [
    {
        arrKey: 0,
        image: '/img/Slideshow/slide-1.jpg',
        title: 'Default Slide 1 Title',
    },
    {
        arrKey: 1,
        image: '/img/Slideshow/slide-2.jpg',
        title: 'Default Slide 2 Title',
    },
    {
        arrKey: 2,
        image: '/img/Slideshow/slide-3.jpg',
        title: 'Default Slide 3 Title',
    }
];



const Slideshow = () => {

    const [slides, setSlides] = useState(defaultSlides);

    useEffect(() => {
        //2. Retrieve data from the server
        API.get('slides').then((result) => {


            //3. Update staff members with data from server
            console.log('Slides Server Response', result);
            setSlides(result.data);
        });
    }, []);


    const renderSlides = () => {
        return slides.map(slide => {
            return (
                <div key={slide.arrKey}>
                    <img src={slide.image} alt={slide.title} />
                    <p className="legend">{slide.title}</p>
                </div>
            );
        });
    }


    return (

        <div classname='Slideshow'>

            <Carousel
                showThumbs={false}
                showIndicators={false}
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
            >

                {renderSlides()}

            </Carousel>




        </div >


    );

}
export default Slideshow;