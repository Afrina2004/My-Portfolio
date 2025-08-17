import React from 'react'
import { Link } from "react-router-dom";

const Projects =  () => {
    return (
        <div className='max-w-6xl mx-auto bg-black '>
           <div className=' justify-center items-center flex flex-col space-y-4 '>
         
         <div>
                <h1 className ='text-white font-bold text-4xl p-4'>Recent Projects</h1>
            </div>
             <div className=' justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6' >
         
        

        
         <div className="card card-border border-[2px] bg-black w-96 text-white">
  <div className="card-body">
 <h1 className="card-title text-2xl">My Backend Project</h1>
    <p classaName='text-xl'>🚴‍♂️ Bicycle Store Management System</p>
    <div>
        <h2>The Bicycle Store Management System is a modern, feature-rich web application designed to manage the create,get, delete,update,Calculate Revenue from Orders. Built using TypeScript, Express.js, and
                MongoDB with full CRUD functionality. .
</h2>
    </div>
    <div className="card-actions justify-end">
      <Link to='/BackendDetails' className='text-blue-400 hover:text-white underline'>Learn more</Link>
  </div></div>
</div>

 <div className="card card-border border-[2px] bg-black w-96 text-white">
  <div className="card-body">
 <h1 className="card-title text-2xl">Dream House</h1>
    <p classaName='text-xl'>🏡 Dream House – E-Commerce Application</p>
    <div>
        <h2>A responsive and modern real estate listing platform built with React, Vite, Firebase, and Tailwind CSS. This application allows users to browse, filter, and view properties, with integrated authentication and a mobile-first design.
</h2>
    </div>
    <div className="card-actions justify-end">
      <Link to='/DreamHouseDetails' className='text-blue-400 hover:text-white underline'>Learn more</Link>
  </div></div>
</div>


         
         <div className="card card-border border-[2px] bg-black w-96 text-white">
  <div className="card-body">
 <h2 className="card-title text-2xl">Bd Handicrafts</h2>
    <p>🧭 Bd Handicrafts – E-Commerce Application</p>
    <div>
        <h2>A modern, responsive real estate web application built with React, Vite, TailwindCSS and Firebase. This project showcases property listings, user authentication, filtering, and booking/contact functionality.
</h2>
    </div>
    <div className="card-actions justify-end">
       <Link to='/BdDetails' className='text-blue-400 hover:text-white underline'>Learn more</Link>
  </div></div>
</div>
<div className="card card-border border-[2px] bg-black w-96 text-white">
  <div className="card-body">
 <h2 className="card-title text-2xl">Book Vibe</h2>
    <p>📘 Book Vibe – E-Commerce Application</p>
    <div>
        <h2>A modern responsive web app built with React, Tailwind CSS, and Vite. This project combines beautiful UI components with powerful data visualization and interactivity. Perfect for dashboards, design tools, or any creative interface.</h2>
    </div>
    <div className="card-actions justify-end">
      <Link to='/BookVibeDetails' className='text-blue-400 hover:text-white underline'>Learn more</Link>
  </div></div>
</div></div>
<div>
    <h1 className ='text-white font-bold text-2xl p-4'>Group Projects</h1>
            </div>
       <div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

    <div className="card border-[2px] border-white bg-black w-96 text-white">
      <div className="card-body">
        <h2 className="card-title text-2xl">🚲 Bicycle</h2>
        <p className="mt-2">Bicycle Store – E-Commerce Application</p>
        <p className="text-sm mt-2">
          Bicycle Store is a responsive e-commerce platform that allows users to browse, search, and purchase bicycles. It features secure role-based authentication, product filtering, order management, and a streamlined checkout experience.
        </p>
        <div className="card-actions justify-end mt-4">
          <Link to='/BicycleDetails' className='text-blue-400 hover:text-white underline'>
            Learn more
          </Link>
        </div>
      </div>
    </div>

    {/* Add another project card here if needed */}

 <div className="card border-[2px] border-white bg-black w-96 text-white">
      <div className="card-body">
        <h2 className="card-title text-2xl">💊 MediMart</h2>
        <p className="mt-2"> MediMart – Medicine E-Commerce Platform</p>
        <p className="text-sm mt-2">
         MediMart is a full-featured medicine e-commerce platform that enables users to securely browse, search, and purchase medicines online. It includes role-based access for customers and admins, secure authentication, prescription verification, order tracking, and a responsive shopping experience.
        </p>
        <div className="card-actions justify-end mt-4">
          <Link to='/MediMartDetails' className='text-blue-400 hover:text-white underline'>
            Learn more
          </Link>
        </div>
      </div>
    </div>


  </div>
</div>



           </div>
        </div>
    )
}

export default  Projects;
