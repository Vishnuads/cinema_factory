import React from 'react'
import Slider from "react-slick";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// import DirectionFAQ from '../../components/Direction_FAQ';
import VfxFAQ from '../../components/VfxFAQ';
import '../text.css'

import { FaArrowRight } from "react-icons/fa6";

import banner from '../../images/course/banner/pattern.jpg'
import frame from '../../images/course/vfx/vfx.jpg'
import aravind from '../../images/mentors/Aravind.jpg'
import muniraj from '../../images/mentors/muniraj.jpg'
import shiv from '../../images/mentors/shiv.png'
import light from '../../images/course/vfx/vfx_2.png'
import who from '../../images/course/vfx/vfx_3.png'



import aravindOne from '../../images/poster/aravind/1.png'
import aravindTwo from '../../images/poster/aravind/2.png'
import aravindThree from '../../images/poster/aravind/3.png'
import aravindFour from '../../images/poster/aravind/4.png'
import aravindFive from '../../images/poster/aravind/5.png'
import aravindSix from '../../images/poster/aravind/6.png'
import aravindSeven from '../../images/poster/aravind/7.png'
import aravindEight from '../../images/poster/aravind/8.png'
import aravindNine from '../../images/poster/aravind/9.png'
import aravindTen from '../../images/poster/aravind/10.png'
import aravindTwele from '../../images/poster/aravind/11.png'
import aravindElven from '../../images/poster/aravind/12.png'
import aravindThrtieen from '../../images/poster/aravind/13.png'
import aravindFourteen from '../../images/poster/aravind/14.png'

import munirajOne from '../../images/poster/muniraj/1.png'
import munirajTwo from '../../images/poster/muniraj/2.png'
import munirajThree from '../../images/poster/muniraj/3.png'
import munirajFour from '../../images/poster/muniraj/4.png'
import munirajFive from '../../images/poster/muniraj/5.png'

import shivOne from '../../images/poster/shiv/1.png'
import shivTwo from '../../images/poster/shiv/2.png'
import shivThree from '../../images/poster/shiv/3.png'
import shivFour from '../../images/poster/shiv/4.png'
import shivFive from '../../images/poster/shiv/5.png'
import shivSix from '../../images/poster/shiv/6.png'




//icons
import { RiWhatsappLine } from "react-icons/ri";

import { TbCreativeCommonsBy } from "react-icons/tb";
import { PiFilmSlateDuotone } from "react-icons/pi";
import { MdLeaderboard } from "react-icons/md";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { MdOutlineSyncProblem } from "react-icons/md";
import { RiIndeterminateCircleLine } from "react-icons/ri";


import iconone from '../../images/3icons/001-ai.png'
import iconTwo from '../../images/3icons/002-film-slate.png'
import iconThree from '../../images/3icons/003-gaming.png'
import iconFour from '../../images/3icons/004-leader.png'
import iconFive from '../../images/3icons/place.png'
// import iconSix from '../../images/3icons/006-visual.png'
import iconSeven from '../../images/3icons/007-universal-studio.png'
import iconEight from '../../images/3icons/008-image.png'
import iconNine from '../../images/3icons/009-folder-silhouette.png'
import iconTen from '../../images/3icons/010-workshop.png'



import iconweb from '../../images/3icons/web.png'
import iconshoot from '../../images/3icons/shoot.png'


import softwareOne from '../../images/course/vfx/nuke.png'
import softwareTwo from '../../images/course/vfx/blender.png'
import softwareThree from '../../images/course/vfx/si.png'
import softwareFour from '../../images/course/vfx/mocha.png'
import softwareFive from '../../images/course/vfx/ps.png'
import softwareSix from '../../images/course/vfx/ILLUSTRATER.png'
import softwareSeven from '../../images/course/vfx/after effect.png'
import softwareEight from '../../images/course/vfx/x.png'
import softwareNine from '../../images/course/vfx/maya.png'




