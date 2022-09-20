/* eslint-disable @next/next/no-img-element */
// import Link from 'next/link';
// import Image from 'next/image';
import TypewriterComponent from "typewriter-effect"
import { Fade, Slide } from "react-awesome-reveal"

export default function Home() {
    return (
        <div className="">
            <div className="wrapper">

                {/* Hero Section Start */}
                <div className="flex md:flex-row flex-col-reverse items-center justify-evenly h-screen">

                    {/* Hero Description Section Start */}
                    <div className="md:w-full flex flex-col gap-5">
                        <Slide direction="left" cascade damping={0.25} triggerOnce>
                            <h1 className="text-5xl">Hi, </h1>
                            <h2 className="text-7xl" >I&apos;m <span className="font-medium text-primary">Yash</span></h2>
                            <h2 className="text-5xl text-primary opacity-75 font-medium">
                                <TypewriterComponent options={{
                                    strings: ['Full Stack Developer', 'Software Engineer', 'UI/UX Developer'],
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: "text-black dark:text-gray-50 "
                                }} />
                            </h2>
                            {/* <p className="text-xl">Hi, I&apos;m Yash a Full-Stack Web Developer from India.<br />I help brands transform their ideas into high quality products</p> */}
                            {/* Hero Social Links Section Start */}
                            <div className="hero_socials flex items-center gap-5 pt-5">
                                <a href="mailto:dandyash0502@gmail.com" target="_blank" rel="noreferrer">
                                    <svg width="30px" height="30px" fill="currentcolor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.574 5.286l7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/yash-dand-718a411b9/" target="_blank" rel="noreferrer">
                                    <svg width="30px" height="30px" fill="currentcolor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/dandyash" target="_blank" rel="noreferrer">
                                    <svg width="30px" height="30px" fill="currentcolor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1" />
                                    </svg>
                                </a>
                            </div>
                            {/* Hero Social Links Section End */}
                        </Slide>
                    </div>
                    {/* Hero Description Section End */}

                </div>
                {/* Hero Section End */}

                {/* Technology Section Start */}
                <div className="h-screen flex items-center">
                    <Slide className="w-2/5" triggerOnce>
                        <div className="aspect-square relative flex items-center justify-center" id='home_hero_img_div'>
                            {/* Center Profile Image */}
                            <div className="home_hero_img relative w-4/6 aspect-square border-dashed dark:border-gray-500 md:border-2 border rounded-full">
                                <img src="/images/profile.jpg" alt="" className="rounded-full" />
                            </div>
                            {/* Orbit Component Start */}

                            {/* HTML */}
                            <div className="tech_orbit inner items-start justify-center">
                                <img src="/images/html.jpg" alt="" />
                            </div>

                            {/* CSS */}
                            <div className="tech_orbit inner items-center justify-start">
                                <img src="/images/css.jpg" alt="" />
                            </div>

                            {/* JS */}
                            <div className="tech_orbit inner items-center justify-end">
                                <img src="/images/javascript.jpg" alt="" />
                            </div>

                            {/* Tailwind CSS */}
                            <div className="tech_orbit inner items-end justify-center">
                                <img src="/images/tailwindcss.jpg" alt="" />
                            </div>

                            {/* Node JS */}
                            <div className="tech_orbit outer items-end justify-start">
                                <img src="/images/node.jpg" alt="" />
                            </div>

                            {/* Mongo DB */}
                            <div className="tech_orbit outer items-start justify-end">
                                <img src="/images/mongo.jpg" alt="" />
                            </div>

                            {/* React JS */}
                            <div className="tech_orbit outer items-start justify-starts">
                                <img src="/images/react.jpg" alt="" />
                            </div>

                            {/* Express */}
                            <div className="tech_orbit outer items-end justify-end">
                                <img src="/images/express.jpg" alt="" />
                            </div>

                            {/* Orbit Component End */}

                        </div>
                    </Slide>

                    <div className="md:w-3/5 flex flex-col gap-10 pl-36">
                        <Fade cascade damping={0.25} triggerOnce>
                            <h2 className="text-7xl font-medium text-primary">Technologies I work with.</h2>
                            <div className="technologies_tags_container flex items-center gap-x-3 gap-y-6 flex-wrap">
                                <Fade cascade damping={0.25} triggerOnce>
                                    <span>HTML / HTML 5</span>
                                    <span>CSS / CSS 3</span>
                                    <span>JavaScript</span>
                                    <span>jQuery</span>
                                    <span>php</span>
                                    <span>Tailwind CSS</span>
                                    <span>Bootsrap 5</span>
                                    <span>React JS</span>
                                    <span>Node JS</span>
                                    <span>Next JS</span>
                                    <span>Mongo DB</span>
                                    <span>MySQL</span>
                                    <span>Github</span>
                                    {/* <span>Android</span> */}
                                    <span>C / C++</span>
                                    <span>Java</span>
                                    <span>Python</span>
                                </Fade>
                            </div>
                        </Fade>
                    </div>
                </div>
                {/* Technology Section End */}

                {/* Portfolio Section Start */}
                <div className="flex  items-center">
                    <div className="md:w-1/2 flex flex-col gap-10 pt-5">
                        <Fade cascade damping={0.25} triggerOnce>
                            <h2 className="text-7xl font-medium text-primary"></h2>
                        </Fade>
                    </div>
                </div>
                {/* Portfolio Section End */}

            </div>
        </div>
    )
}
