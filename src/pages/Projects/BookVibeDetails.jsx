import React from 'react';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import Navbar from "../Navbar/Navbar"
import { Link } from "react-router-dom";


const BookVibeDetails = () => {
  return (
    <div className=" mx-auto bg-black">
     <div ><Navbar></Navbar></div>
    <div className=" mx-auto bg-black text-white py-10 px-4">
         
        <div className='max-w-4xl mx-auto'>
      <div className=" flex justify-center items-center flex-col space-y-6">
        <div className="card card-border border-[2px] w-full md:w-4/4 p-6 rounded-lg shadow-lg">
       <div className='flex justify-center gap-4 '>
  

  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
    <FaReact className='text-white text-3xl' />
    <h1 className='text-white text-center mt-2 text-sm'>React</h1>
  </section>

  
  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
              <RiTailwindCssFill className='text-white  text-3xl' />
              <h1 className='text-white text-center'>Tailwind Css</h1></section>

  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
      <TbBrandVite className='text-white text-3xl' />
      <h1 className='text-white text-center mt-2 text-sm'>Vite</h1>
    </section>
</div>

          <div className="card-body space-y-6">
            <h2 className="text-2xl font-bold"> Project Name:📘 Book Vibe</h2>

            <div>
              <h3 className="text-lg font-semibold">Overview:</h3>
              <p>A modern responsive web app built with React, Tailwind CSS, and Vite. This project combines beautiful UI components with powerful data visualization and interactivity. Perfect for dashboards, design tools, or any creative interface.

              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>⚛️ React 18 with Vite for blazing fast development</li>
                <li>💨 Tailwind CSS + DaisyUI for rapid styling</li>
                <li>🧭 React Router DOM for seamless navigation</li>
                <li>📦 Local storage with LocalForage</li>
                <li>📊 Interactive charts using Recharts</li>
                <li>🔍 Fuzzy search via Match Sorter</li>
                <li>🧩 Toasts and alerts with SweetAlert2 & React Toastify</li>
                <li>☁️ Firebase Hosting Ready</li>
                <li>⚙️ Local Storage Management via localforage</li>
              <li>🧹 Strict linting via ESLint
</li>
              
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Tech Stack:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium underline">Frontend</p>
                  <ul className="list-disc list-inside">
                    <li>React</li>
                     <li>Vite</li>
                    <li>Tailwind CSS, DaisyUI</li>
                    <li>React Router Dom</li>
                      <li>SweetAlert2</li>
                      <li>React Toastify</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium underline">Utils</p>
                  <ul className="list-disc list-inside">
                    <li>Match Sorter</li>
                       <li>Sort-by</li>
                          <li>LocalForage</li>
                  
                  </ul>
                </div>
                <div>
                  <p className="font-medium underline">Dev Tools</p>
                  <ul className="list-disc list-inside">
                    <li>ESLint</li>
                       <li>eslint-plugin-react</li>
                          <li>eslint-plugin-react-hooks</li>
                          <li>@vitejs/plugin-react </li>
                  
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-actions justify-end pt-6 space-y-4">
              <button
                onClick={() => window.open(' https://beamish-klepon-63aa7d.netlify.app/', '_blank')}
                className="btn btn-outline w-full"
              >
                🌐 Live Demo
              </button>
             

           

              <div className="w-full">
                <h3 className="text-md font-semibold mb-2">🔗 GitHub Repositories</h3>
                <div className="flex flex-col  gap-4">
                  
                  
                  <button
                    onClick={() => window.open('https://github.com/Afrina2004/b9a8-book-vibe-Afrina2004?tab=readme-ov-file', '_blank')}
                    className="btn btn-outline w-full"
                  >
                    Frontend Repo
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div></div></div>
  );
};

export default BookVibeDetails;
