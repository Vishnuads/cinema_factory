import React from 'react'
import Slider from "react-slick";
import DirectionFAQ from '../../components/Direction_FAQ';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../text.css'

import { FaArrowRight } from "react-icons/fa6";


import frame from '../../images/course/photography/still.png'


import orange from '../../images/banner/orange.jpg'

import para from '../../images/mentors/pra.jpg'
import cj from '../../images/mentors/CJ_rajkumar.jpg'


import rajkumarOne from '../../images/poster/rajkumar/mv1.png'
import rajKumarTwo from '../../images/poster/rajkumar/mv2.png'
import rajkumarThree from '../../images/poster/rajkumar/mv3.png'
import rajkumarFour from '../../images/poster/rajkumar/mv4.png'
import rajkumarFive from '../../images/poster/rajkumar/mv5.png'
import rajkumarSix from '../../images/poster/rajkumar/mv6.png'

import prasannaOne from '../../images/poster/prasanna/mv1.png'
import prasannaTwo from '../../images/poster/prasanna/mv2.png'
import prasannaThree from '../../images/poster/prasanna/mv3.png'
import prasannaFour from '../../images/poster/prasanna/mv4.png'
import prasannaFive from '../../images/poster/prasanna/mv5.png'
import prasannaSix from '../../images/poster/prasanna/mv6.png'
import prasannaSeven from '../../images/poster/prasanna/mv7.png'
import prasannaEight from '../../images/poster/prasanna/mv8.png'
import prasannaNine from '../../images/poster/prasanna/mv9.png'
import prasannaTen from '../../images/poster/prasanna/mv10.png'


import { MdOutlinePhotoCamera } from "react-icons/md";


//icons
import { RiWhatsappLine } from "react-icons/ri";

import { TbCreativeCommonsBy } from "react-icons/tb";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { MdLeaderboard } from "react-icons/md";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { MdOutlineSyncProblem } from "react-icons/md";
import { RiIndeterminateCircleLine } from "react-icons/ri";

import iconOne from '../../images/course/photography/1.png'
import iconTwo from '../../images/course/photography/2.png'
import iconThree from '../../images/course/photography/3.png'
import iconFour from '../../images/course/photography/4.png'
import iconFive from '../../images/course/photography/5.png'
import iconSix from '../../images/course/photography/6.png'
import iconSeven from '../../images/course/photography/7.png'
import iconEight from '../../images/course/photography/8.png'



import PhotographyFAQ from '../../components/PhotographyFAQ';





