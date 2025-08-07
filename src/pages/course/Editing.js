import React from 'react'
import Slider from "react-slick";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../text.css'

import { FaArrowRight } from "react-icons/fa6";

import banner from '../../images/course/banner/pattern.jpg'
import frame from '../../images/course/editing/Editing_Cover.png'
import light from '../../images/course/editing/lighting_banner.png'
import who from '../../images/course/editing/who.png'


//mentors
import raja from '../../images/mentors/Raja_mohhamed.jpg'


import orange from '../../images/banner/orange.jpg'


import rajaOne from '../../images/poster/raja/1.png'
import rajaTwo from '../../images/poster/raja/2.png'
import rajaThree from '../../images/poster/raja/3.png'
import rajaFour from '../../images/poster/raja/4.png'
import rajaFive from '../../images/poster/raja/5.png'
import rajaSix from '../../images/poster/raja/6.png'
import rajaSeven from '../../images/poster/raja/7.png'
import rajaEight from '../../images/poster/raja/8.png'
import rajaNine from '../../images/poster/raja/9.png'
import rajaTen from '../../images/poster/raja/10.png'



//icons
import { RiWhatsappLine } from "react-icons/ri";

import { MdNaturePeople } from "react-icons/md";
import { MdEditOff } from "react-icons/md";
import { FaHeadSideVirus } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineManageHistory } from "react-icons/md";



import { MdLeaderboard } from "react-icons/md";

import iconOne from '../../images/course/editing/1.png'
import iconTwo from '../../images/course/editing/2.png'
import iconThree from '../../images/course/editing/3.png'
import iconFour from '../../images/course/editing/4.png'
import iconFive from '../../images/course/editing/5.png'
import iconSix from '../../images/course/editing/6.png'
import iconSeven from '../../images/course/editing/7.png'
import iconEight from '../../images/course/editing/8.png'


import { GiFilmSpool } from "react-icons/gi";

import EditingFAQ from '../../components/EditingFAQ';



