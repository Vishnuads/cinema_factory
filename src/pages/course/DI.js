import React from 'react'
import Slider from "react-slick";
import DirectionFAQ from '../../components/Direction_FAQ';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../text.css'

import { FaArrowRight } from "react-icons/fa6";


import banner from '../../images/course/banner/pattern.jpg'
import frame from '../../images/course/DI/di.png'
import light from '../../images/course/DI/di_banner.png'
import who from '../../images/course/DI/di.1.png'


import bebin from '../../images/mentors/Antony_bebin.jpg'

import bebinOne from '../../images/poster/bebin/1.jpg'
import bebinTwo from '../../images/poster/bebin/2.jpg'
import bebinThree from '../../images/poster/bebin/3.jpg'
import bebinFour from '../../images/poster/bebin/4.jpg'
import bebinFive from '../../images/poster/bebin/5.jpg'
import bebinSix from '../../images/poster/bebin/6.jpg'
import bebinSeven from '../../images/poster/bebin/7.jpg'
import bebinEight from '../../images/poster/bebin/8.jpg'





//icons
import { RiWhatsappLine } from "react-icons/ri";

import { FaComputer } from "react-icons/fa6";


import iconOne from '../../images/course/photography/1.png'
import iconTwo from '../../images/course/photography/2.png'
import iconThree from '../../images/course/photography/3.png'
import iconFour from '../../images/course/photography/4.png'
import iconFive from '../../images/course/photography/5.png'




// import PhotographyFAQ from '../../components/PhotographyFAQ';