const StillPhotography = () => {

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

                {/* <div className='  '>
                    <img src={banner} className=' blur-[2px] w-full fixed top-0 object-cover h-screen -z-30' alt="" />
                </div> */}

                <Helmet>
                    <title>Learn Photography Courses In India | Photography Institute India</title>
                    <meta
                        name="description"
                        content="Elevate your photography skills with our 3-month course. Learn from industry experts, gain hands-on experience, and develop a professional portfolio. Enroll today!"
                    />
                    <meta
                        name="keywords"
                        content="Learn Photography Courses | Photography certification Courses | Professional Photography courses | Portrait Photographer training | Wedding Photographer training  | Fashion Photographer training |   Professional Photography courses | Portrait Photographer training | Wedding Photographer training  | Fashion Photographer training  | Commercial training  | Photographer training  | Photojournalist training  | Event Photographer training  | Landscape Photographer training | Fine Art Photographer training | Professional Photography training | Best photography training | Photography Courses"
                    />
                    <meta name="author" content="Cinema Factory Academy" />
                    <meta charSet="utf-8" />
                    {/* Add other meta tags here if needed */}
                </Helmet>

                <section>
                    <div className=''>

                        <div>
                            <img src={frame} className='w-full object-cover' alt="main banner" title="Learn Photography Courses In India" loading="lazy" fetchpriority="auto" />
                        </div>

                    </div>
                </section>





                {/* -------------- Syllabus ----------------- */}

                <section className='border-t-4 border-orange-500 pt-10 pb-16 md:pt-20 md:pb-20 bg-gray-950 -mt-6'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex flex-col gap-y-2 justify-center items-center  mb-6 md:mb-16'>
                            <h3 className='font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase'>3 Month Course  </h3>
                            <p className='font-semibold text-[18px] md:text-[24px] text-[#ff0000]  font-[roboto] uppercase tracking-[1px] '> in Photography</p>
                        </div>



                        <div className='flex justify-center items-center font-[poppins]'>

                            <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-60 w-full ' >

                                <div className='flex flex-col gap-y-6 '>


                                    <div className='flex flex-col gap-y-4 items-start'>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 1</h3>

                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Fundamentals of Photography</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Portrait Photography</li>

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

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Modern Photography Techniques</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Photowalk</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Practice of Lighting Techniques</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Event Photography</li>

                                                </ul>
                                            </div>

                                        </div>



                                    </div>


                                </div>


                                <div className='flex flex-col gap-y-4'>

                                    <div className='flex flex-col gap-y-4 items-start'>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 3</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Street Photography</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Baby Photography</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Flash Photography</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Photojournalism</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Introduction to Cinematography</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><MdOutlinePhotoCamera className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Review and Final Project</li>

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

                <section className='pt-10 md:pt-20 pb-10 md:pb-20'>
                    <div className='w-full px-4 md:w-[80%] mx-auto font-kumbh'>

                        <div className='flex items-center justify-center mb-16'>
                            <h1 className='font-bold text-black text-[20px] md:text-[40px] text-center uppercase tracking-[2px]'>FilmMakers As Mentors</h1>
                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-16 gap-x-20 '>

                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center'>
                                        <img src={para} className='w-[80%] rounded-md object-cover' alt='mentor' title="Photography Institute India" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[28px] text-white tracking-[2px]'>R. Prasanna Venkatesh</h3>
                                            <span className='text-orange-500 text-[16px]'>Award-winning Photographer</span>
                                        </div> */}
                                        <div className=' mx-auto '>
                                            <p className='text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]'>
                                                HOD of our Photography Department, he boasts 23 years of expertise in people and advertising photography, serving as the official photographer for notable events and figures such as Hillary Clinton and Rolls Royce.                                            </p>
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


                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center'>
                                        <img src={cj} className='w-[80%] rounded-md object-cover' alt='mentor' title="Photography Institute India" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[28px] text-white tracking-[2px]'>CJ Rajkumar</h3>
                                            <span className='text-orange-500 text-[16px]'>Renowned Cinematographer</span>
                                        </div> */}
                                        <div className=' '>
                                            <p className=' text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]'>
                                                CJ Rajkumar mentor of Photography department, a renowned cinematographer, author of 12 books, writer of over 500 articles, and award-winning filmmaker.                                            </p>
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
                            <h3 className='font-bold uppercase text-[20px] md:text-[28px] text-white'>Mentor's Filmography</h3>
                        </div>

                        <div>

                            <div className="slider-container">
                                <Slider {...settings} className="">

                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaOne} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaTwo} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaThree} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaFour} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaFive} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaSix} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaSeven} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaEight} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaNine} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaTen} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>



                                    <div className='px-2'>
                                        <div>
                                            <img src={rajkumarOne} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajKumarTwo} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajkumarThree} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajkumarFour} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajkumarFive} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajkumarSix} className='w-full object-cover' alt='mentor work' title="Professional Photography courses" loading="lazy" fetchpriority="auto" />
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
                                                <h3 className='font-semibold text-[16px]'> Creative Thinker</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <PiFilmSlateDuotone className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Film Enthusiast</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <MdLeaderboard className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> A leader</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>

                                                    <MdOutlineSystemSecurityUpdateGood className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px] ' > Good Communicator</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <MdOutlineSyncProblem className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'>  Problem Solver</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <RiIndeterminateCircleLine className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Determined Person</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* ------------------------------ FAQ ----------------------- */}

                <section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-[#1f2228]  font-[parta]'>
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
                </section>


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

export default StillPhotography



