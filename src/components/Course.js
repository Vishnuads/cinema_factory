import React from "react";
import Slider from "react-slick";


import direction from '../images/syllabus/Direction.jpg'
import cinematography from '../images/syllabus/Cinematography.png'
import vfx from '../images/syllabus/vfx2.jpg'
import VP from '../images/syllabus/VP.png'
import edit from '../images/syllabus/editing.jpg'
import di from '../images/syllabus/DI.jpg'
import acting from '../images/syllabus/acting.jpg'
import photography from '../images/syllabus/still-photography.jpg'
import { Link } from "react-router-dom";


//courses
// import direction from '../images/course/Direction.jpg'
// import cinematography from '../images/course/Cinematography.jpg'
// import vfx from '../images/course/vfx.jpg'
// import edit from '../images/course/editing.jpg'
// import acting from '../images/course/acting.jpg'
// import music from '../images/course/music.jpg'
// import di from '../images/course/DI.jpg'
// import dance from '../images/course/dance.jpg'
// import photography from '../images/course/still_photography.jpg'
// import dubbing from '../images/course/dubbing.jpg'
// import makeup from '../images/course/makeup.jpg'
// import sound from '../images/course/sound_engineering.jpg'



function Course() {

    const settings = {
        className: "center",
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 4000,
        autoplaySpeed: 4000,
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
                    slidesToShow: 4,
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

    function topPage() {
        window.scroll(0, 0)
    }

    return (
        <div className="slider-container  md:w-[98%] mx-auto md:px-14 font-[poppins]">
            <Slider {...settings} className="">



                <div class=" px-2 w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg ">

                    <div class="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                    <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                        <h2 className="uppercase font-semibold text-[18px] mb-4">Direction & Screenplay</h2>
                        <p class=" text-gray-900 tracking-wider text-[12px] font-roboto px-4 text-justify">This one-year film course blends theory and practicals, covering filmmaking basics, story development, direction, industry immersion, practical filming, and concludes with a web series project and comprehensive exams for industry readiness. </p>

                        <div>
                            <Link to='/direction' onClick={topPage}>
                                <button class="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer text-[14px] md:text-[16px] py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full">

                        <div className="w-full h-full relative" >
                            <img src={direction} className="w-full h-[30rem] object-cover" alt="course_image" title="Learn Direction Courses" loading="lazy" fetchpriority="low" />

                            <div className="absolute bottom-0 bg-black/60 py-4 w-full">
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold text-[14px] md:text-[16px]  uppercase text-white  tracking-[1px]">Direction & Screenplay</p>
                                    {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="px-2 w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg ">

                    <div class="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                    <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                        <h2 className="uppercase font-semibold text-[18px] mb-4">Cinematography</h2>
                        <p class=" text-gray-900 tracking-wider text-[12px] font-roboto px-4 text-justify">This one-year program covers about the history of cinema, photography, advanced cinematography, and post-production, culminating industry visits and web series production for comprehensive theoretical and practical experience.</p>
                        <div>
                            <Link to='/cinematography' onClick={topPage}>
                                <button class="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer text-[14px] md:text-[16px] py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full">

                        <div className="w-full h-full relative" >
                            <img src={cinematography} className="w-full h-[30rem] object-cover"  alt="course_image" title="Best Cinematography Institute In India" loading="lazy" fetchpriority="low"  />

                            <div className="absolute bottom-0 bg-black/60 py-4 w-full">
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold text-[14px] md:text-[16px]  uppercase text-white  tracking-[1px]">Cinematography</p>
                                    {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="px-2 w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg ">

                    <div class="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                    <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                        <h2 className="uppercase font-semibold text-[18px] mb-4">Editing</h2>
                        <p class="text-gray-900 tracking-wider text-[12px] font-roboto px-4 text-justify">This one-year editing course covers Avid Media Composer, Final Cut Pro, and DaVinci Resolve, progressing from film editing theory to advanced techniques, AI tools, and practical projects, including editing a web series, for comprehensive training.</p>
                        <div>
                            <Link to='/editing' onClick={topPage}>
                                <button class="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer text-[14px] md:text-[16px] py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full">

                        <div className="w-full h-full relative" >
                            <img src={edit} className="w-full h-[30rem] object-cover" alt="course_image" title="Best Editing Institute In India" loading="lazy" fetchpriority="low"  />

                            <div className="absolute bottom-0 bg-black/60 py-4 w-full">
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold text-[14px] md:text-[16px]  uppercase text-white  tracking-[1px]">Editing</p>
                                    {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="px-2 w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg ">

                    <div class="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                    <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                        <h2 className="uppercase font-semibold text-[18px] mb-4"> Virtual Production</h2>
                        <p class="text-gray-900 tracking-wider text-[12px] font-roboto px-6 text-justify">
                            Learn hands on practical training in the latest industry-standard virtual production technology.
                            Master Unreal Engine in detail with our two new tailor-made courses by our expert mentors.
                        </p>
                        <div>
                            <Link to='/virtual_production' onClick={topPage}>
                                <button class="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer text-[14px] md:text-[16px] py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full">

                        <div className="w-full h-full relative" >
                            <img src={VP} className="w-full h-[30rem] object-cover" alt="course_image" title="Virtual Production Courses" loading="lazy" fetchpriority="low"  />

                            <div className="absolute bottom-0 bg-black/60 py-4 w-full">
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold text-[14px] md:text-[16px]  uppercase text-white  tracking-[1px]">Virtual Production</p>
                                    {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="px-2 w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg ">

                    <div class="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                    <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                        <h2 className="uppercase font-semibold text-[18px] mb-4"> Visual Effects</h2>
                        <p class="text-gray-900 tracking-wider text-[12px] font-roboto px-6 text-justify">
                            This one-year VFX diploma offers a comprehensive journey through the evolution and fundamentals of visual effects, beginning with foundational
                            software like Adobe Photoshop, Illustrator, and After Effects, progressing through advanced techniques in Blender and Nuke. Students gain
                            expertise in advanced rotoscopy, matchmoving, and AI-integrated VFX tools. The program culminates with a two-month internship at a leading
                            VFX studio, providing hands-on experience and professional industry exposure.
                        </p>
                        {/* <div>
                            <Link to='/vfx' onClick={topPage}>
                                <button class="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer text-[14px] md:text-[16px] py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                            </Link>
                        </div> */}
                    </div>

                    <div className="w-full">

                        <div className="w-full h-full relative" >
                            <img src={vfx} className="w-full h-[30rem] object-cover" alt="course_image" title="Best Visual Effects Institute" loading="lazy" fetchpriority="low"  />

                            <div className="absolute bottom-0 bg-black/60 py-4 w-full">
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold text-[14px] md:text-[16px]  uppercase text-white  tracking-[1px]">Visual Effects</p>
                                    {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="px-2 w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg ">

                    <div class="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                    <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                        <h2 className="uppercase font-semibold text-[18px] mb-4"> Acting </h2>
                        <p class="text-gray-900 tracking-wider text-[12px] font-roboto px-4 text-justify">This acting course covers physical and mind-body activities, voice culture, method acting, Navarasam, camera acting, audition techniques, storytelling, script-based realistic acting, character study, collaborative practical classes, acting theory, and portfolio photo shoots.</p>
                        <div>
                            <Link to='/acting' onClick={topPage}>
                                <button class="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer text-[14px] md:text-[16px] py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full">

                        <div className="w-full h-full relative" >
                            <img src={acting} className="w-full h-[30rem] object-cover" alt="course_image" title="Learn Acting Courses In India " loading="lazy" fetchpriority="low"  />

                            <div className="absolute bottom-0 bg-black/60 py-4 w-full">
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold text-[14px] md:text-[16px]  uppercase text-white  tracking-[1px]">Acting</p>
                                    {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="px-2 w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg ">

                    <div class="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                    <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                        <h2 className="uppercase font-semibold text-[18px] mb-4"> Photography </h2>
                        <p class="text-gray-900 tracking-wider text-[12px] font-roboto px-4 text-justify"> This 12-week program covers photography fundamentals, advanced techniques, and film appreciation, culminating in a final project and exhibition, with a certificate upon completion. </p>
                        <div>
                            <Link to='/photography' onClick={topPage}>
                                <button class="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer text-[14px] md:text-[16px] py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full">

                        <div className="w-full h-full relative" >
                            <img src={photography} className="w-full h-[30rem] object-cover" alt="course_image" title=" Photography Institute India" loading="lazy" fetchpriority="low"  />

                            <div className="absolute bottom-0 bg-black/60 py-4 w-full">
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold text-[14px] md:text-[16px]  uppercase text-white  tracking-[1px]"> Photography</p>
                                    {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="px-2 w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg">

                    <div class="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                    <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                        <h2 className="uppercase font-semibold text-[18px] "> DI </h2>
                        <h2 className="uppercase font-semibold text-[18px] mb-4"> (Color Grading) </h2>
                        <p class="text-gray-900 tracking-wider text-[12px] font-roboto px-4 text-justify">This three-month course covers digital imaging, color correction, advanced color grading, VFX integration, and culminates in a final 5-minute film project, with additional classes on film direction, cinematography, and editing.</p>
                        <div>
                            <Link to='/di' onClick={topPage}>
                                <button class="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer text-[14px] md:text-[16px] py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full">

                        <div className="w-full h-full relative" >
                            <img src={di} className="w-full h-[30rem] object-cover" alt="course_image" title="Color Grading Institute India" loading="lazy" fetchpriority="low"  />

                            <div className="absolute bottom-0 bg-black/60  py-4 w-full">
                                <div className="flex justify-center items-center">
                                    <p className="font-semibold text-[14px] md:text-[16px]  uppercase text-white  tracking-[1px]">DI</p>
                                    <p className="font-semibold text-[14px] md:text-[16px]  uppercase text-white  tracking-[1px]">(Color Grading)</p>
                                    {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* <div className="w-[60%] mx-auto h-full rounded-md">

                    <div className="flex  h-screen">


                        <div className="w-[50%]  bg-gray-900  px-6 py-16 flex flex-col justify-between">
                            <div>
                                <div className="border border-red-600 w-full mb-10"></div>
                                <h3 className="text-white text-[28px] capitalize font-semibold mb-10">Direction</h3>
                                <p className="font-[roboto] text-[14px] text-gray-100 leading-7">
                                    This one-year film course combines theory and practice, starting with six months on cinema basics,
                                    story development, screenplay writing, and direction. The final six months focus on industry immersion
                                    through production house visits, guest lectures, and practical filming exercises. The course concludes with assignments,
                                    final projects on shooting web series, and comprehensive exams to ensure hands-on experience and industry readiness.
                                </p>
                                <div className="mt-16 flex items-center gap-x-10">
                                    <div>
                                        <button className="bg-[#ff0000] px-8 py-2.5 rounded-md font-semibold text-[14px] uppercase text-white hover:scale-95 duration-300 hover:bg-white hover:text-[#ff0000]">Apply Now</button>
                                    </div>
                                    <div>
                                        <button className="border border-[#ff0000] font-semibold text-[14px] uppercase text-[#ff0000] px-8 py-2.5 rounded-md hover:scale-95 duration-300 hover:bg-[#ff0000] hover:text-white">Explore More</button>
                                    </div>
                                </div>
                                <div className="border border-red-600 w-full mt-14"></div>
                            </div>
                            <div className="mt-16 flex justify-center items-center">
                                <button className="border border-white font-semibold uppercase px-10 py-3 rounded-lg text-white text-[14px]">Explore All Courses</button>
                            </div>
                        </div>

                        <div className="w-[50%] h-full">
                            <div className="relative bg-red-600 h-full">
                                <img src={banner1} alt="Banner 1" className="w-full h-screen object-cover" />
                                <div className="absolute bottom-0 py-10 awssld__caption text-white bg-[#ff0000]/30 rounded-none w-full">
                                    <div className="flex flex-col  items-center">
                                        <p className="font-semibold text-[18px] tracking-[1px]">Direction</p>
                                        <p className="text-[14px] text-yellow-300 mt-2">Duration : 1 Year Course</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div> */}





            </Slider>
        </div>











    );
}

export default Course;




