import React from 'react'
import Slider from "react-slick";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../text.css'

// import { FaArrowRight } from "react-icons/fa6";


import banner from '../../images/course/banner/pattern.jpg'
import frame from '../../images/course/cinemtography/cinematography.png'
import light from '../../images/course/cinemtography/camra_banner.png'

import who from '../../images/course/cinemtography/who.png'


//mentors
import manoj from '../../images/mentors/Manoj_Paramahamsa.jpg'
import madhu from '../../images/mentors/Madhu_ambat.jpg'
import cj_rajkumar from '../../images/mentors/CJ_rajkumar.jpg'
import ramesh_kuamr from '../../images/mentors/Rameshkumar.jpg'
import prasanna from '../../images/mentors/pra.jpg'


import orange from '../../images/banner/orange.jpg'

import posterOne from '../../images/poster/manoj/mv1.png'
import posterTwo from '../../images/poster/manoj/mv2.png'
import posterThree from '../../images/poster/manoj/mv3.png'
import posterFour from '../../images/poster/manoj/mv4.png'
import posterFive from '../../images/poster/manoj/mv5.png'
import posterSix from '../../images/poster/manoj/mv6.png'
import posterSeven from '../../images/poster/manoj/mv7.png'
import posterEight from '../../images/poster/manoj/mv8.png'

import madhuOne from '../../images/poster/madhu/mv1.png'
import madhuTwo from '../../images/poster/madhu/mv2.png'
import madhuThree from '../../images/poster/madhu/mv3.png'
import madhuFour from '../../images/poster/madhu/mv4.png'
import madhuFive from '../../images/poster/madhu/mv5.png'
import madhuSix from '../../images/poster/madhu/mv6.png'
import madhuSeven from '../../images/poster/madhu/mv7.png'
import madhuEight from '../../images/poster/madhu/mv8.png'
import madhuNine from '../../images/poster/madhu/mv9.png'
import madhuTen from '../../images/poster/madhu/mv10.png'
import madhuElven from '../../images/poster/madhu/mv11.png'
import madhuTwel from '../../images/poster/madhu/mv12.png'


import rajkumarOne from '../../images/poster/rajkumar/mv1.png'
import rajKumarTwo from '../../images/poster/rajkumar/mv2.png'
import rajkumarThree from '../../images/poster/rajkumar/mv3.png'
import rajkumarFour from '../../images/poster/rajkumar/mv4.png'
import rajkumarFive from '../../images/poster/rajkumar/mv5.png'
import rajkumarSix from '../../images/poster/rajkumar/mv6.png'

import rameshOne from '../../images/poster/ramesh/mv1.png'
import rameshTwo from '../../images/poster/ramesh/mv2.png'
import rameshThree from '../../images/poster/ramesh/mv3.png'
import rameshFour from '../../images/poster/ramesh/mv4.png'
import rameshFive from '../../images/poster/ramesh/mv5.png'

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



//icons
import { RiWhatsappLine } from "react-icons/ri";

import { GiFilmProjector } from "react-icons/gi";
import { TbDeviceVisionPro } from "react-icons/tb";
import { SiExpertsexchange } from "react-icons/si";
import { PiStudent } from "react-icons/pi";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { TbLayoutCollage } from "react-icons/tb";

import { VscDeviceCameraVideo } from "react-icons/vsc";

import { MdLeaderboard } from "react-icons/md";


import iconOne from '../../images/course/cinemtography/1.png'
import iconTwo from '../../images/course/cinemtography/2.png'
import iconThree from '../../images/course/cinemtography/3.png'
import iconFour from '../../images/course/cinemtography/4.png'
import iconFive from '../../images/course/cinemtography/5.png'
import iconSix from '../../images/course/cinemtography/6.png'
import iconSeven from '../../images/course/cinemtography/7.png'
import iconEight from '../../images/course/cinemtography/8.png'




import FAQ from '../../components/FAQ';
import CinematographyFAQ from '../../components/Cinematography_FAQ';