const Vfx = () => {

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
                    <title>Top VFX Courses in India | Best Visual Effects Institute</title>
                    <meta
                        name="description"
                        content="Join our top-rated VFX courses. Learn from experts, gain hands-on experience with industry-standard software, and build a successful career in visual effects"
                    />
                    <meta
                        name="keywords"
                        content="Learn VFX courses | Best VFX courses |VFX training | VFX training institute | VFX institute | Best VFX institute | VFX courses | VFX courses online | best VFX courses | learn diploma VFX courses in India | want to study VFX courses | VFX course fees | Jobs in VFX | career in VFX | VFX institute near me | VFX training near me | best institute to learn VFX | best institute to study VFX | best institute for VFX certification courses | best institute to study diploma VFX Courses | study VFX courses in India | VFX course fees | Jobs in VFX | career in Visual effects | Visual effects institute near me | Visual effects training near me "
                    />
                    <meta name="author" content="Cinema Factory Academy" />
                    <meta charSet="utf-8" />
                    {/* Add other meta tags here if needed */}
                </Helmet>


                <section>
                    <div className=''>

                        <div>
                            <img src={frame} className='w-full object-cover' alt="main banner" title="Top VFX Courses in India" loading="lazy" fetchpriority="auto" />
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

                            <div className='w-full px-4 md:w-[90%] mx-auto mt-10 md:mt-16'>

                                <div className='mb-8 flex flex-col items-center'>
                                    <h3 className='font-bold text-[20px] md:text-[40px] text-white text-center uppercase tracking-[2px]'>Course highlights </h3>
                                </div>

                                <div className='flex justify-center items-center md:mt-12'>

                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-14 gap-y-4 md:gap-y-14  text-[12px] md:text-[14px]'>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full w-full rounded-md'>

                                                <div>
                                                    <img src={iconOne} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>placement opportunities</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full w-full rounded-md'>

                                                <div>
                                                    <img src={iconTwo} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'> Authorised Industry Expert Mentors</h3>
                                            </div>
                                        </div>


                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full w-full rounded-md'>

                                                <div>
                                                    <img src={iconThree} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Updated Ai Integrated Modules</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full w-full rounded-md'>

                                                <div>
                                                    <img src={iconFour} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Film Shoots & VFX Studio Visits</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full w-full rounded-md'>

                                                <div>
                                                    <img src={iconFive} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Internship At Leading Studios</h3>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full w-full  rounded-md'>

                                                <div>
                                                    <img src={iconSix} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Extended Lab Access</h3>
                                            </div>
                                        </div>


                                        <div className='hidden md:flex'>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full w-full rounded-md'>

                                                <div>
                                                    <img src={iconSeven} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Master Classes of Industry Experts </h3>
                                            </div>
                                        </div>

                                        <div className='hidden md:flex'>
                                            <div className='flex flex-col gap-y-1 md:gap-y-3 items-center bg-black/20 px-4 py-6 h-full w-full rounded-md'>

                                                <div>
                                                    <img src={iconEight} className='w-16 md:w-28 object-cover' alt="" />
                                                </div>
                                                <h3 className='text-white font-semibold text-center'>Unlimited Stock Assets Access</h3>
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
                                                            <img src={iconone} className=' w-14 md:w-20 object-cover mb-2' alt="icons" title="Best VFX courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Updated Ai </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Integrated Modules </h3>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconTwo} className=' w-14 md:w-20 object-cover mb-2' alt="icons" title="Best VFX courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Student Discounts on Softwares & Equipments</h3>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconFour} className=' w-14 md:w-20 object-cover mb-2' alt="icons" title="Best VFX courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Authorised Industry </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Expert Mentors</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconFive} className=' w-14 md:w-20 object-cover mb-2' alt="icons" title="Best VFX courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>100% </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Placement</h3>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconSeven} className=' w-14 md:w-20 object-cover mb-2' alt="icons" title="Best VFX courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Film Shoots & </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>VFX Studio Visits</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconNine} className=' w-14  md:w-20 object-cover mb-2' alt="icons" title="Best VFX courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Unlimited Stock </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Assets Access</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconTen} className=' w-14 md:w-20 object-cover mb-2' alt="icons" title="Best VFX courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Master Classes of </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Industry Experts</h3>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconThree} className=' w-14 md:w-20 object-cover mb-2' alt="icons" title="Best VFX courses" loading="lazy" fetchpriority="auto" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Extended </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Lab Access</h3>

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

                <section className='border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950 -mt-6'>
                    <div className='w-full px-4 md:w-[85%] mx-auto'>

                        <div className='flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-10'>
                            <h3 className='font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase'>1 Year Diploma Course  </h3>
                            <p className='font-semibold text-[18px] md:text-[28px] text-[#ff0000]  font-[roboto] uppercase tracking-[3px] '> in Visual Effects</p>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-y-8'>

                            {/* <div className='flex flex-col md:flex-row items-center gap-y-8'>

                                <div className='w-full md:w-[50%] md:px-5 mx-auto'>
                                    <div>
                                        <div class="border border-gray-600 overflow-y-auto h-[25rem] scrollbar-style-one px-2 md:px-6 py-4 rounded-md overscroll-y-contain	">

                                            <div className=''>
                                                <h2 className='text-[18px] md:text-[26px] font-semibold mb-6 text-white'>Detailed Course Breakdown</h2>

                                                <div className='flex flex-col gap-y-4 md:gap-y-6'>

                                                    <div className='flex flex-col gap-y-3'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 1: Evolution & Fundamentals of VFX</h3>

                                                        <ul className=' text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Students will learn about the evolution and importance of VFX, covering milestones and pioneers in the field.</li>
                                                            <li>Exploration of VFX technologies from practical effects to CGI, with a focus on contemporary applications.</li>
                                                            <li>Discussion on ethics, emerging trends, and the role of AI in shaping the future of vfx</li>
                                                            <li>Case studies of VFX rich blockbuster films.</li>
                                                        </ul>
                                                    </div>


                                                    <div className='flex flex-col gap-y-2'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Adobe Photoshop</h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Overview of Photoshop</li>
                                                            <li>Key features and applications</li>
                                                            <li>Interface Tour</li>
                                                            <li>Navigating the workspace and tools</li>
                                                            <li>Basic Tools and Functions</li>
                                                            <li>Selection tools, brush tools, and text tools</li>
                                                            <li>Image Adjustments</li>
                                                            <li>Color correction, brightness/contrast, hue/saturation</li>
                                                        </ul>

                                                    </div>


                                                    <div className='flex flex-col gap-y-2'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 2: Photo Editing Techniques  </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Retouching Techniques</li>
                                                            <li>Removing blemishes, cloning, and healing tools Layer Basics</li>
                                                            <li>Working with layers, masks, and blending modes Compositing Basics</li>
                                                            <li>Combining multiple images into a single composite</li>


                                                        </ul>
                                                    </div>

                                                    <div className='flex flex-col gap-y-2'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 3: Advanced Photoshop Techniques  </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Text and Effects</li>
                                                            <li>Applying and manipulating text, layer styles, and effects</li>
                                                            <li>Advanced Selection</li>
                                                            <li>Using advanced selection tools and techniques</li>
                                                            <li>Working with Filters</li>
                                                            <li>Applying and customizing filters</li>

                                                        </ul>
                                                    </div>


                                                    <div className='flex flex-col gap-y-2'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Month 2  </h3>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Adobe Illustrator  </h3>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 1: Introduction and Basics  </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Overview of Illustrator</li>
                                                            <li> Key features and applications</li>
                                                            <li>Interface Tour</li>
                                                            <li>Navigating the workspace and tools</li>
                                                            <li>Basic Tools and Functions</li>
                                                            <li>Drawing tools, shapes, and the Pen tool</li>
                                                            <li>Creating and Manipulating Shapes</li>
                                                            <li>Working with basic and complex shapes</li>

                                                        </ul>
                                                    </div>




                                                    <div className='flex flex-col gap-y-2'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 2: Vector Graphics Basics </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>  Path and Anchor Points</li>
                                                            <li> Understanding and using paths, anchor points, and handles</li>
                                                            <li> Color and Gradient</li>
                                                            <li> Applying and editing colors and gradients</li>
                                                            <li> Creating Patterns</li>
                                                            <li> Using and creating custom patterns</li>

                                                        </ul>
                                                    </div>

                                                    <div className='flex flex-col gap-y-2'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 3: Advanced Illustrator Techniques</h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li> Illustration and Design</li>
                                                            <li> Creating detailed vector illustrations and designs</li>
                                                            <li> Type and Typography</li>
                                                            <li> Working with text, fonts, and typographic effects</li>
                                                            <li> Brushes and Effects</li>
                                                            <li> Using and creating custom brushes and effects</li>

                                                        </ul>
                                                    </div>



                                                    <div className='flex flex-col gap-y-2'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Month 3</h3>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Adobe After Effects </h3>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 1: Introduction and Basics </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Overview of After Effects</li>
                                                            <li>Key features and applications</li>
                                                            <li> Interface Tour</li>
                                                            <li>Navigating the workspace and tools</li>
                                                            <li> Basic Animation</li>
                                                            <li>Introduction to keyframes, timelines, and basic animation principles</li>
                                                            <li> Creating Motion Graphics</li>
                                                            <li>Working with shapes, text, and basic effects</li>

                                                        </ul>
                                                    </div>




                                                    <div className='flex flex-col gap-y-2'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 2: Intermediate Animation Techniques </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li> Animating Layers and Effects</li>
                                                            <li> Using layer animations, transitions, and effects </li>
                                                            <li>  Effects and Presets</li>
                                                            <li> Applying and customizing effects and presets</li>
                                                            <li>  Masking and Compositing</li>
                                                            <li> Advanced masking techniques and compositing multiple layers</li>

                                                        </ul>
                                                    </div>


                                                    <div className='flex flex-col gap-y-2'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 3: Advanced After Effects Techniques</h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Complex Animations </li>
                                                            <li> Creating intricate animations and transitions</li>
                                                            <li> 3D Layers and Cameras</li>
                                                            <li> Working with 3D layers, cameras, and lights</li>
                                                            <li> Expressions and Automation</li>
                                                            <li> Using expressions to automate animations and effects</li>

                                                        </ul>
                                                    </div>



                                                    <div className='flex flex-col gap-y-2'>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Month 4</h3>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Rotoscopy & Matchmove</h3>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 1: Introduction to Matchmove </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Overview of VFX and Tracking Software</li>
                                                            <li>Introduction to Silhouette, Mocha Pro & PFTrack</li>
                                                            <li>Getting Started</li>
                                                            <li>Installation and basic setup</li>
                                                            <li>Interface tours and basic terminology</li>

                                                        </ul>
                                                    </div>

                                                    <div className='flex flex-col gap-y-2'>

                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 2: Silhouette Fundamentals </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Introduction to Silhouette</li>
                                                            <li>Interface and workspace overview</li>
                                                            <li>Basic Rotoscoping</li>
                                                            <li> Creating and managing roto shapes</li>
                                                            <li>Masking Techniques</li>
                                                            <li>Advanced masking and tracking in Silhouette</li>

                                                        </ul>
                                                    </div>

                                                    <div className='flex flex-col gap-y-2'>

                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 3: Advanced Silhouette Techniques </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Compositing and Node-Based Workflow</li>
                                                            <li> Understanding Silhouette's node-based system</li>
                                                            <li>Effects and Refinements</li>
                                                            <li>Applying and adjusting effects</li>
                                                            <li>Exporting and Integration</li>
                                                            <li>Exporting files for use in other software</li>

                                                        </ul>
                                                    </div>



                                                    <div className='flex flex-col gap-y-2'>

                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 4: Mocha Pro Basics </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Introduction to Mocha Pro</li>
                                                            <li>Interface overview and key features</li>
                                                            <li>Planar Tracking</li>
                                                            <li>Setting up and using planar tracking for basic shots</li>
                                                            <li>Masking and Rotoscoping</li>
                                                            <li>Creating and managing masks for tracking</li>

                                                        </ul>
                                                    </div>

                                                    <div className='flex flex-col gap-y-2'>

                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 5: Advanced Mocha Pro Techniques </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Advanced Tracking</li>
                                                            <li>Using Mocha’s advanced tracking features and stabilization</li>
                                                            <li>Integration with Compositing Software</li>
                                                            <li> Exporting tracking data and integrating with other VFX tools</li>
                                                            <li>Scripting and Automation</li>
                                                            <li>Basic scripting for automating repetitive tasks</li>

                                                        </ul>
                                                    </div>

                                                    <div className='flex flex-col gap-y-2'>

                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 6: PFTrack Fundamentals </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li> Introduction to PFTrack</li>
                                                            <li>Interface and basic tools overview</li>
                                                            <li>Camera Tracking</li>
                                                            <li>Setting up and executing camera tracking</li>
                                                            <li>Matchmoving Basics</li>
                                                            <li>Aligning 3D elements with tracked footage</li>

                                                        </ul>
                                                    </div>


                                                    <div className='flex flex-col gap-y-2'>

                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 7: Advanced PFTrack Techniques</h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li> Object Tracking</li>
                                                            <li>Tracking moving objects within a scene</li>
                                                            <li>3D Reconstruction</li>
                                                            <li>Creating and working with 3D reconstructions</li>
                                                            <li> Integration with Other Software</li>
                                                            <li>Exporting tracking data for use in other VFX tools</li>

                                                        </ul>
                                                    </div>


                                                    <div className='flex flex-col gap-y-2'>

                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Month 6</h3>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Blender </h3>
                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 1: Introduction to Blender </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li> Overview of Blender</li>
                                                            <li> Key features and applications</li>
                                                            <li> Getting Started</li>
                                                            <li> Installation and interface tour </li>
                                                            <li> Basic terminology and navigation</li>



                                                        </ul>
                                                    </div>

                                                    <div className='flex flex-col gap-y-2'>

                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>Week 2: Basic 3D Modeling </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>Introduction to 3D Modeling </li>
                                                            <li>Understanding the 3D viewport and navigation </li>
                                                            <li>Basic Mesh Operations </li>
                                                            <li>Creating and modifying basic shapes (cubes, spheres, cylinders) </li>
                                                            <li>Editing Tools </li>
                                                            <li>Using extrusion, scaling, and rotating </li>

                                                        </ul>
                                                    </div>

                                                    <div className='flex flex-col gap-y-2'>

                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>Week 3: Advanced Modeling Techniques </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li> Modifiers and Tools </li>
                                                            <li> Using modifiers like Subdivision Surface and Mirror</li>
                                                            <li>Sculpting Basics </li>
                                                            <li> Introduction to sculpting tools and techniques </li>
                                                            <li> Mesh Optimization</li>
                                                            <li> Techniques for cleaning and optimizing models</li>

                                                        </ul>
                                                    </div>


                                                    <div className='flex flex-col gap-y-2'>

                                                        <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>Week 4: Texturing and Materials </h3>

                                                        <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                            <li>  UV Mapping</li>
                                                            <li> Unwrapping UVs and applying textures</li>
                                                            <li>Material Setup</li>
                                                            <li>Creating and applying materials using the Shader Editor</li>
                                                            <li>Texture Painting</li>
                                                            <li> Painting textures directly onto models</li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>


                                <div className='w-full md:w-[50%] md:px-5 mx-auto'>

                                    <div>
                                        <div class="border border-gray-600 overflow-y-auto h-[25rem] scrollbar-style-one px-2 md:px-6 py-4 rounded-md overscroll-y-contain	">

                                            <div className='flex flex-col gap-y-6'>

                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Month 7 </h3>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Blender - Advanced   </h3>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 5: Lighting and Rendering </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>  Lighting Basics  </li>
                                                        <li>  Types of lights and their uses (Point, Sun, Spot, Area)  </li>
                                                        <li>  Rendering Setup  </li>
                                                        <li>   Introduction to Blender’s rendering engines (Cycles and Eevee)  </li>
                                                        <li>  Camera Setup  </li>
                                                        <li>  Positioning and animating cameras  </li>

                                                    </ul>
                                                </div>




                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 6: Animation Fundamentals</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Basic Animation </li>
                                                        <li> Creating keyframes and simple animations </li>
                                                        <li> Animation Principles </li>
                                                        <li>  Understanding timing, spacing, and easing</li>
                                                        <li>Graph Editor and Dope Sheet  </li>
                                                        <li> Fine-tuning animations with the Graph Editor and Dope Sheet </li>

                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 7: Rigging and Character Animation</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>  Introduction to Rigging </li>
                                                        <li>  Creating and using armatures </li>
                                                        <li>  Basic Rigging Techniques </li>
                                                        <li>  Rigging a simple character or object </li>
                                                        <li>   Character Animation </li>
                                                        <li>  Basic techniques for animating characters using rigs </li>

                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 8: Advanced Texturing and Shading</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>  Advanced Shading Techniques </li>
                                                        <li>  Creating complex materials and shaders </li>
                                                        <li>   Shader Nodes </li>
                                                        <li>  Using advanced shader nodes for realistic textures </li>
                                                        <li>  Node-Based Texturing </li>
                                                        <li>  Compositing textures using the Node Editor </li>
                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Month 8</h3>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Nuke </h3>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 1: Introduction to Nuke </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Overview of Nuke</li>
                                                        <li>Key features and industry applications </li>
                                                        <li> Getting Started</li>
                                                        <li> Installation, setup, and interface tour</li>

                                                    </ul>
                                                </div>





                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 2: Workspace Customization and Basic Operations </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Workspace Customization</li>
                                                        <li>  Creating layouts and configuring preferences</li>
                                                        <li> Basic Node Operations</li>
                                                        <li> Adding, connecting, and managing nodes</li>


                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 3: Core Compositing Techniques</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Working with Nodes</li>
                                                        <li>Node types and connections</li>
                                                        <li>Color Correction and Grading</li>
                                                        <li>Using color correct nodes and grading footage</li>

                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>   Week 4: Keying Basics</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Introduction to Keying</li>
                                                        <li>Keylight node basics and refining keys</li>
                                                    </ul>
                                                </div>


                                                <div className='flex flex-col gap-y-2'>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>   Month 9</h3>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>   Nuke - Advanced</h3>
                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Week 5: Rotoscoping </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Rotoscoping Basics</li>
                                                        <li>Creating and animating roto shap</li>


                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>

                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 6: Tracking and Stabilization </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Tracking</li>
                                                        <li>2D and 3D tracking basics, using the Tracker node</li>
                                                        <li>Stabilization Techniques</li>
                                                        <li>Stabilizing shaky footage</li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>

                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 7: 3D Compositing in Nuke </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li>Understanding Nuke’s 3D Environment</li>
                                                        <li>Working with 3D cameras, lights, and importing 3D models</li>


                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>

                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 8: Advanced Keying Techniques </h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Advanced Keying</li>
                                                        <li>Using Primatte and Ultimatte, multi-layered keying strategies</li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>

                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Week 9: Optimization, Workflow</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Performance Optimization</li>
                                                        <li>Managing node complexity, caching, and rendering settings </li>
                                                        <li> Project Management</li>
                                                        <li> Organizing projects, file paths, and versioning</li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>

                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>Month 10</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Weeks 1 & 2 : Ai Integrated Tools For VFX</li>
                                                        <li>Weeks 3 & 4 : Student's Final Project Presentation & Students Certification</li>

                                                    </ul>
                                                </div>

                                                <div className='flex flex-col gap-y-2'>

                                                    <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>Months 11 & 12</h3>

                                                    <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                        <li> Internship at a Leading VFX Studio</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div> */}


                            <div class="w-full flex justify-center ">

                                <div className='w-full'>

                                    <div>
                                        <h2 className='text-[18px] md:text-[26px] font-semibold  text-white text-center mb-2 md:mb-10'>Softwares Covered</h2>
                                    </div>

                                    {/* <div className='grid grid-cols-1 md:grid-cols-3  gap-y-4 md:gap-y-10 gap-x-2 md:gap-x-64 '>

                                        <div className='flex flex-col gap-y-3'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>Month 1 </h3>

                                            <ul className=' text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li>Evolution & Fundamentals of VFX </li>
                                                <li>Adobe Photoshop</li>
                                            </ul>
                                        </div>


                                        <div className='flex flex-col gap-y-2'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>Month 2 </h3>

                                            <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li>Adobe Illustrator</li>
                                            </ul>

                                        </div>


                                        <div className='flex flex-col gap-y-2'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Month 3   </h3>

                                            <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li>Adobe After Effects</li>


                                            </ul>
                                        </div>

                                        <div className='flex flex-col gap-y-2'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Month 4  </h3>

                                            <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li>Rotoscopy & Matchmove</li>


                                            </ul>
                                        </div>


                                        <div className='flex flex-col gap-y-2'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Month 5   </h3>


                                            <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li>Rotoscopy & Matchmove - Advanced </li>


                                            </ul>
                                        </div>




                                        <div className='flex flex-col gap-y-2'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Month 6  </h3>

                                            <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li>Blender</li>

                                            </ul>
                                        </div>

                                        <div className='flex flex-col gap-y-2'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>Month 7   </h3>

                                            <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li>Blender - Advanced</li>


                                            </ul>
                                        </div>



                                        <div className='flex flex-col gap-y-2'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Month 8 </h3>

                                            <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li> Nuke</li>


                                            </ul>
                                        </div>

                                        <div className='flex flex-col gap-y-2'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'> Month 9   </h3>

                                            <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li>Nuke - Advanced </li>


                                            </ul>
                                        </div>


                                        <div className='flex flex-col gap-y-2'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>Month 10  </h3>

                                            <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li> Ai Integrated Tools For VFX</li>


                                            </ul>
                                        </div>

                                        <div className='flex flex-col gap-y-2'>
                                            <h3 className='font-semibold text-[16px] md:text-[20px] text-gray-200'>  Months 11 & 12 </h3>


                                            <ul className='text-[12px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400'>
                                                <li>Internship at a Leading VFX Studio</li>

                                            </ul>
                                        </div>

                                    </div> */}

                                    <div className='grid  grid-cols-2 md:grid-cols-5 gap-x-4 md:gap-x-14 gap-y-6  md:gap-y-10'>

                                        <div className='flex justify-center items-center'>
                                            <img src={softwareOne} className='w-28 md:w-40 object-cover' alt="software" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                        </div>

                                        <div className='flex justify-center items-center'>
                                            <img src={softwareTwo} className='w-28 md:w-40 object-cover' alt="software" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                        </div>

                                        <div className='flex justify-center items-center'>
                                            <img src={softwareNine} className='w-20 md:w-28 object-cover' alt="software" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                        </div>

                                        <div className='flex justify-center items-center'>
                                            <img src={softwareThree} className='w-28 md:w-40 object-cover' alt="software" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                        </div>

                                        <div className='flex justify-center items-center'>
                                            <img src={softwareFour} className='w-28 md:w-40 object-cover' alt="software" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                        </div>

                                        <div className='flex justify-center items-center'>
                                            <img src={softwareFive} className='w-20 md:w-28 object-cover' alt="software" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                        </div>

                                        <div className='flex justify-center items-center'>
                                            <img src={softwareSix} className='w-20 md:w-28 object-cover' alt="software" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                        </div>

                                        <div className='flex justify-center items-center'>
                                            <img src={softwareSeven} className='w-20 md:w-28 object-cover' alt="software" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                        </div>

                                        <div className='flex justify-center items-center'>
                                            <img src={softwareEight} className='w-20 md:w-28 object-cover' alt="software" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
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

                        <div className='flex items-center justify-center mb-6 md:mb-16'>
                            <h1 className='font-bold text-black text-[20px] md:text-[40px] text-center uppercase tracking-[2px]'>FilmMakers As Mentors</h1>
                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-16 gap-x-20 '>

                                <div className='flex flex-col  items-center justify-center'>

                                    <div className='flex justify-center items-center'>
                                        <img src={aravind} className='w-[80%] rounded-md  object-cover' alt="mentor" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>
                                        {/* <div className='flex flex-col gapy-2 items-center '>
                                            <h3 className='font-bold text-[28px] text-white tracking-[2px]'>Aravind Naga</h3>
                                            <span className='text-orange-500 text-[16px]'>HOD | Visual Effects</span>
                                        </div> */}
                                        <div className=' mx-auto '>
                                            <p className='text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]'>
                                                Aravind Naga, an award-winning VFX and Post Production Supervisor, excels in film, advertising, and digital content creation, passionately mentoring future VFX professionals.
                                            </p>
                                        </div>

                                        {/* <div className='flex justify-center items-center font-[poppins] text-[12px] md:text-[14px] font-semibold'>
                                            <button className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border border-gray-500 bg-[#ff0000] px-6 md:px-8 font-medium text-neutral-200 duration-500">
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
                                        <img src={shiv} className=' w-[80%] rounded-md object-cover' alt="mentor" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>

                                        <div className=' '>
                                            <p className='text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]'>
                                                Shiv Shankar stands out as a talented Senior VFX & Unreal Engine artist, specializing in Virtual Production with
                                                abundant experience in the visual effects industry. His proficiency in ICVFX has resulted in impressive outcomes
                                                across a range of notable projects.
                                            </p>
                                        </div>

                                        {/* <div className='flex justify-center items-center font-[poppins] text-[12px] md:text-[14px] font-semibold'>
                                            <button className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border border-gray-500 bg-[#ff0000] px-6 md:px-8 font-medium text-neutral-200 duration-500">
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
                                        <img src={muniraj} className=' w-[80%] rounded-md object-cover' alt="mentor" title="Best Visual Effects Institute" loading="lazy" fetchpriority="auto" />
                                    </div>

                                    <div className='flex flex-col gap-y-5 items-center justify-center mt-5'>

                                        <div className=' '>
                                            <p className='text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]'>
                                                Muniraj, a creative technologist with 12+ years of experience, excels in film production problem-solving, contributing to notable Bollywood and Kollywood projects.
                                            </p>
                                        </div>

                                        {/* <div className='flex justify-center items-center font-[poppins] text-[12px] md:text-[14px] font-semibold'>
                                            <button className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md border border-gray-500 bg-[#ff0000] px-6 md:px-8 font-medium text-neutral-200 duration-500">
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
                                            <img src={aravindOne} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindTwo} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindThree} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindFour} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindFive} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindSix} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindSeven} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindNine} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindTen} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindElven} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindTwele} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindThrtieen} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={aravindFourteen} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>


                                    <div className='px-2'>
                                        <div>
                                            <img src={munirajOne} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={munirajTwo} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={munirajThree} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={munirajFour} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={munirajFive} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>

                                    <div className='px-2'>
                                        <div>
                                            <img src={shivOne} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={shivTwo} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={shivThree} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={shivFour} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={shivFive} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
                                        </div>
                                    </div>
                                    <div className='px-2'>
                                        <div>
                                            <img src={shivSix} className='w-full object-cover' alt="mentor work" title="Top-Rated VFX Training Institute" loading="lazy" fetchpriority="auto" />
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

                        <div className='flex flex-col md:flex-row justify-center items-center gap-y-8'>

                            <div className='w-full md:w-[40%] mx-auto'>

                                <div className='flex justify-center items-center'>
                                    <img src={who} className='w-[80%] object-cover rounded-md shadow-md drop-shadow-lg' alt="" />
                                </div>
                            </div>


                            <div className='w-full md:w-[60%] mx-auto md:px-16'>
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
                                <div className='w-full flex justify-center items-center  '>
                                    <div className='w-full md:px-10'>
                                        <VfxFAQ />
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

export default Vfx



