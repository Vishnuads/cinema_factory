import React from 'react'


import aranthai from '../images/mentors/Aranthai_maniyan.jpg'
import stanley from '../images/mentors/ss_stanly.jpg'
import rajdeep from '../images/mentors/a_rajdeep.jpg'
import nassar from '../images/mentors/nassar.png'
import cjraj from '../images/mentors/CJ_rajkumar.jpg'
import ramesh from '../images/mentors/Rameshkumar.jpg'
import madhu from '../images/mentors/Madhu_ambat.jpg'
import manoj from '../images/mentors/Manoj_Paramahamsa.jpg'
import prasanna from '../images/mentors/pra.jpg'
import raja from '../images/mentors/Raja_mohhamed.jpg'
import arvind from '../images/mentors/Aravind.jpg'
import muniraj from '../images/mentors/muniraj.jpg'
import shiv from '../images/mentors/shiv vfx.jpg'
import sara from '../images/mentors/chandra.jpg'
import bebin from '../images/mentors/Antony_bebin.jpg'
import psvinoth from '../images/mentors/ps_vinoth_raj.png'
import daimond from '../images/mentors/daimond_babu.jpg'
import { Link } from 'react-router-dom'


const Mentors = () => {

    function topPage() {
        window.scroll(0, 0)
    }

    return (
        <div>
            <div className='flex justify-center items-center'>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-y-8'>

                    {/* manoj */}

                    <div>
                        <div>
                            {/* <Link to='manoj_paramahamsa' onClick={topPage}> */}
                            <div className='flex justify-center items-center'>
                                <img src={manoj} className='w-[88%] object-cover rounded-xl border-b border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Virtual Production Courses" loading="lazy" fetchpriority="auto"  />
                            </div>
                            {/* </Link> */}

                        </div>
                    </div>


                    {/* madhu */}

                    <div>
                        <div>
                            {/* <Link to='madhu_ambat' onClick={topPage}> */}
                            <div className='flex justify-center items-center'>
                                <img src={madhu} className='w-[88%] object-cover rounded-xl border-b border-gray-400 hover:scale-95 duration-300' alt="mentor" title=" Best Cinematography Institute In India" loading="lazy" fetchpriority="auto"  />
                            </div>
                            {/* </Link> */}

                        </div>
                    </div>



                    {/* A. nassar */}

                    <div>
                        <div>
                            {/* <Link to='aranthai_maniyan'> */}
                            <div className='flex justify-center items-center'>
                                <img src={nassar} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300'  alt="mentor" title="Learn Acting Courses In India" loading="lazy" fetchpriority="auto"   />
                            </div>
                            {/* </Link> */}

                        </div>
                    </div>

                    {/* A. aranthi */}

                    <div>
                        <div>
                            {/* <Link to='aranthai_maniyan'> */}
                            <div className='flex justify-center items-center'>
                                <img src={aranthai} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Top Direction & Screenplay Courses" loading="lazy" fetchpriority="auto"  />
                            </div>
                            {/* </Link> */}

                        </div>
                    </div>

                    {/*  ps_vinoth */}

                    <div>
                        <div>
                            {/* <Link to='bebin'> */}
                            <div className='flex justify-center items-center'>
                                <img src={psvinoth} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Learn Direction Courses" loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>


                    {/* A.Rajdeep */}

                    <div>
                        <div>
                            {/* <Link to='bebin'> */}
                            <div className='flex justify-center items-center'>
                                <img src={rajdeep} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Learn Direction Courses" loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>

                    {/* ss stanley */}

                    {/* <div>
                        <div>
                            <Link to='stanley' onClick={topPage}>
                            <div className='flex justify-center items-center'>
                                <img src={stanley} className='w-[88%] object-cover rounded-xl border-b border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Learn Direction Courses" loading="lazy" fetchpriority="auto" />
                            </div>
                            </Link>

                        </div>
                    </div> */}


                    {/* CJ Raj Kumar */}
                    <div>
                        <div>
                            {/* <Link to='cj_rajkumar'> */}
                            <div className='flex justify-center items-center'>
                                <img src={cjraj} className='w-[88%] object-cover rounded-xl border-b border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Cinematography Courses " loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}

                        </div>
                    </div>


                    {/* A. Ramesh Kumar */}

                    <div>
                        <div>
                            {/* <Link to='ramesh_kumar'> */}
                            <div className='flex justify-center items-center'>
                                <img src={ramesh} className='w-[88%] object-cover rounded-xl border-b border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Best Cinematography Institute In India" loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}

                        </div>
                    </div>


                    {/* prasanna */}

                    <div>
                        <div>
                            {/* <Link to='/prasanna_venkatesh'> */}
                            <div className='flex justify-center items-center'>
                                <img src={prasanna} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Fashion Photographer training" loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}

                        </div>
                    </div>


                    {/* Raja */}

                    <div>
                        <div>
                            {/* <Link to='raja_mohammad'> */}
                            <div className='flex justify-center items-center'>
                                <img src={raja} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Top Film Editing Courses" loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}

                        </div>
                    </div>

                    {/* Arvind */}

                    <div>
                        <div>
                            {/* <Link to='aravind' onClick={topPage}> */}
                            <div className='flex justify-center items-center'>
                                <img src={arvind} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Top VFX Courses" loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}

                        </div>
                    </div>


                    

                    {/* shiv */}

                    <div>
                        <div>
                            <div className='flex justify-center items-center'>
                                <img src={shiv} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Jobs in Virtual production" loading="lazy" fetchpriority="auto" />
                            </div>

                        </div>
                    </div>

                    {/* muniraj */}

                    <div>
                        <div>
                            {/* <Link to='muniraj'> */}
                            <div className='flex justify-center items-center'>
                                <img src={muniraj} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Top VFX Courses in India" loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>


                    {/* saravanan */}

                    <div>
                        <div>
                            {/* <Link to='contact'> */}
                            <div className='flex justify-center items-center'>
                                <img src={sara} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Acting Institute India" loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>


                    {/* bebin */}

                    <div>
                        <div>
                            {/* <Link to='bebin'> */}
                            <div className='flex justify-center items-center'>
                                <img src={bebin} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Color Grading Courses India" loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>



                    {/* daimond */}

                    <div>
                        <div>
                            {/* <Link to='contact'> */}
                            <div className='flex justify-center items-center'>
                                <img src={daimond} className='w-[88%] object-cover rounded-xl border border-gray-400 hover:scale-95 duration-300' alt="mentor" title="Learn Direction Courses" loading="lazy" fetchpriority="auto" />
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Mentors
