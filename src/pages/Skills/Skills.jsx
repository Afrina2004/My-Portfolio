import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoVercel } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongoose } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const Skills = () => {
    return (
        <div className='max-w-6xl mx-auto bg-black '>

            <div className=' justify-center items-center flex flex-col '>
            <div>
                <h1 className ='text-white font-bold text-4xl p-4'>Skills</h1>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 space-x-4 space-y-4'>
        
        <section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <FaHtml5 className='text-white  text-9xl' />
            <h1 className='text-white text-center'>HTML</h1></section>
 
 <section className='h-[180px] w-[170px] border-[2px]  border-white  justify-center items-center flex flex-col ' >
            <FaCss3 className='text-white  text-9xl' />
            <h1 className='text-white text-center'>CSS</h1></section>

<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <RiTailwindCssFill className='text-white  text-9xl' />
            <h1 className='text-white text-center'>Tailwind</h1></section>


<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <IoLogoJavascript className='text-white  text-9xl' />
            <h1 className='text-white text-center'>JavaScript</h1></section>

<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <SiTypescript className='text-white  text-9xl' />
            <h1 className='text-white text-center'>Typescript</h1></section>

<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <FaReact className='text-white  text-9xl' />
            <h1 className='text-white text-center'>React</h1></section>

<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <FaNodeJs className='text-white  text-9xl' />
            <h1 className='text-white text-center'>Node.js</h1></section>

<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <SiRedux className='text-white  text-9xl' />
            <h1 className='text-white text-center'>Redux</h1></section>

<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <RiNextjsFill className='text-white  text-9xl' />
            <h1 className='text-white text-center'>Next.js</h1></section>

<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <DiMongodb  className='text-white  text-9xl' />
            <h1 className='text-white text-center'>Mongodb</h1></section>

<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <SiMongoose  className='text-white  text-9xl' />
            <h1 className='text-white text-center'>Mongoose</h1></section>

<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <IoLogoVercel  className='text-white  text-9xl' />
            <h1 className='text-white text-center'>Vercel</h1></section>

<section className='h-[180px] w-[170px] border-[2px] border-white  justify-center items-center flex flex-col ' >
            <IoLogoFirebase  className='text-white  text-9xl' />
            <h1 className='text-white text-center'>Firebase</h1></section>

            </div></div>
        </div>
    )
}

export default Skills;
