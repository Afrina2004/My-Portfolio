import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import Navbar from "../Navbar/Navbar"
import { FaNodeJs } from "react-icons/fa"


const BdDetails = () => {
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
      <FaNodeJs className='text-white text-3xl' />
      <h1 className='text-white text-center mt-2 text-sm'>Node.js</h1>
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
            <h2 className="text-2xl font-bold"> Project Name: 🧭 Bd Handicrafts</h2>

            <div>
              <h3 className="text-lg font-semibold">Overview:</h3>
              <p>A modern and responsive web application for managing field work activities, built with React, Vite, TailwindCSS, Node.js and Firebase. Features include form handling, authentication, data fetching, client-side routing, and more.

              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>This project is database connected and we are using CURD operation in this project. </li>
                <li>🔐 User Authentication via Firebase (Register/Login/Logout)</li>
                 <li>Users can login with google, email-password or can sign up with email. </li>
                 <li>Users can see product and can add and remove product from their cart.</li>
                <li>🔍 Smart filtering with match-sorter</li>
                <li>🤖 CAPTCHA with React Simple Captcha</li>
                <li>🧭 SEO support via React Helmet Async</li>
                <li>⚙️ Local Storage Management via localforage</li>
              <li>🔔 Notifications using React Toastify & SweetAlert2</li>
              
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
                    <li>React Router</li>
                    <li>Firebase</li>
                    <li>  Axios </li>
                    <li>React Query</li>
                    <li>SweetAlert2 </li>
                    <li>React Simple Captcha</li>
                 <li>localForage </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium underline">Backend</p>
                  <ul className="list-disc list-inside">
                    <li>Node.js</li>
                  <li>Express</li>
              <li> MongoDB</li>
                    <li> JWT </li>
                    <li>CORS</li>
                    <li>Dotenv</li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="card-actions justify-end pt-6 space-y-4">
              <button
                onClick={() => window.open('https://simple-firebase-ba28e.web.app/', '_blank')}
                className="btn btn-outline w-full"
              >
                🌐 Live Demo
              </button>
             

           

              <div className="w-full">
                <h3 className="text-md font-semibold mb-2">🔗 GitHub Repositories</h3>
                <div className="flex flex-col  gap-4">
                  
                  
                  <button
                    onClick={() => window.open('https://github.com/Afrina2004/Work-Field', '_blank')}
                    className="btn btn-outline w-full"
                  >
                    Frontend Repo
                  </button>

   <button
                    onClick={() => window.open('https://github.com/Afrina2004/Work-Field-Server', '_blank')}
                    className="btn btn-outline w-full"
                  >
                    Backend Repo
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

export default BdDetails;
