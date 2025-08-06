import React from 'react'
import Slider from "react-slick";
import { Helmet } from 'react-helmet-async';
import DirectionFAQ from '../../components/Direction_FAQ';
import { Link } from 'react-router-dom';
import '../text.css'

import { FaArrowRight } from "react-icons/fa6";



import frame from '../../images/course/direction/Direction_banner.png'
import stanley from '../../images/mentors/ss_stanly.jpg'
import ara from '../../images/mentors/Aranthai_maniyan.jpg'
import kumar from '../../images/mentors/Manoj_Kumar.jpg'
import rajdeep from '../../images/mentors/a_rajdeep.jpg'
import psvinoth from '../../images/mentors/ps_vinoth_raj.png'




import posterOne from '../../images/poster/rajdeep/1.jpg'
import posterTwo from '../../images/poster/rajdeep/2.jpg'

import posterThree from '../../images/poster/vinothraj/1.jpg'
import posterFour from '../../images/poster/vinothraj/2.jpg'







//icons
import { RiWhatsappLine } from "react-icons/ri";

import { TbCreativeCommonsBy } from "react-icons/tb";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { MdLeaderboard } from "react-icons/md";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { MdOutlineSyncProblem } from "react-icons/md";
import { RiIndeterminateCircleLine } from "react-icons/ri";

import iconOne from '../../images/course/direction/001-martial-arts-couple-fight.png'
import iconTwo from '../../images/course/direction/002-cinema.png'
import iconThree from '../../images/course/direction/003-video.png'
import iconFour from '../../images/course/direction/004-web-design.png'
import iconFive from '../../images/course/direction/005-movie.png'
import iconSix from '../../images/course/direction/006-audio.png'
import iconSeven from '../../images/course/direction/007-spotlights.png'
import iconEight from '../../images/course/direction/008-artificial-intelligence.png'

import { PiFilmSlateLight } from "react-icons/pi";




