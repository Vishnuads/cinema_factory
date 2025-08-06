import React from 'react'
import Slider from "react-slick";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../text.css'

import { FaArrowRight } from "react-icons/fa6";

import banner from '../../images/course/banner/pattern.jpg'
import frame from '../../images/course/acting/acting.png'




//icons
import { RiWhatsappLine } from "react-icons/ri";
import { PiMaskHappyBold } from "react-icons/pi";
import sara from '../../images/mentors/chandra.jpg'
import nassar from '../../images/mentors/nassar.png'






const Acting = () => {


    function topPage() {
        window.scroll(0, 0)
    }

    const settings = {
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        centerPadding: "60px",
        slidesToShow: 3,
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
                    slidesToShow: 4,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "30px",
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "20px",
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "15px",
                }
            }
        ]
    };



    return (
        <>

            <div className='font-kumbh overflow-hidden '>

                <Helmet>
                    <title>Learn Acting Courses In India | Acting Institute India</title>
                    <meta
                        name="description"
                        content="Step into acting with our 6-month course. Learn from experts, gain hands-on experience, and build a professional portfolio. Apply now to start your acting career"
                    />
                    <meta
                        name="keywords"
                        content="Acting Institute in India | Diploma in Acting | Acting Diploma Courses | Certification in Acting Courses | Acting Courses In India | Best institute for Acting | Acting Courses | Acting Training Institute | best Acting Training Institute | leading Acting Training Institute |  best Acting Institute | leading Acting Institute | Career in Acting | Jobs in Acting | Acting Jobs | Film Acting Institute in India| Film Acting Courses | Film Acting institute | Diploma in Film Acting | Salary for film Acting"
                    />
                    <meta name="author" content="Cinema Factory Academy" />
                    <meta charSet="utf-8" />
                    {/* Add other meta tags here if needed */}
                </Helmet>

                <div className='  '>
                    <img src={banner} className=' blur-[2px] w-full fixed top-0 object-cover h-screen -z-30' alt="main banner" title="Learn Acting Courses In India " loading="lazy" fetchpriority="auto" />
                </div>


                <section>
                    <div className=''>

                        <div>
                            <img src={frame} className='w-full object-cover' alt="main banner" title="Learn Acting Courses In India " loading="lazy" fetchpriority="auto" />
                        </div>

                    </div>
                </section>


                {/* -------------- course highligts ----------------- */}

                {/* <section className='bg-gray-950'>

                    <div className='relative'>

                        <div className='relative'>
                            <img src={light} className='w-full object-cover h-screen md:h-auto' alt="" />
                            <div className='w-full backdrop-blur-sm bg-blue-900/15 inset-0 absolute top-0'></div>
                        </div>

                        <div className='absolute w-full top-0'>

                            <div className='w-full px-4 md:w-[90%] mx-auto mt-10 md:mt-16'>

                                <div className='mb-8 flex flex-col items-center'>
                                    <h3 className='font-bold text-[20px] md:text-[40px] text-white text-center uppercase tracking-[2px]'>Course highlights </h3>
                                </div>

                                <div className='flex justify-center items-center md:mt-12'>


                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-14 gap-y-4 md:gap-y-14  text-[12px] md:text-[14px]'>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconOne} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'> Audition techniques and presentation </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconTwo} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Unique weekend course designed for</h3>
                                            </div>
                                        </div>


                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconThree} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'> Scenes, exercises, and performances. </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconFour} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Acting basics from scratch</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconFive} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Personalized attention and guidance in a film environment.</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconSix} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>  Learn the craft of acting for film and television. .</h3>
                                            </div>
                                        </div>


                                        <div className='hidden md:flex'>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconSeven} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'> Film aspirants: Learn the craft of acting for film and television.  </h3>
                                            </div>
                                        </div>

                                        <div className='hidden md:flex'>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconEight} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'> Holistic approach to develop your overall personality,  </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                
                            </div>

                        </div>

                    </div>


                </section> */}



                {/* -------------- Syllabus ----------------- */}

                <section className='border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950 -mt-6'>
                    <div className=' w-full px-4 md:w-[85%] mx-auto'>



                        <div className='flex flex-col md:flex-row items-center gap-y-14'>

                            <div className=' w-full md:w-[85%] md:px-5 mx-auto'>

                                <div className='flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16'>
                                    <h3 className='font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase'>6 Months  Course  </h3>
                                    <p className='font-semibold text-[18px] md:text-[24px] text-[#ff0000]  font-[roboto] uppercase tracking-[1px] '> in Acting</p>
                                </div>

                                {/* <div className=''>

                                    <div class="border border-gray-600 overflow-y-auto h-[25rem] scrollbar-style-one px-2 md:px-6 py-4 rounded-md overscroll-y-contain	">

                                        <div className=''>

                                            <div className='flex flex-col gap-y-4 md:gap-y-6'>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Month 1: Foundations of Acting</h3>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 1-2: Introduction and Orientation</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>Course Overview </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Addressing Initial Struggles with Personalized Guidance</li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Introduction to Acting Techniques</li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-3'>

                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 3-4: Physical and Vocal Foundations</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>Transforming Vocal and Physical Expressions </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Vocal Exercises and Voice Training</li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Bodywork, Breathwork, and Bioenergetics</li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Month 2: Scene Study and Improvisation</h3>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 5-6: Scene Study</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Scene Study through Spontaneity </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>Adding Variations to a Single Scene </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>Understanding Text and Subtext </li>

                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 7-8: Improvisation Techniques</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> The Role of Improvisation in Acting </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Animal and Mask-Based Exercises </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>  Sense Memory in Scene Performance</li>

                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Month 3: Character and Script Work</h3>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 9-10: Character Development</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Approaching Monologues, Scripts, and Characters </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Character Study and Improvisations </li>

                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 11-12: Acting for the Camera</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Realistic Acting Training with Script Basis </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Audition Techniques </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Storytelling and Narrations </li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Month 4: Advanced Acting Techniques</h3>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 13-14: Method Acting</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Introduction to Method Acting (Stanislavski System) </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Navarasam (The Nine Emotions) </li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 15-16: Exploring Film Genres</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>  Types of Conflicts in Scenes </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>  Plot and Theme Development </li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Month 5: Integration and Collaboration</h3>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 17-18: Combined Practical Classes</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>  Working with Students from Other Departments </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Practical Classes on Combined Projects  </li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 19-20: Acting Theory and Portfolio Development </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>  Acting Theory Overview </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>  Photo Shoot for Portfolio Creation </li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Month 6: Final Projects and Showcase </h3>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 21-22: Final Project Preparation </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>  Project Development </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>  Character and Plot Refinement </li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[18px] md:text-[20px] text-gray-200'> Week 23-24: Final Performances and Evaluations</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-400'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>  Final Scene Performances </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span>  Evaluations and Feedback </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-200 text-[16px] md:text-[20px]' />  </span> Showcase Event  </li>

                                                    </ul>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div> */}


                                <div className='flex justify-center items-center font-[poppins]'>

                                    <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-64'>

                                        <div className='flex flex-col gap-y-4'>


                                            <div className='flex flex-col gap-y-4 items-start'>

                                                <div className='flex flex-col gap-y-2 items-start'>
                                                    <div>
                                                        <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 1</h3>

                                                    </div>

                                                    <div>
                                                        <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Foundations of Acting</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Introduction and Orientation</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Physical and Vocal Foundations</li>

                                                        </ul>
                                                    </div>

                                                </div>



                                            </div>


                                            <div className='flex flex-col gap-y-4 items-start'>

                                                <div className='flex flex-col gap-y-2 items-start'>
                                                    <div>
                                                        <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 2</h3>
                                                    </div>

                                                    <div>
                                                        <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Scene Study and Improvisation</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Scene Study through Spontaneity Adding Variations to a Single Scene Understanding Text and Subtex</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Improvisation Techniques</li>

                                                        </ul>
                                                    </div>

                                                </div>



                                            </div>


                                            <div className='flex flex-col gap-y-4 items-start'>

                                                <div className='flex flex-col gap-y-2 items-start'>
                                                    <div>
                                                        <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 3</h3>

                                                    </div>

                                                    <div>
                                                        <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Character and Script Work</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Character Development</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Approaching Monologues, Scripts, and Characters Character Study and Improvisations</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Acting for the Camera                                                            </li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Realistic Acting Training with Script Basis Audition Techniques Storytelling and Narrations</li>

                                                        </ul>
                                                    </div>

                                                </div>


                                            </div>

                                        </div>



                                        <div className='flex flex-col gap-y-4'>


                                            <div className='flex flex-col gap-y-4 items-start'>

                                                <div className='flex flex-col gap-y-4 items-start'>

                                                    <div className='flex flex-col gap-y-2 items-start'>
                                                        <div>
                                                            <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 4</h3>
                                                        </div>

                                                        <div>
                                                            <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>
                                                                <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Advanced Acting Techniques </li>
                                                                <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Method Acting</li>
                                                                <li className='flex items-center gap-x-3 md:gap-x-5  '> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Introduction to Method Acting (Stanislavski System)  Navarasam  (The Nine Emotions)  </li>
                                                                <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Exploring Film Genres </li>
                                                                <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Types of Conflicts in Scenes Plot and Theme Development </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>




                                            </div>


                                            <div className='flex flex-col gap-y-4 items-start'>

                                                <div className='flex flex-col gap-y-2 items-start'>
                                                    <div>
                                                        <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 5</h3>
                                                    </div>

                                                    <div>
                                                        <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Integration and Collaboration</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Combined Practical Classes</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Working with Students from Other Departments Practical Classes on Combined Projects</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Acting Theory and Portfolio Development</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Acting Theory OverviewPhoto Shoot for Portfolio Creation                                                            </li>

                                                        </ul>
                                                    </div>

                                                </div>



                                            </div>

                                            <div className='flex flex-col gap-y-4 items-start'>

                                                <div className='flex flex-col gap-y-2 items-start'>
                                                    <div>
                                                        <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 6</h3>
                                                    </div>

                                                    <div>
                                                        <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Final Projects and Showcase</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Project Development Character and Plot Refinement</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Final Performances and Evaluations</li>
                                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiMaskHappyBold className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Final Scene Performances Evaluations and Feedback Showcase Event</li>

                                                        </ul>
                                                    </div>

                                                </div>



                                            </div>



                                        </div>





                                    </div>

                                </div>


                                <div className=' mt-5 md:mt-10 flex justify-center items-center font-[poppins]'>
                                    <a href="https://api.whatsapp.com/send?phone=9884683888" target="_blank" rel="noopener noreferrer" className="">
                                        <button className='uppercase  group relative inline-flex h-8 md:h-10 text-[14px] items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500'>Request Detailed Syllabus</button>
                                    </a>
                                </div>


                            </div>





                        </div>

                    </div>
                </section >



                {/* ------------------ Mentors ------------------ */}

                < section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-white' >
                    <div className='w-full px-4 md:w-[80%] mx-auto font-kumbh'>

                        <div className='flex items-center justify-center mb-6 md:mb-10'>
                            <h3 className='font-bold text-black text-[20px] md:text-[40px] text-center uppercase tracking-[2px]'>Expert Mentor</h3>
                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='grid grid-cols-1 md:grid-cols-2  gap-y-10 md:gap-y-16 gap-x-20  '>

                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center'>
                                        <img src={sara} className='w-[80%] rounded-md object-cover' alt="mentor" title="Learn Acting Courses " loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[28px] text-white tracking-[2px]'>Raja Mohammed</h3>
                                            <span className='text-orange-500 text-[16px]'>Editing</span>
                                        </div> */}

                                        <div className='w-full md:w-[70%] mx-auto '>
                                            <p className=' text-[13px] md:text-[14px] text-gray-900 text-center'>
                                                S. Chandra Mohan, M.A., leads our Acting and Performance Art department at Cinema Factory Academy.
                                                An alumnus of the National School of Drama and founder of Red Elephant Theatre, he has taught over
                                                500 acting programs, ensuring top-notch training for aspiring performers.
                                            </p>
                                        </div>

                                        {/* <div className='flex justify-center items-center font-[poppins] text-[14px] md:text-[16px] font-semibold'>
                                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-[#ff0000] px-8 md:px-12 font-medium text-neutral-200 duration-500">
                                                <div className="uppercase translate-x-0 opacity-100 transition group-hover:translate-x-[-150%] group-hover:opacity-0 font-semibold font-[poppins] ">
                                                    Explore More
                                                </div>
                                                <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                                                    <FaArrowRight className='font-semibold text-[18px] text-white' />
                                                </div>
                                            </button>
                                        </div> */}

                                    </div>

                                </div>


                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center'>
                                        <img src={nassar} className='w-[80%] rounded-md object-cover' alt="mentor" title="Learn Acting Courses " loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[28px] text-white tracking-[2px]'>Raja Mohammed</h3>
                                            <span className='text-orange-500 text-[16px]'>Editing</span>
                                        </div> */}

                                        <div className='w-full md:w-[70%] mx-auto '>
                                            <p className=' text-[13px] md:text-[14px] text-gray-900 text-center'>
                                                M. Nasser's three-decade-long career in Indian cinema, marked by versatile roles and iconic
                                                performances in films like Nayakan and Baahubali, has earned him numerous accolades and deep respect
                                                across the industry.
                                            </p>
                                        </div>

                                        {/* <div className='flex justify-center items-center font-[poppins] text-[14px] md:text-[16px] font-semibold'>
                                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-[#ff0000] px-8 md:px-12 font-medium text-neutral-200 duration-500">
                                                <div className="uppercase translate-x-0 opacity-100 transition group-hover:translate-x-[-150%] group-hover:opacity-0 font-semibold font-[poppins] ">
                                                    Explore More
                                                </div>
                                                <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                                                    <FaArrowRight className='font-semibold text-[18px] text-white' />
                                                </div>
                                            </button>
                                        </div> */}

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section >



                {/* -------------- Our Mentors have Worked In ------------------------ */}

                {/* < section className='bg-black overflow-hidden flex justify-center items-center pt-14 pb-10 ' >

                    <div className='w-full mx-auto'>

                        <div className='flex justify-center items-center mb-12'>
                            <h3 className='font-bold uppercase text-[20px] md:text-[28px] text-white'>Our Mentor's Work</h3>
                        </div>

                        <div>

                            <div className="slider-container">
                                <Slider {...settings} className="">

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterOne} className='w-full object-cover' alt="" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterTwo} className='w-full object-cover' alt="" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterThree} className='w-full object-cover' alt="" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterFour} className='w-full object-cover' alt="" />
                                        </div>
                                    </div>

                                </Slider>
                            </div>

                        </div>
                    </div>
                </section > */}


                {/* ----------------------- who can apply -------------------------- */}

                {/* < section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-black' >
                    <div className=' w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex justify-center items-center mb-8 md:mb-14'>
                            <h3 className='font-bold text-[20px] text-center md:text-[35px] text-white '>Who can apply for the course? </h3>
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-y-8'>

                            <div className='w-full md:w-[40%] mx-auto'>

                                <div className='flex justify-center items-center'>
                                    <img src={who} className='w-[80%] object-cover rounded-md shadow-md drop-shadow-lg' alt="" />
                                </div>

                            </div>

                            <div className='w-full md:w-[60%] mx-auto md:px-16'>
                                <div className='flex justify-center items-center w-full'>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-20 font-semibold w-full' >

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <MdNaturePeople className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'>  Passionate Performers </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <MdEditOff className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Storytellers </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <FaHeadSideVirus className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Creative Souls </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>

                                                    <GiTeamIdea className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px] ' > Drama Enthusiasts </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <BiCommentDetail className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Bold Personalities </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <MdOutlineManageHistory className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Film Enthusiast </h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section > */}



                {/* ------------------------------ FAQ ----------------------- */}

                {/* < section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-[#1f2228]  font-[parta]' >
                    <div className='w-full px-4 md:w-[80%] mx-auto'>


                        <div className='flex flex-col gap-y-10 md:flex-row justify-center items-start'>

                            <div className='w-full md:w-[30%]'>

                                <div className=' px-2 md:px-6 flex flex-col gap-y-2 md:gap-y-12 items-center font-[poppins]'>
                                    <h3 className='font-bold text-[35px] md:text-[3.5rem] text-center flex flex-wrap items-center justify-center md:flex-col gap-x-3   md:gap-y-2 md:items-start text-white font-kumbh'>
                                        <span>Frequently</span>
                                        <span>Asked</span>
                                        <span className='text-[#ff0000]'>Question</span>
                                    </h3>

                                    <div className='font-kumbh w-full flex flex-col justify-center items-center md:items-start'>
                                        <p className='font-semibold text-start text-[22px] md:text-[20px] text-gray-200'>Still more doubts?</p>
                                        <div className='flex justify-center items-center mt-6 md:mt-10 w-full'>
                                            <button className='hover:scale-105 duration-300 w-full bg-gradient-to-r from-blue-700 to-[#ff0000] px-6 py-2 rounded-md font-semibold text-white uppercase tracking-[1px]'>Contact Us</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='w-full md:w-[80%]'>
                                <div className='w-full flex justify-center items-center  '>
                                    <div className='w-full md:px-10'>
                                        <ActingFAQ />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section > */}


                {/* -------------------- start banner  ------------------ */}

                {/* < section className='pt-20 pb-20 bg-gray-950' >
                    <div className='w-[80%] mx-auto'>

                        <div className='flex justify-center items-center'>
                            <img src={orange} className='w-[80%] object-cover rounded-md drop-shadow-md shadow-md' alt="" />
                        </div>

                    </div>
                </section > */}



                {/* --------------------- how to appply  -------------------*/}
                <section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-gray-950'>

                    <div className='px-4 w-full md:w-[80%] mx-auto'>

                        <div>
                            <h3 className='text-white font-bold text-[20px] md:text-[30px] mb-3 md:mb-3 uppercase'>How to apply?</h3>

                            <div className='flex flex-col gap-y-2 text-[14px] text-gray-200'>

                                <h1 className='font-[roboto] text-[13px] md:text-[14px] font-semibold mb-2 md:mb-4'>To join Cinema Factory Academy:</h1>
                                <ul className='font-[roboto] text-[12px] md:text-[14px] list-disc space-y-1 md:space-y-3 ml-4 md:ml-4 '>

                                    <li>Fill out our enquiry form or call us.</li>
                                    <li>Speak with our student counselor to finalize your chosen craft.</li>
                                    <li>Complete the application form and attend an interview.</li>
                                    <li>Upon acceptance, you'll receive an acceptance letter.</li>
                                </ul>

                            </div>

                            <div className='flex items-center gap-x-4 md:gap-x-10 mt-4 md:mt-10 font-[poppins] text-[12px] md:text-[14px]'>
                                <div>
                                    <Link to='/apply' onClick={topPage}>
                                        <button
                                            class="uppercase  group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500"
                                        >
                                            <div class="translate-y-0 transition group-hover:-translate-y-[150%]">
                                                Apply now
                                            </div>
                                            <div class="absolute translate-y-[150%] transition group-hover:translate-y-0">
                                                Apply Now
                                            </div>
                                        </button>
                                    </Link>
                                </div>

                                <div>
                                    <a href="https://api.whatsapp.com/send?phone=9884683888" target="_blank" rel="noopener noreferrer" className="">
                                        <button className="bg-transparent border border-white text-white shadow-md drop-shadow-md h-10 md:h-12 pl-3 rounded-md flex items-center gap-x-3 font-[poppins] text-[12px] md:text-[14px] hover:scale-105 duration-500">
                                            Request Syllabus
                                            <div className='px-3 bg-green-600 rounded-r-md'>
                                                <RiWhatsappLine className='text-white h-10 md:h-12 text-[22px] font-bold' />
                                            </div>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div >

        </>
    )
}

export default Acting



