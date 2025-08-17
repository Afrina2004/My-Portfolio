import React from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import Navbar from "../Navbar/Navbar"

const DreamHouseDetails = () => {
  return (
    <div className=" mx-auto bg-black">
     <div ><Navbar></Navbar></div>
    <div className=" mx-auto bg-black text-white py-10 px-4">
         
        <div className='max-w-4xl mx-auto'>
      <div className=" flex justify-center items-center flex-col space-y-6">
        <div className="card card-border border-[2px] w-full md:w-4/4 p-6 rounded-lg shadow-lg">
       <div className='flex justify-center gap-4'>
  

  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
    <FaReact className='text-white text-3xl' />
    <h1 className='text-white text-center mt-2 text-sm'>React</h1>
  </section>

  
  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
              <IoLogoFirebase  className='text-white  text-3xl' />
              <h1 className='text-white text-center'>Firebase</h1></section>

  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
      <DiMongodb className='text-white text-3xl' />
      <h1 className='text-white text-center mt-2 text-sm'>Mongodb</h1>
    </section>
</div>

          <div className="card-body space-y-6">
            <h2 className="text-2xl font-bold"> Project Name:🏡 Dream House</h2>

            <div>
              <h3 className="text-lg font-semibold">Overview:</h3>
              <p>A responsive and modern real estate listing platform built with React, Vite, Firebase, and Tailwind CSS. This application allows users to browse, filter, and view properties, with integrated authentication and a mobile-first design.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>🔐 User Authentication via Firebase (Register/Login/Logout)</li>
                <li>Users can login with Google, GitHub, email-password or can sign up with email. </li>
                <li>Users can update their profile. </li>
                <li>Users can view properties   by login as the information page is a private route. </li>
                <li>🏠 Property Listings with sorting and filtering</li>
                <li>🔎 Search by keyword, location, price, etc.</li>
                <li>🖼️ Swiper Slider for property image galleries</li>
                <li>☁️ Firebase Hosting Ready</li>
                <li>⚙️ Local Storage Management via localforage</li>
              <li>🔔 Toast Notifications using react-toastify</li>
              
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Tech Stack:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium underline">Frontend</p>
                  <ul className="list-disc list-inside">
                    <li>React.js</li>
                     <li>Vite</li>
                    <li>Tailwind CSS, DaisyUI</li>
                    <li>React Router Dom</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium underline">Backend</p>
                  <ul className="list-disc list-inside">
                    <li>Firebase</li>
                  
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
                       <li>PostCss</li>
                          <li>Vite</li>
                  
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-actions justify-end pt-6 space-y-4">
              <button
                onClick={() => window.open(' https://real---estate---project.web.app', '_blank')}
                className="btn btn-outline w-full"
              >
                🌐 Live Demo
              </button>
             

           

              <div className="w-full">
                <h3 className="text-md font-semibold mb-2">🔗 GitHub Repositories</h3>
                <div className="flex flex-col  gap-4">
                  
                  
                  <button
                    onClick={() => window.open('https://github.com/Afrina2004/Real-Estate-Project', '_blank')}
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

export default DreamHouseDetails;