const Cinematography = () => {

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
                    <title>Cinematography Courses | Best Cinematography Institute In India!</title>
                    <meta
                        name="description"
                        content="Master cinematography with our 1-Year Diploma. Learn from experts, gain hands-on experience, and secure your career in film with 100% placement assistance."
                    />
                    <meta
                        name="keywords"
                        content="Cinematography Institute in India | Diploma in Cinematography | Cinematography Diploma Courses | Diploma in Cinematography Courses | Cinematography Courses In India | Best institute for cinematography | Cinematography Courses | Cinematography Training Institute | best Cinematography Training Institute | leading Cinematography Training Institute |  best Cinematography Institute | leading Cinematography Institute | Career in Cinematography| Jobs in Cinematography"
                    />
                    <meta name="author" content="Cinema Factory Academy" />
                    <meta charSet="utf-8" />
                    {/* Add other meta tags here if needed */}
                </Helmet>

                <div className='  '>
                    <img src={banner} className=' blur-[2px] w-full fixed top-0 object-cover h-screen -z-30' alt="banner" title="Diploma in Cinematography" loading="lazy" fetchpriority="auto" />
                </div>


                <section>
                    <div className=''>

                        <div>
                            <img src={frame} className='w-full object-cover' alt="banner" title="Diploma in Cinematography" loading="lazy" fetchpriority="auto" />
                        </div>

                    </div>
                </section>


                {/* -------------- course highligts ----------------- */}

                {/* <section className='bg-gray-950'>

                    <div className='relative'>

                        <div className='relative'>
                            <img src={light} className='w-full object-cover  h-screen md:h-auto' alt="" />
                            <div className='w-full backdrop-blur-sm bg-[#ff0000]/30 inset-0 absolute top-0'></div>
                        </div>

                        <div className='absolute w-full top-0'>

                            <div className='w-full px-4 md:w-[90%] mx-auto mt-10 md:mt-16'>

                                <div className='mb-8 flex flex-col items-center'>
                                    <h3 className='font-bold text-[20px] md:text-[40px] text-white text-center uppercase tracking-[2px]'>Course highlights </h3>
                                </div>

                                <div className='flex justify-center items-center md:mt-12'>

                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-14 gap-y-4 md:gap-y-14  text-[12px] md:text-[14px]'>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconOne} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'> Experience Our Newly Designed Syllabus!</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconTwo} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Rigging Camera and Lights on Cars! </h3>
                                            </div>
                                        </div>


                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconThree} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Excel in Elaborate Night Lighting Practices!</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconFour} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Strong Foundation in Composition Techniques!</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconFive} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Build Confidence with Digital Cameras</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconSix} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Encourage Creativity and Experimentation!</h3>
                                            </div>
                                        </div>


                                        <div className='hidden md:flex'>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconSeven} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'> Cover Over 300 Topics in Modern Cinematography!</h3>
                                            </div>
                                        </div>

                                        <div className='hidden md:flex'>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-fulll  rounded-md'>

                                                <div>
                                                    <img src={iconEight} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Participate in Exciting Shooting Visits!</h3>
                                            </div>
                                        </div>



                                    </div>

                                </div>

                               
                            </div>

                        </div>

                    </div>


                </section> */}

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

                                            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-16   gap-y-8 md:gap-y-14 mt-1  font-kumbh'>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconOne} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Cinematography Institute" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Experience Our Newly  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Designed Syllabus </h3>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconTwo} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Cinematography Institute" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Rigging Camera and </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Lights on Cars </h3>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconThree} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Cinematography Institute" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Excel in Elaborate  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Night Lighting Practices </h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconFour} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Cinematography Institute" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Strong Foundation in  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Composition Techniques</h3>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconFive} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Cinematography Institute" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>

                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Build Confidence with  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Digital Cameras</h3>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconSix} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Best Cinematography Institute" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Encourage Creativity  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>and Experimentation </h3>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconSeven} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Best Cinematography Institute" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Cover Over 300 Topics in </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Modern Cinematography  </h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconEight} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Best Cinematography Institute" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Participate in Exciting  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Shoot Visits</h3>

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

                <section className='border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950 '>
                    <div className='px-4 w-full md:w-[85%] mx-auto'>

                        <div className='flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16'>
                            <h3 className='font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase'>1 Year Diploma </h3>
                            <p className='font-semibold text-[18px] md:text-[24px] text-[#ff0000]  font-[roboto] uppercase tracking-[1px] '> in Cinematography</p>
                        </div>

                        {/* <div className='flex flex-col md:flex-row items-center gap-y-8'>

                            <div className=' w-full md:w-[50%] md:px-5 mx-auto'>
                                <div>
                                    <div class="border border-gray-600 overflow-y-auto h-[25rem] scrollbar-style-one px-2 md:px-6 py-4 rounded-md overscroll-y-contain	">

                                        <div className=''>
                                            <h2 className='text-[18px] md:text-[26px] font-semibold mb-6 text-white'>Months 1: History of Cinema and Film Appreciation</h2>

                                            <div className='flex flex-col gap-y-4 md:gap-y-6'>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 1-2: Introduction to History of Cinema </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Overview of the course structure and objectives</li>
                                                        <li>Evolution of cinema from its origins to modern-day</li>
                                                        <li>Key movements, genres, and filmmakers</li>
                                                        <li>Impact of cinema on society and culture</li>
                                                        <li>Attraction to Cinema: Exploring what draws audiences to the silver screen.</li>
                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Photography as introduction</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Understanding image formation</li>
                                                        <li>Types of photography</li>
                                                        <li>Visual medium as art and commerce</li>
                                                        <li>Touch and feel of camera and other equipments</li>
                                                        <li>How to read a film</li>
                                                        <li>Introduction to art, paintings</li>
                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 3-4: Film Appreciation</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>  Understanding cinematic language: mise-en-scène, editing, sound, etc.</li>
                                                        <li>Analysis of iconic films across different eras and genres</li>
                                                        <li>Appreciation of cinematography, storytelling techniques, and thematic elements</li>
                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 5-6: Introduction to Photography  </h3>

                                                    <ul className=' text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Brief recap of History of Cinema and Film Appreciation </li>
                                                        <li>Image formation  pinhole theory</li>
                                                        <li>Image Sensor</li>
                                                        <li>Visible spectrum of Light</li>
                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 7-8: Camera Controls and Settings </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Understanding different types of cameras and their features</li>
                                                        <li> Exposure triangle (aperture, shutter speed, ISO)</li>
                                                        <li> White balance and color temperature</li>
                                                        <li> Composition techniques</li>
                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 9-12: Introduction to Cinematography  </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Persistence of vision </li>
                                                        <li> Motion Picture Film</li>
                                                        <li> Film Formats & Sensor</li>
                                                        <li>Cinematic language and storytelling</li>
                                                        <li>Introduction to Shots/scenes/sequences </li>
                                                        <li>Understanding aspect ratios</li>
                                                        <li>Film Appreciation- Genre</li>
                                                        <li>Screenplay Structures </li>
                                                    </ul>

                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 13-14: Introduction to Lens </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>  Basic Optic Principles </li>
                                                        <li>  Image Circle </li>
                                                        <li>  Types of Lenses/ Characteristics </li>
                                                        <li>  Focus Principles  </li>
                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 15-16: Camera Equipment and Accessories </h3>

                                                    <ul className=' text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Types of cameras for cinematography </li>
                                                        <li> Lenses, filters, and their effects </li>
                                                        <li> Camera movements and framing </li>
                                                        <li> Tripods, gimbals, and stabilization techniques </li>
                                                        <li> Mobile Cinematography </li>
                                                        <li> File Formats / Video Compression </li>
                                                        <li>  Image Circle </li>
                                                        <li>  Types of Lenses/ Characteristics </li>
                                                        <li>  Focus Principles  </li>
                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 17-20: Lighting and Composition Techniques </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Characteristics of light </li>
                                                        <li>Types of Light/Lamp/fixtures </li>
                                                        <li>Three-point lighting/ Rembrandt, Loop, Split, Butterfly Lighting techniques </li>
                                                        <li>Short key/Broad key / Lighting Ratios </li>
                                                        <li>Color temperature and gels </li>
                                                        <li> Practical lighting setups</li>
                                                        <li> Framing and blocking</li>
                                                        <li> 180 degree rule / Screen Direction</li>
                                                        <li>Establishing shots, close-ups, and more </li>
                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 21-24: Story and Screenplay Writing, Direction Basics </h3>

                                                    <ul className=' text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Elements of screenplay writing </li>
                                                        <li>Understanding character development and plot structure </li>
                                                        <li> Basics of direction: framing, blocking, working with actors</li>
                                                    </ul>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div className=' w-full md:w-[50%] md:px-5 mx-auto'>

                                <div>
                                    <div class="border border-gray-600 overflow-y-auto h-[25rem] scrollbar-style-one px-2 md:px-6 py-4 rounded-md overscroll-y-contain	">

                                        <div className='flex flex-col gap-y-4 md:gap-y-6'>

                                            <div className='flex flex-col gap-y-2'>
                                                <h3 className='font-semibold  text-[18px] md:text-[26px] text-white'> Months 7-9: Advanced Cinematography and Pre-production for Web Series  </h3>
                                                <h3 className='font-semibold text-[16px] md:text-[20px] text-white mt-3'> Week 25-26: Cinematography Post Production  </h3>

                                                <ul className=' text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-2 text-gray-400 mt-4'>
                                                    <li> Green Matte</li>
                                                    <li>Digital Imaging / SDR / HDR/Color Space </li>
                                                    <li>Artificial intelligence in Cinematography </li>
                                                </ul>
                                            </div>

                                            <div className='flex flex-col gap-y-2'>
                                                <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>   Week 27-28: Motion and Editing Techniques </h3>

                                                <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                    <li> Understanding frame rate and shutter speed  Post controls </li>
                                                    <li>Basic video editing principles </li>
                                                    <li> Transitions and continuity editing</li>
                                                </ul>

                                            </div>


                                            <div className='flex flex-col gap-y-2'>
                                                <h3 className='font-semibold text-[20px] text-gray-200'>   Week 29-32: Pre-production for Web Series Production </h3>

                                                <ul className=' text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                    <li> Concept development and scriptwriting for a web series </li>
                                                    <li>Casting, location scouting, and production planning </li>
                                                    <li>Budgeting and scheduling </li>
                                                    <li> Introduction to episodic storytelling and multi-camera setups</li>

                                                </ul>
                                            </div>


                                            <div className='flex flex-col gap-y-2'>
                                                <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>   Week 33-36: Industry Visits and Web Series Production </h3>

                                                <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                    <li> Visits to production studios, post-production houses, and film sets </li>
                                                    <li>Students work on producing a web series from pre-production to completion, including shooting, editing, and post-production</li>

                                                </ul>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div> */}


                        <div className='flex justify-center items-center font-[poppins]'>

                            <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-60 w-full'>

                                <div className='flex flex-col gap-y-5 items-start'>

                                    <div>
                                        <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Semester 1</h3>
                                    </div>

                                    <div>
                                        <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span> History of Cinema</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Introduction to History of Cinema</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Photography as an introduction </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Film Appreciation</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Introduction to Cinematography</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Introduction to Lenses </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Camera Equipment and Accessories </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Lighting and Composition Techniques</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Story and Screenplay Writing, Direction Basics </li>

                                        </ul>
                                    </div>

                                </div>


                                <div className='flex flex-col gap-y-5 items-start'>

                                    <div>
                                        <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Semester 2</h3>
                                    </div>

                                    <div>
                                        <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Advanced Cinematography </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Pre-production for Web Series</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Cinematography Post Production                                            </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Motion and Editing Techniques</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Pre-production for Web Series Production</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><VscDeviceCameraVideo className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Industry Visits and Web Series Production </li>

                                        </ul>
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

                        <div className='flex items-center justify-center mb-6 md:mb-16'>
                            <h1 className='font-bold text-black text-[20px] md:text-[40px] text-center uppercase tracking-[2px]'>FilmMakers As Mentors</h1>
                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='grid grid-cols-1 md:grid-cols-2  gap-y-10 md:gap-y-16 gap-x-20 '>

                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center'>
                                        <img src={manoj} className=' w-[80%] rounded-md object-cover' alt="mentor image" title="Best Cinematography mentor" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[20px] md:text-[28px] text-white md:tracking-[2px]'>Manoj Paramahamsa</h3>
                                            <span className='text-orange-500 text-[14px] md:text-[16px]'>Cinematography</span>
                                        </div> */}
                                        <div className=' mx-auto '>
                                            <p className='text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]'>
                                                Manoj Paramahamsa, a visionary cinematographer, is known for his innovative use of color and technology, pushing cinematic boundaries with films like 'Eeram,' 'Vinnaithaandi Varuvaayaa,' and the IMAX release 'Leo.'                                            </p>
                                        </div>

                                        {/* <div className='flex justify-center items-center font-[poppins] text-[12px] md:text-[14px] font-semibold'>
                                            <button className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-[#ff0000]  px-6 md:px-8 font-medium text-neutral-200 duration-500">
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
                                        <img src={madhu} className='w-[80%] rounded-md object-cover' alt="mentor image" title="Best Cinematography mentor" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[20px] md:text-[28px] text-white tracking-[2px]'>Madhu Ambat</h3>
                                            <span className='text-orange-500 text-[12px] md:text-[16px]'>Cinematography</span>
                                        </div> */}
                                        <div className=' '>
                                            <p className=' text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]'>
                                                A top Asian cinematographer, he has worked in over 250 films, won three National Awards, and collaborated with Manoj Night Shyamalan. His film Anjali with Mani Ratnam introduced low-key lighting and go motion to India.                                            </p>
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
                                        <img src={cj_rajkumar} className='w-[80%] rounded-md object-cover' alt="mentor image" title="Best Cinematography mentor" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[28px] text-white tracking-[2px]'>CJ Rajkumar</h3>
                                            <span className='text-orange-500 text-[16px]'>Cinematography</span>
                                        </div> */}
                                        <div className=' '>
                                            <p className='text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]'>
                                                HOD of our Cinematography Department, is a renowned cinematographer, author of 12 books, writer of over 500 articles, and an award-winning filmmaker.
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

                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center'>
                                        <img src={ramesh_kuamr} className='w-[80%] rounded-md object-cover' alt="mentor image" title="Best Cinematography mentor" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[28px] text-white tracking-[2px]'>R Rameshkumar</h3>
                                            <span className='text-orange-500 text-[16px]'>Cinematography</span>
                                        </div> */}
                                        <div className=''>
                                            <p className='text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]'>
                                                Mentor of our Cinematography Department, revolutionized Tamil cinema with 'Oomai Vizhigal' and pioneered the integration of high-quality film education and innovative advertising.
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



                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center'>
                                        <img src={prasanna} className='w-[80%] rounded-md object-cover' alt="mentor image" title="Best Cinematography mentor" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[28px] text-white tracking-[2px]'> Prasanna Venkatesh  </h3>
                                            <span className='text-orange-500 text-[16px]'>Cinematography</span>
                                        </div> */}
                                        <div className=''>
                                            <p className='text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]'>
                                                Mentor of our Cinematography Department, boasts 23 years of expertise in people and advertising photography, serving as the official photographer for notable events and figures such as Hillary Clinton and Rolls Royce.
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

                        <div className='flex justify-center items-center mb-12'>
                            <h3 className='font-bold uppercase text-[28px] text-white'>Mentor's Filmography</h3>
                        </div>

                        <div>

                            <div className="slider-container">
                                <Slider {...settings} className="">

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterOne} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterTwo} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterThree} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterFour} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterFive} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterSix} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterSeven} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterEight} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>


                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuOne} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuTwo} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuThree} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuFour} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuFive} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuSix} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuSeven} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuEight} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuNine} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuTen} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuElven} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={madhuTwel} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>



                                    <div className='px-2'>
                                        <div>
                                            <img src={rajkumarOne} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajKumarTwo} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajkumarThree} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajkumarFour} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajkumarFive} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajkumarSix} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>


                                    <div className='px-2'>
                                        <div>
                                            <img src={rameshOne} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rameshTwo} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rameshThree} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rameshFour} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rameshFive} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>



                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaOne} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaTwo} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaThree} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaFour} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaFive} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaSix} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaSeven} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaEight} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaNine} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={prasannaTen} className='w-full object-cover' alt="mentor works" title="Cinematography Courses" loading="lazy" fetchpriority="auto" />
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
                            <h3 className='font-bold text-[20px] text-center md:text-[35px] text-white '>Who can apply for the course? </h3>
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-y-8
                        '>

                            <div className='w-full md:w-[40%] mx-auto'>

                                <div className='flex justify-center items-center'>
                                    <img src={who} className='w-[90%] object-cover rounded-md shadow-md drop-shadow-lg' alt="" />
                                </div>

                            </div>

                            <div className=' w-full md:w-[60%] mx-auto md:px-16'>
                                <div className='flex justify-center items-center w-full'>

                                    <div className='grid grid-cols-1  md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-20 font-semibold w-full'>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <GiFilmProjector className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Aspiring Filmmakers</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <TbDeviceVisionPro className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Creative Visionaries </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <SiExpertsexchange className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Technical Experts</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>

                                                    <PiStudent className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px] ' > Lifelong Learners</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <HiMiniSpeakerWave className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Story Enthusiasts</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <TbLayoutCollage className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Collaborative Partners</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* ------------------------------ FAQ ----------------------- */}

                <section className=' pt-10 md:pt-20 pb-10 md:pb-20 bg-[#1f2228]  font-[parta]'>
                    <div className=' w-full px-4 md:w-[80%] mx-auto'>


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
                                        <CinematographyFAQ />
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

export default Cinematography



