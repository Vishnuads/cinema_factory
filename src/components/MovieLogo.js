import React from 'react'
import Slider from "react-slick";


import logoOne from '../images/works/mv1.png'
import logoTwo from '../images/works/mv2.png'
import logoThree from '../images/works/mv3.png'
import logoFour from '../images/works/mv4.png'
import logoFive from '../images/works/mv5.png'

import logoSix from '../images/works/mv6.png'
import logoSeven from '../images/works/mv7.png'
import logoEight from '../images/works/mv8.png'
import logoNine from '../images/works/mv9.png'
import logoTen from '../images/works/mv10.png'
import logoEleven from '../images/works/mv11.png'
import logoTwelve from '../images/works/mv12.png'
import logoThirteen from '../images/works/mv13.png'
import logoFourteen from '../images/works/mv14.png'
import logoFifteen from '../images/works/mv15.png'
import logoSixteen from '../images/works/mv16.png'
import logoSeventeen from '../images/works/mv17.png'
import logoEighteen from '../images/works/mv18.png'
import logoNineteen from '../images/works/mv19.png'
import logoTwenty from '../images/works/mv20.png'
import logoTwentyone from '../images/works/mv21.png'
import logoTwentytwo from '../images/works/mv22.png'
import logoTwentythree from '../images/works/mv23.png'
import logoTwentyfour from '../images/works/mv24.png'
import logoTwentyfive from '../images/works/mv25.png'
import logoTwentysix from '../images/works/mv26.png'
import logoTwentyseven from '../images/works/mv27.png'
import logoTwentyeight from '../images/works/mv28.png'
import logoTwentynine from '../images/works/mv29.png'
import logoThirtyone from '../images/works/mv30.png'
import logoThirtytwo from '../images/works/mv31.png'





const MovieLogo = () => {

    // courses
    const settings = {
        className: "center",
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        swipeToSlide: true,
            afterChange: function (index) {
            console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        },
        responsive: [
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 5,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 6,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    centerPadding: "30px",
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "20px",
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "15px",
                }
            }
        ]
    };


    return (
        <div>
            <div className="slider-container">
                <Slider {...settings} className="">

                    <div className='px-4'>
                        <img src={logoOne} className='w-24  md:w-36  object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto" />
                    </div>

                    {/* <div className='px-4'>
                        <img src={logoTwo} className='w-24  md:w-36  object-cover' alt="" />
                    </div> */}

                    <div className='px-4'>
                        <img src={logoThree} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoFour} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoFive} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoSix} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoSeven} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoEight} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoNine} className='w-36  object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoTen} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoEleven} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    
                    <div className='px-4'>
                        <img src={logoThirteen} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoFourteen} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoFifteen} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoSixteen} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoSeventeen} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoEighteen} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoNineteen} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoTwenty} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoTwentyone} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoTwentythree} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoTwentyfour} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoTwentyfive} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoTwentysix} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    {/* <div className='px-4'>
                        <img src={logoTwentyseven} className='w-24  md:w-36   object-cover' alt="" />
                    </div> */}

                    <div className='px-4'>
                        <img src={logoThirtyone} className='w-24  md:w-36   object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>

                    <div className='px-4'>
                        <img src={logoThirtytwo} className='w-24  md:w-36  object-cover' alt="mentor works" title="Best Cinema Factory Institute" loading="lazy" fetchpriority="auto"  />
                    </div>



                </Slider>


            </div>

        </div>
    )
}

export default MovieLogo