const Editing = () => {

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
                    <title>Top Film Editing Courses | Best Editing Institute In India</title>
                    <meta
                        name="description"
                        content="Master film editing with our 1-Year Diploma. Learn Avid, Final Cut Pro, and gain real-world experience through a 6-month internship. Start your editing career today"
                    />
                    <meta
                        name="keywords"
                        content="Editing Institute in India | Diploma in Editing | Editing Diploma Courses | Diploma in Editing Courses | Editing Courses In India | Best institute for Editing |Editing Courses | Editing Training Institute | best Editing Training Institute | leading Editing Training Institute |  best Editing Institute | leading Editing Institute | Career in Editing | Jobs in Editing | Editing Jobs | Film Editing In"
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
                            <img src={frame} className='w-full object-cover' alt="banner" title="Editing Diploma Courses" loading="lazy" fetchpriority="auto" />
                        </div>

                    </div>
                </section>


                {/* -------------- course highligts ----------------- */}

                <section className='bg-gray-950'>

                    {/* <div className='relative'>

                        <div className='relative'>
                            <img src={light} className='w-full object-cover h-screen md:h-auto' alt="" />
                            <div className='w-full backdrop-blur-sm bg-[#d8a375]/60 inset-0 absolute top-0'></div>
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
                                                <h3 className='text-white font-semibold text-center'> 6-month editing course. </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconTwo} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Web series project completion.</h3>
                                            </div>
                                        </div>


                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconThree} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'> 6-month internship experience</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconFour} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Advanced editing techniques mastery.</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconFive} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>VFX training to enhance.</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconSix} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Personalized editing style mentorship.</h3>
                                            </div>
                                        </div>


                                        <div className='hidden md:flex'>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconSeven} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'> Genre-specific training: songs, music.</h3>
                                            </div>
                                        </div>

                                        <div className='hidden md:flex'>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6  rounded-md'>

                                                <div>
                                                    <img src={iconEight} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'> Editing narrative, stunt sequences.</h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                
                            </div>

                        </div>

                    </div> */}

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

                                                <div className='grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-36   gap-y-8 md:gap-y-14 mt-1  font-kumbh'>


                                                    {/* <div>
                                                        <div className='flex flex-col  items-center gap-y-3'>

                                                            <div>
                                                                <img src={iconOne} className=' w-14 md:w-20 object-cover mb-2' alt="" />
                                                            </div>

                                                            <div className='flex flex-col items-center '>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>6-month   </h3>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>editing course. </h3>
                                                            </div>

                                                        </div>
                                                    </div> */}

                                                    <div>
                                                        <div className='flex flex-col  items-center gap-y-3'>

                                                            <div>
                                                                <img src={iconTwo} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Editing Institute In India" loading="lazy" fetchpriority="auto" />
                                                            </div>

                                                            <div className='flex flex-col items-center '>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Edit A  </h3>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Web Series</h3>

                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className='flex flex-col  items-center gap-y-3'>

                                                            <div>
                                                                <img src={iconThree} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Editing Institute In India" loading="lazy" fetchpriority="auto" />
                                                            </div>

                                                            <div className='flex flex-col items-center '>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>6-months</h3>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Internship Experience  </h3>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    {/* <div>
                                                        <div className='flex flex-col  items-center gap-y-3'>

                                                            <div>
                                                                <img src={iconFour} className=' w-14 md:w-20 object-cover mb-2' alt="" />
                                                            </div>

                                                            <div className='flex flex-col items-center '>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Advanced editing </h3>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>techniques mastery.</h3>

                                                            </div>

                                                        </div>
                                                    </div> */}


                                                    <div>
                                                        <div className='flex flex-col  items-center gap-y-3'>

                                                            <div>
                                                                <img src={iconFive} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Editing Institute In India" loading="lazy" fetchpriority="auto" />
                                                            </div>

                                                            <div className='flex flex-col items-center '>

                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Hands On  </h3>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>VFX Training</h3>

                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className='flex flex-col  items-center gap-y-3'>

                                                            <div>
                                                                <img src={iconSix} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Best Editing Institute In India" loading="lazy" fetchpriority="auto" />
                                                            </div>

                                                            <div className='flex flex-col items-center '>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>  One on One Editing  </h3>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Style Mentorship</h3>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex flex-col  items-center gap-y-3'>

                                                            <div>
                                                                <img src={iconSeven} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Best Editing Institute In India" loading="lazy" fetchpriority="auto" />
                                                            </div>

                                                            <div className='flex flex-col items-center '>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Genre-Specific Training </h3>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>(Songs & Music Videos)</h3>

                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex flex-col  items-center gap-y-3'>

                                                            <div>
                                                                <img src={iconEight} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Best Editing Institute In India" loading="lazy" fetchpriority="auto" />
                                                            </div>

                                                            <div className='flex flex-col items-center '>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Editing Narrative For </h3>
                                                                <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Stunt Sequences</h3>

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

                </section>



                {/* -------------- Syllabus ----------------- */}

                <section className='border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950 -mt-6'>
                    <div className=' w-full px-4 md:w-[85%] mx-auto'>

                        <div className='flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16'>
                            <h3 className='font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase'>1 Year Diploma  </h3>
                            <p className='font-semibold text-[18px] md:text-[24px] text-[#ff0000]  font-[roboto] uppercase tracking-[1px] '> in Editing</p>
                        </div>

                        {/* <div className='flex flex-col md:flex-row items-center gap-y-8'>

                            <div className='w-full md:w-[50%] md:px-5 mx-auto'>
                                <div>
                                    <div class="border border-gray-600 overflow-y-auto h-[25rem] scrollbar-style-one px-2 md:px-6 py-4 rounded-md overscroll-y-contain	">

                                        <div className=''>
                                            <h2 className=' text-[18px] md:text-[26px] font-semibold mb-6 text-white'>1 Month Sylllabus</h2>

                                            <div className='flex flex-col gap-y-4 md:gap-y-6'>

                                                <div className='flex flex-col gap-y-3'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Theory :</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-2 text-gray-400'>
                                                        <li>History of film editing, shot types, cuts, transitions, non-linear editing (Avid, FCP), editor's role, montage, juxtaposition, visual storytelling, 180-degree rule.</li>
                                                        <li> Practical (Avid 2024): Introduction, interface overview, keyboard shortcuts, native file formats, project and bin management, import types, editing techniques.</li>
                                                        <li> Practical (Final Cut Pro): Introduction (FCP 7, FCP 10.7), keyboard shortcuts, film workflow (library, events, project), import types, supported media formats, three-point and timeline editing.</li>
                                                        <li>  1st Month Assignments: Shot types, cuts, transitions, montages, post-production workflow chart, keyboard shortcut chart for Avid Media Composer 2024 and FCP 10.7.</li>
                                                    </ul>

                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> 2 Month Sylllabus</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-2 text-gray-400'>
                                                        <li>  Theory: Rule of 6 in Editing, PAL vs NTSC, principles (continuity, pacing, rhythm), frame rates, famous editing sequences, song editing (montage), assistant editor role.</li>
                                                        <li>   Practical in Avid: Basic tools, shortcuts, song rhythm marking, montage workflow, advertisement and promo editing, title tool.</li>
                                                        <li>   Practical in FCP 10.7: Basic tools, shortcuts, song rhythm marking, montage techniques, advertisement and promo workflow, title tool.</li>
                                                        <li>   2nd Month Assignments: Montage songs (2 in Avid, 1 in FCP), advertisement 24 version in both Avid and FCP workflows, movie appreciation submissions.</li>
                                                        <li>   Practical Test: Written and practical tests for Avid and FCP proficiency.</li>

                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  3 Month Sylllabus</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-2 text-gray-400'>
                                                        <li>   Theory: Case studies of emotionally impactful editing sequences, techniques for enhancing emotional impact, introduction to mise-en-scene, editing techniques for continuity and image dynamics, file formats, importance of sound, hardware for editing systems, camera-operator-editor relationship.</li>
                                                        <li>   Practical in Avid 2024: Introduction to shot and scene order, dialogue scene editing workflow, advanced tools and shortcuts, export types, basic transitions and effects, trailer and teaser workflow, special sound effects, audio ducking. </li>
                                                        <li>   Practical in FCP 10.7: Introduction to shot and scene order, dialogue scene editing workflow, advanced tools and shortcuts, export file formats, basic transitions and effects, trailer and teaser workflow, audio tools and techniques.</li>
                                                        <li>   3rd Month Assignments: Dialogue scene edits (2 in Avid and FCP), trailer and teaser cuts using selected movies (2 min trailer, 1 min teaser, 30 sec teaser in both Avid and FCP workflows), movie appreciation submissions.</li>
                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> 4 Month Sylllabus  </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-2 text-gray-400'>
                                                        <li>  Practical in Avid 2024: Choreographed stunt editing, advanced transitions and effects, choreographed song sync, editing techniques, re-link techniques. </li>
                                                        <li>  Practical in FCP 10.7: Choreographed stunt editing, advanced transitions and effects, choreographed song sync, auto sync, editing techniques, re-link techniques.</li>
                                                        <li>  4th Month Assignments: Choreographed stunt editing in Avid and FCP, choreographed song editing in Avid and FCP with workflow reference.</li>
                                                        <li>  Practical Test: Written and practical tests for Avid and FCP proficiency.</li>

                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  5 Month Sylllabus </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-2 text-gray-400'>
                                                        <li>    Practical in Avid 2024: Multi-cam editing, 3rd party transitions, green mate removal, full film workflow (student short film), reel separations, exporting to dubbing, SFX, DI, CG. </li>
                                                        <li>    Practical in FCP 10.7: Multi-cam editing, 3rd party transitions, green mate removal, full film workflow (student short film), reel separations, exporting to dubbing, SFX, DI, CG. </li>
                                                        <li>    5th Month Assignments: Multi-cam edited sequence in Avid and FCP, complete short film edited version, green mate removed sequence, sample outputs for dubbing, SFX, DI, and CG.</li>

                                                    </ul>
                                                </div>




                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>   6 Month Sylllabus  </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-2 text-gray-400'>
                                                        <li>   Practical in Avid 2024: Spot editing workflow, round-tripping to DaVinci Resolve, censor workflow, editor's role in Qube, relationship with post-production technicians, basic color correction.</li>
                                                        <li>   Practical in FCP 10.7: Spot editing workflow, round-tripping to DaVinci Resolve, censor workflow, basic color correction.</li>
                                                        <li>   6th Month Assignments: Multi-cam edited sequence in Avid and FCP, complete short film edited version, green mate removed sequence, sample outputs for dubbing, SFX, DI, and CG.</li>
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

                                        <div className='flex flex-col gap-y-6'>

                                            <div className='flex flex-col gap-y-2'>
                                                <h3 className='font-semibold text-[16px] md:text-[20px] text-white'> 7-12 Months Sylllabus  </h3>


                                                <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-2 text-gray-400 mt-4'>
                                                    <li> Additional Sylllabus: Basic conversion workflow in DaVinci Resolve, Premiere Pro basic intro and workflow, AI tools in Premiere Pro, basic color correction in DaVinci Resolve, AI tools in DaVinci Resolve, documentary editing styles.</li>
                                                    <li>Practical Test: Written and practical tests for Avid and FCP.</li>
                                                    <li>Final Submission: All projects and practical sections on 7 to 12 months for film editing course.</li>
                                                </ul>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div> */}

                        <div className='flex justify-center items-center font-[poppins]'>

                            <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-60'>

                                <div className='flex flex-col gap-y-4'>


                                    <div className='flex flex-col gap-y-4 items-start'>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 1</h3>
                                                <h3 className='font-bold text-white text-[14px]  md:text-[20px]'>Theory:</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>History of film editing </li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Shot types, cuts, transitions, non-linear editing (Avid, FCP)</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Editor's role, montage, juxtaposition</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Visual storytelling, 180-degree rule</li>

                                                </ul>
                                            </div>

                                        </div>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[14px]  md:text-[20px]'>Practicals:</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Avid: Introduction, interface overview, keyboard shortcuts, native file formats, project and bin management, import types, editing techniques. </li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Final Cut Pro: Introduction, keyboard shortcuts, film workflow (library, events, project), import types, supported media formats, three-point and timeline editing.                                                </li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Assignments: Shot types, cuts, transitions, montages, post-production workflow chart, keyboard shortcut chart for Avid Media Composer and FCP. </li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='flex flex-col gap-y-4 items-start'>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 2</h3>
                                                <h3 className='font-bold text-white text-[14px]  md:text-[20px]'>Theory:</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Rule of 6 in Editing, PAL vs NTSC, Principles (continuity, pacing, rhythm), Frame rates, Famous Editing Sequences, Song editing (montage), Assistant editor role.</li>

                                                </ul>
                                            </div>

                                        </div>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[14px]  md:text-[20px]'>Practicals:</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Avid: Basic tools, shortcuts, song rhythm marking, montage workflow, advertisement and promo editing, title tool. </li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>FCP: Basic tools, shortcuts, song rhythm marking, montage techniques, advertisement and promo workflow, title tool.                                                    </li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Assignments: Montage songs (2 in Avid, 1 in FCP), advertisement 24 version in both Avid and FCP workflows, movie appreciation submissions.</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Practical Test: Written and practical tests for Avid and FCP proficiency.                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='flex flex-col gap-y-4 items-start'>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 3</h3>
                                                <h3 className='font-bold text-white text-[14px]  md:text-[20px]'>Theory:</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Case studies of emotionally impactful editing sequences, techniques for enhancing emotional impact,</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Introduction to mise-en-scene, editing techniques for continuity and image dynamics, File formats, importance of sound, hardware for editing systems, Camera-operator-editor relationship.</li>

                                                </ul>
                                            </div>

                                        </div>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[14px]  md:text-[20px]'>Practicals:</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Avid: Introduction to shot and scene order, dialogue scene editing workflow, Advanced tools and shortcuts, export types, basic transitions and effects, Trailer and teaser workflow, special sound effects, audio ducking. </li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> FCP : Introduction to shot and scene order, dialogue scene editing workflow, advanced tools and shortcuts, export file formats, basic transitions and effects, trailer and teaser workflow, audio tools and techniques.</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Assignments: Dialogue scene edits (2 in Avid and FCP), trailer and teaser cuts using selected movies (2 min trailer, 1 min teaser, 30 sec teaser in both Avid and FCP workflows), movie appreciation submissions.</li>

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
                                                    <h3 className='font-bold text-white text-[14px]  md:text-[20px]'>Practicals:</h3>
                                                </div>

                                                <div>
                                                    <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Avid: Choreographed stunt editing, advanced transitions and effects, choreographed song sync, editing techniques, re-link techniques. </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>FCP: Choreographed stunt editing, advanced transitions and effects, choreographed song sync, auto sync, editing techniques, re-link techniques. </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Assignments: Choreographed stunt editing in Avid and FCP, choreographed song editing in Avid and FCP with workflow reference. </li>
                                                        <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Practical Test: Written and practical tests for Avid and FCP proficiency. </li>

                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 5</h3>
                                                <h3 className='font-bold text-white text-[14px]  md:text-[20px]'>Practicals:</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Avid: Choreographed stunt editing, advanced transitions and effects, choreographed song sync, editing techniques, re-link techniques. </li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> FCP: Choreographed stunt editing, advanced transitions and effects, choreographed song sync, auto sync, editing techniques, re-link techniques.</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Assignments: Choreographed stunt editing in Avid and FCP, choreographed song editing in Avid and FCP with workflow reference. </li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Practical Test: Written and practical tests for Avid and FCP proficiency. </li>

                                                </ul>
                                            </div>

                                        </div>


                                    </div>


                                    <div className='flex flex-col gap-y-4 items-start'>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Month 6</h3>
                                                <h3 className='font-bold text-white text-[14px]  md:text-[20px]'>Practicals:</h3>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Avid : Spot editing workflow, round-tripping to DaVinci Resolve, censor workflow, editor's role in Qube, relationship with post-production technicians, basic color correction.</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>FCP : Spot editing workflow, round-tripping to DaVinci Resolve, censor workflow, basic color correction.</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Assignments: Multi-cam edited sequence in Avid and FCP, complete short film edited version, green mate removed sequence, sample outputs for dubbing, SFX, DI, and CG.</li>

                                                </ul>
                                            </div>

                                        </div>



                                    </div>


                                    <div className='flex flex-col gap-y-4 items-start'>

                                        <div className='flex flex-col gap-y-2 items-start'>
                                            <div>
                                                <h3 className='font-bold text-white text-[18px]  md:text-[28px]'>Months 7 to 12 </h3>
                                                <h1 className='font-bold text-white text-[14px]  md:text-[18px]'>6 months internship with an industry expert editor</h1>
                                            </div>

                                            <div>
                                                <ul className='text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200'>

                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Additional Syllabus: Basic conversion workflow in DaVinci Resolve, Premiere Pro basic intro and workflow, AI tools in Premiere Pro, basic color correction in DaVinci Resolve, AI tools in DaVinci Resolve, documentary editing styles.</li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span> Practical Test: Written and practical tests for Avid and FCP.                                                     </li>
                                                    <li className='flex items-center gap-x-3 md:gap-x-5'> <span><GiFilmSpool className='text-gray-100 text-[16px] md:text-[20px]' />  </span>Final Submission: All projects and practical sections on 7 to 12 months for film editing course. </li>

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
                </section>


                {/* ------------------ Mentors ------------------ */}

                <section className='pt-10 md:pt-20 pb-10 md:pb-20'>
                    <div className='w-full px-4 md:w-[80%] mx-auto font-kumbh'>

                        <div className='flex items-center justify-center mb-10'>
                            <h2 className='font-bold text-black text-[20px] md:text-[40px] text-center uppercase tracking-[2px]'>FilmMaker As Mentor </h2>
                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='grid grid-cols-1 '>

                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center'>
                                        <img src={raja} className='w-[80%] rounded-md object-cover' alt="mentor" title="Top Film Editing Courses" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[28px] text-white tracking-[2px]'>Raja Mohammed</h3>
                                            <span className='text-orange-500 text-[16px]'>Editing</span>
                                        </div> */}

                                        <div className='w-full md:w-[70%] mx-auto '>
                                            <p className='text-[13px] md:text-[14px] text-gray-900 text-center'>
                                                HOD of Editing department. A luminary in film editing with a decorated career in Tamil and Malayalam cinema,
                                                National Award winner for "Paruthi Veeran", and known for exceptional work in "Raam" and "Subramaniyapuram".   </p>
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

                            </div>
                        </div>

                    </div>
                </section>



                {/* -------------- Our Mentors have Worked In ------------------------ */}

                <section className='bg-black overflow-hidden flex justify-center items-center pt-14 pb-10 '>

                    <div className='w-full mx-auto'>

                        <div className='flex justify-center items-center mb-12'>
                            <h3 className='font-bold uppercase text-[20px] md:text-[28px] text-white'>Mentor's Filmography</h3>
                        </div>

                        <div>

                            <div className="slider-container">
                                <Slider {...settings} className="">

                                    <div className='px-2'>
                                        <div>
                                            <img src={rajaOne} className='w-full object-cover' alt="mentor" title="Editing Institute " loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={rajaTwo} className='w-full object-cover' alt="mentor" title="Editing Institute " loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={rajaThree} className='w-full object-cover' alt="mentor" title="Editing Institute " loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={rajaFour} className='w-full object-cover' alt="mentor" title="Editing Institute " loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajaFive} className='w-full object-cover' alt="mentor" title="Editing Institute " loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajaSix} className='w-full object-cover' alt="mentor" title="Editing Institute " loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajaSeven} className='w-full object-cover' alt="mentor" title="Editing Institute " loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajaEight} className='w-full object-cover' alt="mentor" title="Editing Institute " loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajaNine} className='w-full object-cover' alt="mentor" title="Editing Institute " loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={rajaTen} className='w-full object-cover' alt="mentor" title="Editing Institute " loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>



                                </Slider>
                            </div>

                        </div>
                    </div>
                </section>


                {/* ----------------------- who can apply -------------------------- */}

                {/* <section className=' pt-10 md:pt-20 pb-10 md:pb-20 bg-black'>
                    <div className='w-full px-4  md:w-[80%] mx-auto'>

                        <div className='flex justify-center items-center mb-8 md:mb-14'>
                            <h3 className='font-bold text-[20px] text-center md:text-[35px] text-white '>Who can apply for the course? </h3>
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center gap-y-8'>

                            <div className='w-full md:w-[40%] mx-auto'>

                                <div className='flex justify-center items-center'>
                                    <img src={who} className='w-[90%] object-cover rounded-md shadow-md drop-shadow-lg' alt="" />
                                </div>

                            </div>

                            <div className='w-full md:w-[60%] mx-auto md:px-16'>
                                <div className='flex justify-center items-center w-full'>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-20 font-semibold w-full'>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <MdNaturePeople className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'>  Passionate People </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <MdEditOff className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Aspiring Editors </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <FaHeadSideVirus className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Creative Thinker </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>

                                                    <GiTeamIdea className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px] ' > Team Player </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <BiCommentDetail className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Detail-oriented minds </h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex items-center gap-x-3 bg-white w-full rounded-md py-4 px-6'>
                                                <div className='size-12 rounded-full  flex justify-center items-center bg-gray-200 '>
                                                    <MdOutlineManageHistory className='text-[28px] text-[#ff0000]' />
                                                </div>
                                                <h3 className='font-semibold text-[16px]'> Story shapers </h3>
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
                                <div className='w-full flex justify-center items-center  '>
                                    <div className='w-full md:px-10'>
                                        <EditingFAQ />
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

export default Editing



