import React from 'react';
import Slider from 'react-slick';

import Monstervania from '../ProjectSlides/Monstervania.jsx';
import Kepler4Neo from '../ProjectSlides/Kepler4Neo.jsx';
import Wizwars from '../ProjectSlides/Wizwars.jsx';
import Amazon2Ali from '../ProjectSlides/Amazon2Ali.jsx';
import CourseRegistration from '../ProjectSlides/CourseRegistration.jsx';

import './Projects.css';
import { useMediaPredicate } from "react-media-hook";


function Projects() {


    var lessThan900 = useMediaPredicate("(max-width: 940px)")



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        //adaptiveHeight: true
    };

    function carousel() {
        return <Slider {...settings}>
            <div className="projectsection__slide"><Amazon2Ali /></div>
            <div className="projectsection__slide"><Monstervania /></div>
            <div className="projectsection__slide"><Kepler4Neo /></div>
            <div className="projectsection__slide"><Wizwars /></div>
            <div className="projectsection__slide"><CourseRegistration /></div>
        </Slider>
    }

    function noCarousel() {
        return <div>
            <div className="projectsection__nocarousel"><Amazon2Ali /></div>
            <div className="projectsection__nocarousel"><Monstervania /></div>
            <div className="projectsection__nocarousel"><Kepler4Neo /></div>
            <div className="projectsection__nocarousel"><Wizwars /></div>
            <div className="projectsection__nocarousel"><CourseRegistration /></div>
        </div>
    }

    return <div className="projectsection">
        {lessThan900 ? noCarousel() : carousel()}
    </div>
}

export default Projects;