const Direction = () => {

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
                    <title>Top Direction & Screenplay Courses | Learn Direction Courses</title>
                    <meta
                        name="description"
                        content="Master the art of direction and screenplay at Cinema Factory Academy. Learn from industry experts with hands-on training and 100% placement assistance. Join now"
                    />
                    <meta
                        name="keywords"
                        content="Learn Direction courses | Direction Training Institute | Direction courses | Direction courses In India | Direction Institute In India | Film direction classes | Film Director courses | Film Director jobs | Assistant Director courses (AD) | Assistant Director (AD) jobs | Degree in Direction courses | Diploma in Direction course | Degree in film making courses | Film making certification courses | Filmmaking masterclasses | Diploma in fim making courses | Film making course fees | Career in film making | Learn film making Online | Direction Jobs | Direction salary"
                    />
                    <meta name="author" content="Cinema Factory Academy" />
                    <meta charSet="utf-8" />
                    {/* Add other meta tags here if needed */}
                </Helmet>

                {/* <div className='  '>
                    <img src={banner} className=' blur-[2px] w-full fixed top-0 object-cover h-screen -z-30' alt="" />
                </div> */}


                <section>
                    <div className=''>

                        <div>
                            <img src={frame} className='w-full object-cover' alt="banner" title="Best Direction Institute In India" loading="lazy" fetchpriority="auto" />
                        </div>

                    </div>
                </section>


                {/* -------------- course highligts ----------------- */}

                {/* <section className='bg-gray-950'>

                    <div className='relative'>

                        <div className='relative'>
                            <img src={light} className='w-full object-cover h-screen md:h-auto' alt="" />
                            <div className='w-full backdrop-blur-sm bg-[#ffff00]/15 inset-0 absolute top-0'></div>
                        </div>

                        <div className='absolute w-full top-0'>

                            <div className=' w-full px-4 md:w-[90%] mx-auto mt-10 md:mt-16'>

                                <div className='mb-8 flex flex-col items-center'>
                                    <h3 className='font-bold text-[20px] md:text-[40px] text-white text-center uppercase tracking-[2px]'>Course highlights </h3>
                                </div>

                                <div className='flex justify-center items-center md:mt-12'>

                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-14 gap-y-4 md:gap-y-14  text-[12px] md:text-[14px]'>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full  rounded-md'>

                                                <div>
                                                    <img src={iconOne} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Film complex action scenes</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full  rounded-md'>

                                                <div>
                                                    <img src={iconTwo} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Master the language of cinema</h3>
                                            </div>
                                        </div>


                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconThree} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Produce captivating music videos</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconFour} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Use VFX in film direction</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconFive} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Train in writing various screenplay methods</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconSix} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Integrate AI in screenplay and direction</h3>
                                            </div>
                                        </div>


                                        <div className='hidden md:flex'>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md'>

                                                <div>
                                                    <img src={iconSeven} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Perfect the art of staging characters</h3>
                                            </div>
                                        </div>

                                        <div className='hidden md:flex'>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full rounded-md '>

                                                <div>
                                                    <img src={iconEight} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Learn techniques for filming dialogues</h3>
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

                            {/* <div className='relative overflow-hidden'>
                                <video className='w-full object-cover h-screen md:h-auto' autoPlay muted loop playsInline >
                                    <source src={web} type="video/mp4" className='h-screen ' />
                                </video>
                                <div className='absolute top-0 backdrop-blur-sm bg-yellow-300/10 inset-0'></div>
                            </div> */}


                            {/* <div className='absolute w-full top-8 md:top-4' > */}

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
                                                            <img src={iconOne} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Top Direction & Screenplay Courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Film complex  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>action scenes </h3>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconTwo} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Top Direction & Screenplay Courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Master the </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>language of cinema</h3>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconThree} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Top Direction & Screenplay Courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Produce captivating </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> music videos </h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconFour} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Top Direction & Screenplay Courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Use VFX in </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>film direction</h3>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconEight} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Top Direction & Screenplay Courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>

                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Integrate AI in </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> screenplay and direction</h3>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconSix} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Top Direction & Screenplay Courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Learn various  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>screenplay methods</h3>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconSeven} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Top Direction & Screenplay Courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Perfect the art of  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> staging characters</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconFive} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Top Direction & Screenplay Courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Learn techniques for </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> filming dialogues</h3>

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
                    <div className=' px-4 w-full md:w-[85%] mx-auto'>

                        <div className='flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16'>
                            <h3 className='font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase'>1 Year Diploma  </h3>
                            <p className='font-semibold text-[18px] md:text-[24px] text-[#ff0000] font-[roboto] uppercase tracking-[1px] '> in Direction & Screenplay</p>
                        </div>

                        {/* <div className='flex flex-col md:flex-row items-center gap-y-8'>

                            <div className='w-full md:w-[50%] md:px-5 mx-auto'>
                                <div>
                                    <div class="border border-gray-600 overflow-y-auto h-[25rem] scrollbar-style-one px-2 md:px-6 py-4 rounded-md overscroll-y-contain	">

                                        <div className=''>
                                            <h2 className=' text-[18px] md:text-[26px] font-semibold mb-6 text-white'>Semester 1: Understanding the Basics</h2>

                                            <div className='flex flex-col gap-y-4 md:gap-y-6'>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Understanding Cinema: What is cinema?</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>The Language of Cinema: Visual storytelling, mise-en-scène, and cinematography.</li>
                                                        <li>Attraction to Cinema: Exploring what draws audiences to the silver screen.</li>
                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Developing Story Ideas</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Knowledge of the Story World: Building believable and immersive worlds.</li>
                                                        <li>Developing Thoughts and Ideas: From brainstorming to initial concepts.</li>
                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>   Themes and Story Ideas</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Identifying Themes: Recognizing central themes in storytelling.</li>
                                                        <li> Developing Story Ideas: Crafting compelling narratives.</li>
                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Grammar of Cinema  </h3>

                                                    <ul className='tet-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Understanding the Grammar of Cinema:Shots, cuts, and transitions. </li>
                                                        <li>Practical Exercises: Applying cinematic grammar in short exercises.</li>
                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Direction and Production </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> What is Direction: Roles and responsibilities of a director.</li>
                                                        <li>   Directorial Techniques: From pre-production to post-production.</li>
                                                        <li> Understanding Production: How production houses and the film industry operate.</li>
                                                        <li>    The Production Process: From development to distribution.</li>
                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Types of Films, Target Audiences, and Story Structures </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>    Film Genres: Exploring different types of films.</li>
                                                        <li>  Target Audiences: Identifying and understanding your audience.</li>
                                                        <li>   The Seven Stories: Universal story structures.</li>
                                                        <li>Types of Conflicts: Crafting compelling conflicts.</li>
                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Genres, Plots, and Central Themes in Cinema  </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>  Genres of Cinema:Detailed study of various film genres. </li>
                                                        <li>  Plot Development:Creating engaging and coherent plots.</li>
                                                        <li> Top 10 Themes: Exploring recurring themes in cinema. </li>
                                                        <li> Thematic Depth:Adding layers to your narrative. </li>
                                                    </ul>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div className='w-full md:w-[50%] md:px-5 mx-auto'>

                                <div>
                                    <div class="border border-gray-600 overflow-y-auto h-[25rem] scrollbar-style-one px-6 py-4 rounded-md overscroll-y-contain	">

                                        <div className='flex flex-col gap-y-6'>

                                            <div className='flex flex-col gap-y-2'>
                                                <h3 className='font-semibold text-[16px] md:text-[26px] text-white'> Semester 2: Web Series Production, AI integration and Advanced Topics  </h3>

                                                <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-2 md:gap-y-3 text-gray-400 mt-4'>
                                                    <li> Web Series Production and Advanced Storytelling </li>
                                                    <li> Web Series Production:Students will write, direct, and produce a web series. </li>
                                                    <li> Hands-on Shooting: Each student takes on various roles in production.</li>
                                                    <li> Crafting Beginnings:Hooking the audience from the start.</li>
                                                    <li> Creating Endings:Leaving a lasting impact.</li>
                                                    <li> Creating Interval Blocks:Structuring your story with intervals.</li>
                                                    <li>Different Climax Sequences:Crafting memorable and powerful climaxes.</li>
                                                    <li> Learning Cinematography:Techniques and tools.</li>
                                                    <li>Editing:The art of storytelling in post-production.</li>
                                                    <li>VFX:Enhancing visuals with special effects.</li>
                                                </ul>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div> */}


                        <div className='flex justify-center items-center font-[poppins]'>

                            <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-60'>

                                <div className='flex flex-col gap-y-5 items-start'>

                                    <div>
                                        <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Semester 1</h3>
                                    </div>

                                    <div>
                                        <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Understanding Cinema: What is cinema? </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Developing Story Ideas & Themes</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Grammar of Cinema</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Direction and Production</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Types of Films, Target Audiences, and Story Structures </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Genres, Plots, and Central Themes in Cinema </li>

                                        </ul>
                                    </div>

                                </div>


                                <div className='flex flex-col gap-y-5 items-start'>

                                    <div>
                                        <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Semester 2</h3>
                                    </div>

                                    <div>
                                        <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Web Series Production </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Students will write, direct, and produce a web series.</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Hands-on Shooting : Each student takes on various roles in production.</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span>AI integration for screenplay </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Crafting Beginnings : Hooking the audience from the start. </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Creating Endings : Leaving a lasting impact. </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Creating Interval Blocks : Structuring your story with intervals.</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Different Climax Sequences : Crafting memorable and powerful climaxes. </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Learning Cinematography : Techniques and tools.    </li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Editing : The art of storytelling in post-production.</li>
                                            <li className='flex items-center gap-x-3 md:gap-x-5'> <span><PiFilmSlateDuotone className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Enhancing visuals with visual effects. </li>

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

                <section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-white '>
                    <div className='px-4 w-full md:w-[80%] mx-auto font-kumbh'>

                        <div className='flex items-center justify-center mb-6 md:mb-10'>
                            <h2 className='font-bold text-black text-[20px] md:text-[40px] text-center uppercase md:tracking-[2px]'>FilmMaker As Mentor</h2>
                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='grid grid-cols-1 md:grid-cols-2  gap-y-10 md:gap-y-16 gap-x-20  '>

                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center '>
                                        <img src={ara} className='w-[80%] rounded-md object-cover' alt="mentor" title="Learn Direction Courses" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>

                                        <div className=' w-full md:w-[70%] mx-auto '>
                                            <p className=' text-[13px] md:text-[14px] text-gray-900 text-center'>
                                                Aranthai Maniyan is a distinguished filmmaker, critic, and scholar with significant contributions to Tamil cinema and literature. He has directed Shivaji Ganesan and authored 35 books, with training from the Film and Television Institute of India.
                                            </p>
                                        </div>

                                        {/* <div className='flex justify-center items-center font-[poppins]  font-semibold text-[14px] md:text-[16px]'>
                                            <button className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-[#ff0000] px-8 md:px-12 font-medium text-neutral-200 duration-500">
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

                                {/* <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center '>
                                        <img src={stanley} className='w-[80%] rounded-md object-cover' alt="mentor" title="Learn Direction Courses" loading="lazy" fetchpriority="auto"  />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>

                                        <div className=' w-full md:w-[70%] mx-auto '>
                                            <p className=' text-[12px] md:text-[14px] text-gray-900 text-center'>
                                                A versatile filmmaker and actor, renowned for directing films like "April Maadhathil" and "Lockdown Nights," and for his portrayal of C. N. Annadurai in "Periyar," he is an honorary lifetime member of the Film Directors Association of Malaysia.                                            </p>
                                        </div>

                                        <div className='flex justify-center items-center font-[poppins]  font-semibold text-[14px] md:text-[16px]'>
                                            <button className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-[#ff0000] px-6 md:px-10 font-medium text-neutral-200 duration-500">
                                                <div className="uppercase translate-x-0 opacity-100 transition group-hover:translate-x-[-150%] group-hover:opacity-0 font-semibold font-[poppins] ">
                                                    Explore More
                                                </div>
                                                <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                                                    <FaArrowRight className='font-semibold text-[18px] text-white' />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div> */}

                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center '>
                                        <img src={psvinoth} className='w-[80%] rounded-md object-cover' alt="mentor" title="Learn Direction Courses" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>

                                        <div className=' w-full md:w-[70%] mx-auto '>
                                            <p className=' text-[13px] md:text-[14px] text-gray-900 text-center'>
                                                P.S. Vinothraj's debut film Pebbles (Koozhangal) has won numerous prestigious awards, including the
                                                Tiger Award at the International Film Festival Rotterdam and the Best Director Award at the Singapore
                                                International Film Festival, showcasing his extraordinary talent and global impact as a filmmaker.
                                            </p>
                                        </div>

                                        {/* <div className='flex justify-center items-center font-[poppins]  font-semibold text-[14px] md:text-[16px]'>
                                            <button className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-[#ff0000] px-6 md:px-10 font-medium text-neutral-200 duration-500">
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

                                    <div className='flex justify-center items-center '>
                                        <img src={rajdeep} className='w-[80%] rounded-md object-cover' alt="mentor" title="Learn Direction Courses" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>

                                        <div className=' w-full md:w-[70%] mx-auto '>
                                            <p className=' text-[13px] md:text-[14px] text-gray-900 text-center'>
                                                A. Raajdheep, a Double Gold Medalist and State Award Winner, is a master trainer in Screenplay & Direction.
                                                He served as Associate Director of Thani Oruvan and directed the acclaimed Asura Guru, earning industry recognition.
                                            </p>
                                        </div>

                                        {/* <div className='flex justify-center items-center font-[poppins]  font-semibold text-[14px] md:text-[16px]'>
                                            <button className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-[#ff0000] px-6 md:px-10 font-medium text-neutral-200 duration-500">
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


                                {/* <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center '>
                                        <img src={kumar} className='w-[80%] rounded-md object-cover' alt="mentor" title="Learn Direction Courses" loading="lazy" fetchpriority="auto"  />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>

                                        <div className=' w-full md:w-[70%] mx-auto '>
                                            <p className=' text-[12px] md:text-[14px] text-gray-900 text-center'>
                                                Manoj Kumar is a film professional with experience as an Assistant Director on Maayan and Associate Director for Roar of the Lion. He has worked on over 20 short films and co-wrote Aram Kootraagum.
                                            </p>
                                        </div>

                                        <div className='flex justify-center items-center font-[poppins]  font-semibold text-[14px] md:text-[16px]'>
                                            <button className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-[#ff0000] px-6 md:px-10 font-medium text-neutral-200 duration-500">
                                                <div className="uppercase translate-x-0 opacity-100 transition group-hover:translate-x-[-150%] group-hover:opacity-0 font-semibold font-[poppins] ">
                                                    Explore More
                                                </div>
                                                <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                                                    <FaArrowRight className='font-semibold text-[18px] text-white' />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div> */}



                            </div>
                        </div>
                    </div>
                </section>


                {/* -------------- Our Mentors have Worked In ------------------------ */}

                <section className='bg-black overflow-hidden flex justify-center items-center pt-8 md:pt-14  pb-6 md:pb-10 '>

                    <div className='w-full mx-auto'>

                        <div className='flex justify-center items-center  mb-8 md:mb-12'>
                            <h3 className='font-bold uppercase text-[20px] md:text-[28px] text-white'>Mentor's Filmography</h3>
                        </div>

                        <div>

                            <div className="slider-container">
                                <Slider {...settings} className="">

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterOne} className='w-full object-cover' alt="mentor work" title="Film Director courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterTwo} className='w-full object-cover' alt="mentor work" title="Film Director courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterThree} className='w-full object-cover' alt="mentor work" title="Film Director courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={posterFour} className='w-full object-cover' alt="mentor work" title="Film Director courses" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                </Slider>
                            </div>

                        </div>
                    </div>
                </section>


                {/* ----------------------- who can apply -------------------------- */}

                {/* <section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-black'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex justify-center items-center mb-8 md:mb-14'>
                            <h3 className='font-bold text-[20px] text-center md:text-[35px] text-white '>Who can apply for the course? </h3>
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-y-8' >

                            <div className=' w-full md:w-[40%] mx-auto'>

                                <div className='flex justify-center items-center'>
                                    <img src={who} className='w-full md:w-[90%] object-cover rounded-md shadow-md drop-shadow-lg' alt="" />
                                </div>

                            </div>

                            <div className='w-full md:w-[60%] mx-auto md:px-16'>
                                <div className='flex justify-center items-center w-full'>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-20 font-semibold w-full'>

                                        <div className='w-full'>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <TbCreativeCommonsBy className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Creative Thinker</h3>
                                            </div>
                                        </div>

                                        <div className='w-full'>
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

                <section className=' pt-8 md:pt-20 pb-10 md:pb-20 bg-[#1f2228]  font-[parta]'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>


                        <div className='flex flex-col gap-y-10 md:flex-row justify-center items-start'>

                            <div className='w-full md:w-[30%]'>

                                <div className=' px-2 md:px-6 flex flex-col gap-y-2 md:gap-y-12 items-center font-[poppins]'>
                                    <h1 className='font-bold text-[35px] md:text-[3.5rem] text-center flex flex-wrap items-center justify-center md:flex-col gap-x-3   md:gap-y-2 md:items-start text-white font-kumbh'>
                                        <span>Frequently</span>
                                        <span>Asked</span>
                                        <span className='text-[#ff0000]'>Question</span>
                                    </h1>

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
                                        <DirectionFAQ />
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

export default Direction



