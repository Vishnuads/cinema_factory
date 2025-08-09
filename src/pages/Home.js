import React, { useEffect } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './text.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


import Clients from '../components/Clients'
import videoBanner from '../images/banner/vfx.mp4'
import stop from '../images/stop.jpg'

// import all_logo from '../images/header/all_logo.png'

import rajesh_sir from '../images/about/RAJESH.png'

import banner from '../images/banner/Admissions_Open.jpg'
import manoj_banner from '../images/banner/Manoj_Cover.png'


import n1 from '../images/header/n1.png'
import n2 from '../images/header/n2.png'
import n3 from '../images/header/n3.png'


// highlights
import iconone from '../images/3icons/001-ai.png'
import iconTwo from '../images/3icons/002-film-slate.png'
import iconThree from '../images/3icons/003-gaming.png'
import iconFour from '../images/3icons/004-leader.png'
import iconFive from '../images/3icons/place.png'
import iconSix from '../images/3icons/006-visual.png'
import iconSeven from '../images/3icons/007-universal-studio.png'
// import iconEight from '../images/3icons/008-image.png'
import iconNine from '../images/3icons/009-folder-silhouette.png'
import iconTen from '../images/3icons/010-workshop.png'
import iconElven from '../images/3icons/011-crew.png'
// import iconTwele from '../images/3icons/012-offer.png'
import iconweb from '../images/3icons/web.png'
import iconshoot from '../images/3icons/shoot.png'


//icons
import Course from '../components/Course';
import Mentors from '../components/Mentors';

import MovieLogo from '../components/MovieLogo';

import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";


// import { FaWhatsapp } from "react-icons/fa6";
// import { BsTelephoneFill } from "react-icons/bs";
import Affiliated from '../components/Affiliated';
// import Workshop from '../components/Workshop';