const DI = () => {

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
                    <title>Color Grading Courses India | Color Grading Institute India</title>
                    <meta
                        name="description"
                        content="Transform your visuals with our 3-month color grading course. Learn color correction, mood creation, and effects integration with hands-on training from industry experts"
                    />
                    <meta
                        name="keywords"
                        content="Digital Imaging courses | Color Grading courses | Best Digital Imaging courses | Best Color Grading courses | Digital Imaging Institute | Color Grading Institute | Best Multimedia Animation Institute | Film editing Courses | film institute in india | film training courses in India | Multimedia training institute | multimedia courses | Digital Media courses | Multimedia Institute In India"
                    />
                    <meta name="author" content="Cinema Factory Academy" />
                    <meta charSet="utf-8" />
                    {/* Add other meta tags here if needed */}
                </Helmet>


                <div className='  '>
                    <img src={banner} className=' blur-[2px] w-full fixed top-0 object-cover h-screen -z-30' alt='banner' title="Color Grading Courses India" loading="lazy" fetchpriority="auto" />
                </div>


                <section>
                    <div className=''>

                        <div>
                            <img src={frame} className='w-full object-cover' alt='banner' title="Color Grading Courses India" loading="lazy" fetchpriority="auto" />
                        </div>

                    </div>
                </section>


                {/* -------------- course highligts ----------------- */}



                <section className=' pt-10 md:pt-20  pb-10 md:pb-24 bg-white'>
                    <div className='w-full md:w-[90%] mx-auto'>

                        <div className=' font-[Prata] '>
                            <div>
                                <div className='flex justify-center items-center w-[90%] mx-auto  '>

                                    <div>
                                        <div className='mb-10 md:mb-20'>
                                            <h3 className=' font-bold text-[24px] md:text-[40px] uppercase font-[poppins] text-black text-center '>Course Highlights </h3>

                                        </div>

                                        <div>

                                            <div className='grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-60   gap-y-8 md:gap-y-14 mt-1  font-kumbh'>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconOne} className=' w-14 md:w-20 object-cover mb-2' alt='icon' title="Color Grading Institute India" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Quick & intensive  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>training </h3>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconTwo} className=' w-14 md:w-20 object-cover mb-2' alt='icon' title="Color Grading Institute India" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Flexible  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Class Scheduling</h3>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconFive} className=' w-14 md:w-20 object-cover mb-2' alt='icon' title="Color Grading Institute India" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>

                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Real-world  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> project experience</h3>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                {/* -------------- Syllabus ----------------- */}

                <section className='border-t-4 border-orange-500 pt-10 pb-16 md:pt-20 md:pb-20 bg-gray-950 -mt-6'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex flex-col gap-y-2 justify-center items-center  mb-6 md:mb-16'>
                            <h3 className='font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase'> 3 Month Course  </h3>
                            <p className='font-semibold text-[18px] md:text-[24px] text-[#ff0000]  font-[roboto] uppercase tracking-[1px] '> in Color Grading</p>
                        </div>

                        {/* <div className='flex items-center'>

                            <div className='w-full md:w-[70%] mx-auto'>
                                <div>
                                    <div class="border border-gray-600 overflow-y-auto h-[25rem] scrollbar-style-one px-2 md:px-6 py-4 rounded-md overscroll-y-contain	">

                                        <div className=''>
                                            <h2 className='text-[18px] md:text-[26px] font-semibold mb-6 text-white'>Three-Month Weekend DI Course Syllabus</h2>

                                            <div className='flex flex-col gap-y-4 md:gap-y-6'>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[20px] text-gray-200'> Module 1: Introduction to Digital Imaging (Weeks 1-2) </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Overview of Digital Imaging and Color Grading</li>
                                                        <li>Introduction to the Workflow of a DI Specialist</li>
                                                        <li>Understanding Color Theory and Its Application in Film</li>


                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Module 2: Color Correction Fundamentals (Weeks 3-4)</h3>

                                                    <ul className=' text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Basics of Color Correction</li>
                                                        <li>Tools and Software for Color Correction (DaVinci Resolve, Adobe Premiere Pro)</li>
                                                        <li>Hands-on Practice with Sample Footage</li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>   Module 3: Advanced Color Grading Techniques (Weeks 5-6)</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Techniques for Advanced Color Grading</li>
                                                        <li> Matching Shots for Continuity</li>
                                                        <li> Creating Mood and Atmosphere with Color</li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Module 4: Practical Color Grading Exercises (Weeks 7-8) </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Real-world Color Grading Scenarios </li>
                                                        <li> Working on Student Projects </li>
                                                        <li> Feedback and Improvement Sessions </li>


                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Module 5: Integrating Visual Effects (Weeks 9-10)</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Basics of Visual Effects Integration</li>
                                                        <li> Color Grading with VFX</li>
                                                        <li>Maintaining Consistency in VFX Shots </li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>Module 6: Final Project Preparation (Weeks 11-12) </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Developing Your Story for the Final Project </li>
                                                        <li>Shooting and Editing Your Film </li>
                                                        <li> Final Color Grading and Output</li>


                                                    </ul>
                                                </div>


                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>



                        </div> */}


                        <div className='flex justify-center items-center font-[poppins]'>

                            <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-40 w-full ' >

                                <div className='flex flex-col gap-y-8 '>


                                    <div className='flex flex-col gap-y-4 items-start'>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white  text-[16px]  md:text-[20px] '>Module 1: Introduction to Digital Imaging</h3>

                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Overview of Digital Imaging and Color Grading</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Introduction to the Workflow of a DI Specialist</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Understanding Color Theory and Its Application in Film</li>

                                                </ul>
                                            </div>

                                        </div>



                                    </div>


                                    <div className='flex flex-col gap-y-4 items-start'>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[16px]  md:text-[20px]'>Module 2: Color Correction Fundamentals</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Basics of Color Correction</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Tools and Software for Color Correction (DaVinci Resolve, Adobe Premiere Pro)</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Hands-on Practice with Sample Footage</li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-y-4 items-start'>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[16px]  md:text-[20px]'>Module 3: Advanced Color Grading Techniques</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Techniques for Advanced Color Grading  </li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Matching Shots for Continuity</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Creating Mood and Atmosphere with Color</li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                                <div className='flex flex-col gap-y-8'>

                                    <div className='flex flex-col gap-y-8 items-start'>


                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[16px]  md:text-[20px]'>Module 4: Practical Color Grading Exercises</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Real-world Color Grading Scenarios</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Working on Student Projects</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Feedback and Improvement Sessions</li>

                                                </ul>
                                            </div>

                                        </div>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[16px]  md:text-[20px] '>Module 5: Integrating Visual Effects </h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Basics of Visual Effects Integration</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Color Grading with VFX</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Maintaining Consistency in VFX Shots</li>

                                                </ul>
                                            </div>

                                        </div>


                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[16px]  md:text-[20px]'>Module 6: Final Project Preparation</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Developing Your Story for the Final Project</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Shooting and Editing Your Film</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><FaComputer className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Final Color Grading and Output</li>

                                                </ul>
                                            </div>

                                        </div>



                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className='flex justify-center items-center mt-8 md:mt-20 font-[poppins]'>
                            <a href="https://api.whatsapp.com/send?phone=9884683888" target="_blank" rel="noopener noreferrer" className="">
                                <button className='uppercase  hover:scale-105  group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500 text-[14px] md:text-[16px]'>Request Detailed Syllabus</button>
                            </a>
                        </div>

                    </div>
                </section>




                {/* ------------------ Mentors ------------------ */}

                <section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-white'>
                    <div className='w-full px-4 md:w-[80%] mx-auto font-kumbh'>

                        <div className='flex items-center justify-center mb-16'>
                            <h1 className='font-bold text-black text-[20px] md:text-[40px] text-center uppercase tracking-[2px]'>FilmMakers As Mentors</h1>
                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='grid grid-cols-1  gap-y-10 md:gap-y-16 gap-x-20 '>

                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center'>
                                        <img src={bebin} className='w-[80%] rounded-md object-cover' alt='mentor' title="Digital Imaging courses" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[28px] text-white tracking-[2px]'>R. Prasanna Venkatesh</h3>
                                            <span className='text-orange-500 text-[16px]'>Award-winning Photographer</span>
                                        </div> */}
                                        <div className=' mx-auto '>
                                            <p className='text-[13px] md:text-[14px] text-gray-800 text-center font-[roboto] mx-auto md:w-[70%]'>
                                                Antony Bebin is an accomplished Color Specialist with over 10 years of experience in DaVinci Resolve and Baselight 4.4.
                                                His expertise in digital imaging and color grading has earned him industry recognition for enhancing high-profile projects. Known for his
                                                leadership and collaboration skills, Antony consistently delivers exceptional results.
                                            </p>
                                        </div>

                                        {/* <div className='flex justify-center items-center font-[poppins] text-[12px] md:text-[14px] font-semibold'>
                                            <button className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-[#ff0000] px-6 md:px-8 font-medium text-neutral-200 duration-500">
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
                </section>


                {/* -------------- Our Mentors have Worked In ------------------------ */}

                <section className='bg-black overflow-hidden flex justify-center items-center pt-14 pb-10 '>

                    <div className='w-full mx-auto'>

                        <div className='flex justify-center items-center mb-8 md:mb-12'>
                            <h3 className='font-bold uppercase text-[20px] md:text-[28px] text-white'>Our Mentor's Work</h3>
                        </div>

                        <div>

                            <div className="slider-container">
                                <Slider {...settings} className="">

                                    <div className='px-2'>
                                        <div>
                                            <img src={bebinOne} className='w-full object-cover' alt='mentor work' title="Digital Imaging Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={bebinTwo} className='w-full object-cover' alt='mentor work' title="Digital Imaging Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={bebinThree} className='w-full object-cover' alt='mentor work' title="Digital Imaging Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={bebinFour} className='w-full object-cover' alt='mentor work' title="Digital Imaging Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={bebinFive} className='w-full object-cover' alt='mentor work' title="Digital Imaging Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={bebinSix} className='w-full object-cover' alt='mentor work' title="Digital Imaging Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={bebinSeven} className='w-full object-cover' alt='mentor work' title="Digital Imaging Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={bebinEight} className='w-full object-cover' alt='mentor work' title="Digital Imaging Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>



                                </Slider>
                            </div>

                        </div>
                    </div>
                </section>


                {/* ----------------------- who can apply -------------------------- */}

                {/* <section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-black'>
                    <div className='w-full px-4  md:w-[80%] mx-auto'>

                        <div className='flex justify-center items-center mb-8 md:mb-14'>
                            <h3 className='font-bold text-[20px] md:text-[35px] text-white '>Who can apply for the course? </h3>
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-y-8'>

                            <div className='w-full md:w-[40%] mx-auto'>

                                <div className='flex justify-center items-center'>
                                    <img src={who} className='w-[80%] object-cover rounded-md shadow-md drop-shadow-lg' alt="" />
                                </div>

                            </div>


                            <div className='w-full md:w-[60%] mx-auto  md:px-16'>
                                <div className='flex justify-center items-center w-full'>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-20 font-semibold w-full'>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <TbCreativeCommonsBy className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Film and Media Students</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <PiFilmSlateDuotone className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Professional Editors and Colorists</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <MdLeaderboard className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'>Photographers and Visual Artists</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>

                                                    <MdOutlineSystemSecurityUpdateGood className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px] ' > Technical Enthusiast</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <MdOutlineSyncProblem className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'>Passionate individuals</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <RiIndeterminateCircleLine className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'>Industry Professionals</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* ------------------------------ FAQ ----------------------- */}

                {/* <section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-[#1f2228]  font-[parta]'>
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
                                <div className='flex justify-center items-center  w-full'>
                                    <div className='w-full md:px-10'>
                                        <PhotographyFAQ />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* -------------------- start banner  ------------------ */}

                {/* <section className='pt-20 pb-20 bg-gray-950'>
                    <div className='w-[80%] mx-auto'>

                        <div className='flex justify-center items-center'>
                            <img src={orange} className='w-[80%] object-cover rounded-md drop-shadow-md shadow-md' alt="" />
                        </div>

                    </div>
                </section> */}



                {/* --------------------- how to appply  -------------------*/}
                <section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-gray-950'>

                    <div className='px-4 w-full md:w-[80%] mx-auto'>

                        <div>
                            <h3 className='text-white font-bold text-[20px] md:text-[30px] mb-3 md:mb-3 uppercase'>How to apply?</h3>

                            <div className='flex flex-col gap-y-2 text-[14px] text-gray-200'>

                                <p className='font-[roboto] text-[13px] md:text-[14px] font-semibold mb-2 md:mb-4'>To join Cinema Factory Academy:</p>
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

            </div>

        </>
    )
}

export default DI



