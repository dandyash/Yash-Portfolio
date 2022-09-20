import Link from 'next/link';
import { useEffect } from 'react';
const Header = () => {

    useEffect(() => {

        const headerChange = () => {
            const element = document.getElementById("header_logo");
            const header = document.getElementById("main_header");
            if (window.scrollY > 10) {
                element.classList.remove("text-7xl");
                element.classList.add("text-6xl");
                header.classList.add("shadow-md");
            } else {
                header.classList.remove("shadow-md");
                element.classList.remove("text-6xl");
                element.classList.add("text-7xl");
            }
        };

        window.addEventListener("scroll", headerChange);

        return () => {
            window.removeEventListener("scroll", headerChange);
        }
    }, [])


    return (
        <header id='main_header' className='py-1 fixed inset-x-0 top-0 z-50 bg-transparent dark:shadow-black/50'>
            <div className="wrapper">
                <div className="flex items-center justify-between">
                    <div className="">
                        {/* <img className='dark:hidden block' src="/images/logo-light.png" alt="dv" />
                        <img className='dark:block hidden' src="/images/logo-dark.png" alt="dv" /> */}
                        <Link href="/"><a className='font-Caveat text-7xl transition-[font-size] duration-300' id='header_logo'>Yash</a></Link>
                    </div>
                    <div className='flex items-center gap-10'>
                        <ul className='md:flex hidden items-center gap-10 capitalize header_nav'>
                            <li><Link href="/"><a className=''>home</a></Link></li>
                            <li><Link href="/about"><a className=''>About</a></Link></li>
                            <li><Link href="/portfolio"><a className=''>Portfolio</a></Link></li>
                            <li><Link href="/"><a className=''>Contact</a></Link></li>
                        </ul>
                        <button onClick={() => { document.querySelector("html").classList.toggle("dark"); }} className='hover:text-primary transition-all duration-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="dark:hidden block h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="dark:block hidden h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header