const Home = () => {

    // const text = "what's stopping you?";

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const handleContextMenu = (event) => {
        event.preventDefault(); // Prevents the context menu from appearing
    };

    function topPage() {
        window.scroll(0, 0)
    }

    ///slider
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <>

            <div className='overflow-hidden scroll-smooth  relative' onContextMenu={handleContextMenu}>

                <div className='absolute right-0 w-full top-3 md:top-20 z-20  '>

                    <div className='flex justify-end fixed right-0'>

                        <div className='flex flex-col gap-y-3  md:gap-y-8 items-center '>

                            <div className='bg-white'>

                                <div className=' py-1 md:py-2 px-1 md:px-0'>
                                    <p className='font-[roboto] font-semibold tracking-tight uppercase text-[5px] md:text-[12px] text-center  border-b border-gray-400    w-full md:w-[80%] mx-auto '>Affiliated By</p>
                                </div>

                                <div className='p-1 border-b border-gray-300'>
                                    <img src={n1} className='w-8 md:w-24  object-cover' alt='none' />
                                </div>
                                <div className='p-1 border-b border-gray-300'>
                                    <img src={n2} className='w-8 md:w-24 object-cover' alt='none' />
                                </div>
                                <div className='p-1'>
                                    <img src={n3} className='w-8 md:w-24 object-cover' alt='none' />
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <Helmet>
                    <title>Filmmaking, Virtual Production And VFX Courses In India</title>
                    <meta
                        name="description"
                        content="Join Cinema Factory Academy for top courses in direction, cinematography, editing, and VFX. Learn from experts, experience, and secure your Media career."
                    />
                    <meta
                        name="keywords"
                        content="VFX training courses | VFX Courses | VFX Careers | Virtual Production courses | Virtual production training Institute | Direction courses | Acting institute | Acting Courses | Direction Training Institute | Photography courses | Learn photography | Photography Training institute | Acting Training Institute | Cinematography courses | cinematography training institute | learn Editing Courses | Editing Training Institute | Visual effects courses | Visual effects training institute | Learn Visual effects | Best VFX institute | Learn VFX |  Visual effects institute"
                    />
                    <meta name="author" content="Cinema Factory Academy" />
                    <meta charSet="utf-8" />
                    {/* Add other meta tags here if needed */}

                </Helmet>



                <div className=''>
                    <img src={banner} className='w-full fixed top-0 h-screen -z-20' alt="CF_banner" title="Filmmaking" loading="lazy" fetchpriority="low" />
                </div>



                {/* ------------------ popup banner  ------------------------*/}

                <div className=' '>
                    <div>
                        {/* <Popup /> */}
                    </div>
                </div>

                <section>
                    <div className='font-playfair relative w-full' >

                        {/* <div className='absolute top-0  left-4 md:left-16 z-20 flex md:hidden'>
                            <img src={all_logo} className='w-[35%] md:w-[70%] object-cover rounded-b-md md:rounded-b-xl' alt='none' />
                        </div> */}

                        {/* <div className='absolute top-0'>
                            <div>
                                <img src={offer} className='w-28 md:w-80 object-cover' alt='none' />
                            </div>
                        </div> */}




                        {/* <div>
                            <img src={banner} className='w-full object-cover' alt="" />
                        </div> */}


                        <div className="slider-container">
                            <Slider {...settings}>
                                <div>
                                    <img src={banner} className='w-full object-cover' alt="CF_banner" title="Virtual Production And VFX Courses In India" loading="lazy" fetchpriority="high" />
                                </div>

                                <div>
                                    <img src={manoj_banner} className='w-full object-cover' alt="CF_banner" title="Virtual Production And VFX Courses In India" loading="lazy" fetchpriority="high" />
                                </div>

                            </Slider>
                        </div>


                    </div>

                </section >


                {/* ------------------------- section two --------------------------- */}

                {/* <section>
                   
                    <div className=' font-[Aladin]'>

                        <div className='relative w-full'>

                            <div>
                                <img src={bannerOne} className='w-full object-cover blur-[2px]' alt="" />
                            </div>

                            <div className='absolute top-12 md:top-60  flex justify-center items-center w-full' >

                                <div className='flex flex-col gap-y-2 md:gap-y-8  text-white'>

                                    <div className='flex flex-col gap-y-6 md:gap-y-14 justify-center items-center '>
                                        <div className='flex justify-center'>
                                        </div>
                                        <img src={content} className='w-[70%] md:w-[50%] object-cover ' alt="" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </section> */}


                {/* ---------------------------- courses -------------------------- */}

                <section className='-mt-5'>
                    <div className=' px-4 mx-auto w-full bg-black pt-10 md:pt-20 pb-10 md:pb-20 '>

                        <div>
                            {/* <h3 className='uppercase font-semibold  text-[2rem] text-center text-white tracking-[3px]'>Courses</h3> */}
                            <div className='flex justify-center items-center'>
                                {/* <img src={coursenew} className=' w-[40%] md:w-[34%] object-cover' alt="" /> */}
                                <h2 className='font-bold  text-[24px] md:text-[40px] uppercase font-[poppins] text-white'>Courses</h2>
                            </div>
                            <p className='text-center text-[11px] md:text-[16px] text-gray-100 mt-2 md:mt-4 font-[roboto] w-full md:w-[60%] mx-auto'>Our academy offers one-year diploma courses, workshops, seminars, webinars, and various courses, each tailored for comprehensive knowledge and practical skills. Click below for more info.</p>
                        </div>

                        <div className=' mt-4 md:mt-16 px-3'>
                            {/* <Try /> */}
                            <Course />
                        </div>


                    </div>
                </section>


                {/* ------------- why cinema factory  ---------------*/}

                {/* <section className='font-[Prata] '>
                    <div class=" inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#bf9b38_100%)]">
                        <div className='w-full mx-auto'>

                            <div className='flex items-center justify-between'>

                                <div className='relative w-full mx-auto'>

                                    <div className='flex justify-center '>
                                        <img src={whycf} className='w-full  object-cover blur-[2px]' alt="" />
                                    </div>

                                    <div className='absolute w-full flex flex-col gap-y-5 justify-center items-center bottom-8 '>
                                        <img src={why} className='w-[75%] object-cover md:mb-32' alt="" />

                                        <div>
                                            <h3 className=' mb-2 text-center  text-[10px] md:text-[24px] tracking-[1px]  md:tracking-[4px] font-kumbh   capitalize text-gray-100 font-semibold'> Elevate Your Filmmaking With Cinema Factory  </h3>
                                            <div className='flex justify-center'>
                                                <img src={master} className='w-[90%] md:w-[80%] object-cover' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}


                {/* ---------------------- main benifits ----------------------- */}

                <section className=' pt-10 md:pt-20  pb-10 md:pb-20 bg-white'>
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
                                            <h1 className=' font-bold text-[24px] md:text-[40px] uppercase font-[poppins] text-black text-center '>Cinema Factory exclusive </h1>

                                        </div>

                                        <div>

                                            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-16   gap-y-8 md:gap-y-14 mt-1  font-kumbh'>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconone} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="VFX training courses" loading="lazy" fetchpriority="low" />
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
                                                            <img src={iconTwo} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Direction courses" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Student Discounts on Softwares & Equipments</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconweb} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Cinematography" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>shoot a web series  </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>While Studying </h3>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconFour} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Cinema Factory Academy" loading="lazy" fetchpriority="low" />
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
                                                            <img src={iconFive} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Courses in Direction" loading="lazy" fetchpriority="low" />
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
                                                            <img src={iconSix} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Cinema Factory Acadmey" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Internship with</h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Expert FilmMakers</h3>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconSeven} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="VFX training courses" loading="lazy" fetchpriority="low" />
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
                                                            <img src={iconNine} className=' w-14  md:w-20 object-cover mb-2' alt="icon" title="Top Courses in Direction" loading="lazy" fetchpriority="low" />
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
                                                            <img src={iconTen} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Chennai Filmmaking Academy In India" loading="lazy" fetchpriority="low" />
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
                                                            <img src={iconElven} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Best Cinematography Institute in India" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Hands On </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Practical Approach</h3>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconshoot} className=' w-14 md:w-20 object-cover mb-2' alt="icon" title="Top-Rated VFX Training Institute In India" loading="lazy" fetchpriority="low" />
                                                        </div>

                                                        <div className='flex flex-col items-center '>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'>Overseas FilmMaking </h3>
                                                            <h3 className='uppercase font-semibold text-center  text-[10px] md:text-[14px] text-gray-700 tracking-[1px]'> Practice </h3>

                                                        </div>

                                                    </div>
                                                </div>


                                                <div>
                                                    <div className='flex flex-col  items-center gap-y-3'>

                                                        <div>
                                                            <img src={iconThree} className=' w-14 md:w-20 object-cover mb-2' alt="icons" title="Learn Photography Courses In India" loading="lazy" fetchpriority="low" />
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


                {/* -------------------------------- mentors -------------------- */}

                <section className=' pt-10 md:pt-16 pb-10 md:pb-16 bg-gradient-to-b from-yellow-950 from-10% via-black via-40% to-black to-90% font-[parta]'>
                    <div className=' w-full px-4 md:w-[85%] mx-auto'>

                        <div className='flex justify-center items-center mb-8 md:mb-16'>
                            <h3 className='font-bold  text-[24px] md:text-[40px] uppercase font-[poppins] text-white'>FILMMAKERS AS MENTORS</h3>
                            {/* <img src={mentors} className='w-[60%] object-cover' alt="" /> */}
                        </div>

                        <div className='flex justify-center items-center'>

                            <Mentors />

                        </div>
                    </div>
                </section>


                {/* video banner */}

                <section className='bg-black'>
                    <div>
                        <video className=" w-[90%] md:w-[60%] mx-auto object-cover" autoPlay muted loop playsInline controls >
                            <source src={videoBanner} type="video/mp4" />
                        </video >
                    </div>
                </section>


                {/* ----------------------------- our mentors work --------------------- */}

                <section className=''>
                    <div className="inset-0 -z-10 size-full bg-gray-50 bg-[linear-gradient(to_right,#_1px,transparent_1px),linear-gradient(to_bottom,#_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="pt-10 md:pt-20 pb-6 md:pb-20 inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,#,transparent)]" >

                            <div className='w-full px-4 md:w-[80%] mx-auto'>

                                <div className='flex justify-center items-center mb-6 md:mb-14'>
                                    <h3 className='font-bold  text-[24px] md:text-[40px]  font-[poppins] text-black'>Mentor's Filmography</h3>
                                    {/* <img src={mentrswork} className='w-[40%] object-cover' alt="" /> */}
                                </div>

                                <div className='px-4' >
                                    <MovieLogo />
                                </div>

                            </div>

                        </div>
                    </div>
                </section>


                {/*--------------------- About us ---------------------*/}

                <section className='pt-10  bg-black font-[poppins]'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>
                        <div className='flex flex-col md:flex-row items-center justify-center'>

                            <div className='w-full md:w-[50%] mx-auto pb-10 '>
                                <div className=''>
                                    <div className='flex flex-col gap-y-3 items-center'>
                                        <div className=''>
                                            <h2 className='font-bold text-[16px] md:text-[22px] text-white mb-6'>The Genesis of Cinema Factory: A Vision Unfolded</h2>
                                            <p className='text-[11px] md:text-[14px]  text-gray-100  leading-5 md:leading-6'>
                                                In 2021, Rajesh Ravindran envisioned Cinema Factory as a transformative force in the film industry, rooted in innovation
                                                and strategic collaboration. What began as an ambitious idea quickly gained momentum, evolving into a thriving hub for
                                                creativity and industry advancement.
                                            </p>
                                        </div>
                                        <div className='text-[11px] md:text-[14px] text-gray-200 flex flex-col gap-y-3 items-center' >
                                            <p className=' leading-5 md:leading-6'>By 2023, this vision reached new heights with the establishment of BigBay Cinema Factory Pvt. Ltd., setting a remarkable benchmark in the world of cinema and entertainment. This milestone reflects Rajesh's unwavering commitment to progress and his ability to turn visionary concepts into impactful realities.</p>
                                            <p className=' leading-5 md:leading-6'>This journey exemplifies Rajesh's dedication to driving advancements across Education, Entertainment, and E-Commerce, positioning Cinema Factory as a pioneering entity shaping the future of the industry.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='w-full md:w-[50%] mx-auto '>
                                <div className='flex justify-center items-center'>
                                    <img src={rajesh_sir} className='w-full md:w-[90%] object-cover' alt='none' />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* ----------------------- Affiliated By   -------------------- */}

                <section className=' '>
                    <div className="pt-10 md:pt-20 pb-10 md:pb-20 top-0 z-[-2] w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" >
                        <div className=' w-full px-4 md:w-[80%] mx-auto'>

                            <div className='flex justify-center'>
                                <h3 className='font-bold  text-[24px] md:text-[40px] font-[poppins] text-black uppercase  '> Affiliated By </h3>
                            </div>

                            <div className='mt-5 md:mt-8' >

                                <div>
                                    <Affiliated />
                                </div>

                            </div>
                        </div>
                    </div>
                </section >


                {/* ----------------------- workshops ------------------------- */}

                {/* <section className=' pt-10 md:pt-20 pb-10 md:pb-20 bg-gray-100'>
                    <div className='w-[80%] mx-auto'>
                        <Workshop />
                    </div>
                </section> */}


                {/* ----------------------- Our brand partners -------------------- */}

                <section className=' '>
                    <div className="pt-10 md:pt-10 pb-10 md:pb-20 top-0 z-[-2] w-screen bg-gradient-to-t from-slate-100 to-white " >
                        <div className=' w-full px-4 md:w-[80%] mx-auto'>

                            <div className='flex justify-center'>
                                <h3 className='font-bold  text-[24px] md:text-[40px]  font-[poppins] text-black uppercase'>Our Brand partners</h3>
                                {/* <img src={our} className='w-[80%]  md:w-[40%] object-cover' alt="" /> */}
                            </div>

                            <div className='mt-5 md:mt-8' >

                                <div>
                                    <Clients />
                                </div>

                            </div>
                        </div>
                    </div>
                </section >


                {/* ----------------------- Our placement partners -------------------- */}

                {/* <section className=' '>
                    <div className="pt-10 md:pt-20 pb-10 md:pb-20 top-0 z-[-2] w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" >
                        <div className=' w-full px-4 md:w-[80%] mx-auto'>

                            <div className='flex justify-center'>
                                <h3 className='font-bold  text-[24px] md:text-[40px]  font-[poppins] text-black uppercase text-center'>Internship & Placement Partners</h3>
                            </div>

                            <div className='mt-5 md:mt-8' >

                                <div>
                                    <Internhip />
                                </div>

                            </div>
                        </div>
                    </div>
                </section >    */}




                {/* ------------------------- Infrastructure ------------------------ */}

                {/* < section className=' pt-10 md:pt-20 pb-10 md:pb-20 bg-white' >
                    <div className='w-[80%] mx-auto'>

                        <div className='flex justify-center items-center mb-6 md:mb-10'>
                            <h3 className='font-bold  text-[24px] md:text-[40px]  font-[poppins] text-black '>Infrastructure </h3>
                        </div>


                        <div>
                            <Infra />
                        </div>


                    </div>
                </section > */}




                {/* --------------------------------- faq ------------------------------ */}


                {/* <section className=' pt-10 md:pt-20 pb-10 md:pb-20 bg-[#1f2228] font-[parta]'>
                    <div className=' w-full px-4 md:w-[80%] mx-auto'>

                       
                        <div className='flex flex-col md:flex-row justify-center items-start gap-y-10'>

                            <div className=' w-full md:w-[30%]'>

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


                            <div className=' w-full md:w-[80%]'>
                                <div className='w-full flex justify-center items-center  '>
                                    <div className='w-full md:px-10'>
                                        <FAQ />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}




                {/* ------------------------- map integration ------------------- */}


                <section className=''>
                    <div className=' w-full'>
                        <div className='flex flex-col md:flex-row items-center gap-y-8 w-full h-full bg-[#f8f8ff]   pb-6 md:pb-0'>


                            <div className=' w-full md:w-[50%] mx-auto'>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9165469023337!2d80.24601647460486!3d13.04098381335422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267006fba7507%3A0x503e1b6f9895ffa7!2sCinema%20Factory%20Academy!5e0!3m2!1sen!2sin!4v1723875566990!5m2!1sen!2sin"
                                    title="map" 
                                    className='focus:outline-none border-none w-full h-[15rem]  md:h-[30rem]'
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                            <div className=' w-full md:w-[50%] h-full mx-auto bg-[#f8f8ff] font-[poppins] px-5 md:px-8'>

                                <div className='flex justify-center'>

                                    <div>
                                        <h2 className='font-bold text-[20px] md:text-[35px] uppercase text-center'>Get In touch With Us!</h2>

                                        <p className='font-[roboto]  text-[12px] md:text-[14px] text-justify md:text-center md:px-10 mt-2 md:mt-5'>
                                            Ready to start your journey in the film and media industry? We're here to help! Whether you have questions about our courses,
                                            need guidance on enrollment, or want to learn more about our academy, our team is just a message away.
                                        </p>

                                        <div className='flex flex-col md:flex-row gap-y-6  items-start md:items-center md:gap-x-32 justify-center mt-8 md:mt-24'>

                                            <div>
                                                <div className='flex items-start gap-x-2'>

                                                    <div className='size-8 md:size-12 rounded-full bg-gray-900  flex justify-center items-center '>
                                                        <MdOutlineMail className='text-white  text-[18px] md:text-[28px]' />
                                                    </div>

                                                    <div className='flex flex-col items-start md:gap-y-1'>
                                                        <p className='font-bold text-[14px] md:text-[18px]'>Email US</p>
                                                        <a href="mailto:contact@cinemafactoryacademy.com" target="_blank" rel="noreferrer" className="  text-[13px] md:text-[14px] text-gray-800 hover:text-gray-600">
                                                            <p className='flex items-center gap-x-1 '>   contact@cinemafactoryacademy.com </p>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>

                                            <div>
                                                <div className='flex items-start gap-x-2'>

                                                    <div className=' size-8 md:size-12 rounded-full bg-gray-900  flex justify-center items-center '>
                                                        <MdOutlinePhoneAndroid className='text-white text-[18px] md:text-[28px]' />
                                                    </div>

                                                    <div className='flex flex-col items-start md:gap-y-1'>
                                                        <p className='font-bold  text-[14px] md:text-[18px] '>Call US</p>
                                                        <a href="tel:+919884683888" target="_blank" className="  text-[13px] md:text-[14px] text-gray-900 hover:text-gray-600">
                                                            <p className='flex items-center gap-x-1 ]'>   +91 9884683888 </p>
                                                        </a>
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





                <section className=' bg-gradient-to-r from-orange-600 to-indigo-400  font-[Prata] '>
                    <div className=" top-0 z-[-2]  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" >



                        <div className='relative'>

                            <div>
                                <img src={stop} className='w-full h-[6rem] md:h-auto object-cover' alt="contact banner" title="Filmmaking Academy In India" loading="lazy" fetchpriority="auto" />
                            </div>

                            <div className='absolute bottom-2 md:bottom-8 w-full flex justify-center items-center  '>
                                <Link to='apply' onClick={topPage}>
                                    <button
                                        class="hover:animate-bounce group font-[poppins] relative font-semibold inline-flex h-6 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000]/30 px-3 md:px-10  border border-white uppercase  text-white"
                                    >
                                        <span
                                            class="absolute md:h-56 w-full rounded-full bg-[#ff0000] group-hover:scale-105 transition-all duration-300 group-hover:size-0"
                                        ></span>
                                        <span class="relative text-[8px] md:text-[14px]  md:tracking-[1px]">Apply Now</span>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </section >

                {/* ----------------------- contact ----------------- */}


                {/* <section className='pt-20 pb-20 bg-gray-950 font-[Aladin]'>

                    <div className='w-[80%] mx-auto'>

                        <div>
                            <h3 className='font-semibold text-[20px] sm:text-[24px] md:text-[4rem] text-center md:tracking-[2px] text-gray-50' data-aos='fade-up'>Learn, Explore, Grow with Us!</h3>
                        </div>

                        <div className='flex items-start justify-between mt-16'>


                            <div className='w-[50%]'>

                                <div>
                                    <img src={banner} className='w-[80%] object-cover ' alt="" />
                                </div>

                            </div>

                            <div className='w-[50%]'>


                                <div className='px-14'>
                                    <ContactForm />
                                </div>

                            </div>
                        </div>

                    </div>

                </section> */}


            </div >

        </>
    )
}

export default Home

