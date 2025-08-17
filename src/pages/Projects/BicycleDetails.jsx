import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import Navbar from "../Navbar/Navbar"

const BicycleDetails = () => {
  return (
    <div className=" mx-auto bg-black">
     <div ><Navbar></Navbar></div>
    <div className=" mx-auto bg-black text-white py-10 px-4 ">
         
        <div className='max-w-4xl mx-auto'>
      <div className=" flex justify-center items-center flex-col space-y-6">
        <div className="card card-border border-[2px] w-full md:w-4/4 p-6 rounded-lg shadow-lg">
       <div className='flex justify-center gap-4'>
  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
    <SiTypescript className='text-white text-3xl' />
    <h1 className='text-white text-center mt-2 text-sm'>TypeScript</h1>
  </section>

  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
    <FaReact className='text-white text-3xl' />
    <h1 className='text-white text-center mt-2 text-sm'>React</h1>
  </section>

  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
    <FaNodeJs className='text-white text-3xl' />
    <h1 className='text-white text-center mt-2 text-sm'>Node.js</h1>
  </section>

  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
    <SiRedux className='text-white text-3xl' />
    <h1 className='text-white text-center mt-2 text-sm'>Redux</h1>
  </section>

  <section className='h-[120px] w-[100px] flex flex-col justify-center items-center'>
      <DiMongodb className='text-white text-3xl' />
      <h1 className='text-white text-center mt-2 text-sm'>Mongodb</h1>
    </section>
</div>

          <div className="card-body space-y-6">
            <h2 className="text-2xl font-bold"> Project Name:🚲 Bicycle Store</h2>

            <div className="space-y-1 text-sm">
              <p><strong>Type:</strong> Group Project</p>
              <p><strong>Role:</strong> Group Leader</p>
              <p><strong>Team Size:</strong> 6 members</p>
              <p><strong>Tools/Technologies:</strong> React.js,Redux, Node.js, TypeScript, MongoDB</p>
              <p><strong>Duration:</strong> 10 Days</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Overview:</h3>
              <p>
                Bicycle Store is a responsive e-commerce platform that allows users to browse, search, and purchase bicycles.
                It features secure role-based authentication, product filtering, order management, and a streamlined checkout experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>User Authentication: Role-based login with JWT and bcrypt</li>
                <li>Public Pages: Home, About, and dynamic bicycle listings with filtering</li>
                <li>Private Routes: Checkout & dashboards for users and admins</li>
                <li>Admin Dashboard: Full CRUD for users, products, and orders</li>
                <li>User Dashboard: Order tracking, profile updates, and password changes</li>
                <li>Secure Payments: Stripe or ShurjoPay integration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Tech Stack:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium underline">Frontend</p>
                  <ul className="list-disc list-inside">
                    <li>React.js</li>
                     <li>Redux</li>
                    <li>Tailwind CSS</li>
                    <li>React Router</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium underline">Backend</p>
                  <ul className="list-disc list-inside">
                    <li>Node.js & Express</li>
                    <li>MongoDB</li>
                    <li>JWT, bcryptjs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">My Responsibilities as Group Leader:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Led a team of 6 members from start to finish</li>
                <li>Planned the project timeline and coordinated weekly sprints</li>
                <li>Assigned tasks based on team members' strengths</li>
                <li>Facilitated daily stand-ups and resolved blockers</li>
                <li>Managed version control using GitHub branching strategies</li>
                <li>Oversaw the final presentation and ensured project quality</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Challenges & Solutions:</h3>
              <p className="text-sm">
                We faced time zone conflicts among team members, which made real-time collaboration difficult. I introduced a Trello board and encouraged asynchronous stand-ups. This improved task visibility and allowed smoother coordination.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Outcome:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Delivered the project on time</li>
                <li>Successfully met all functional and UI/UX requirements</li>
                <li>Received positive feedback from our mentor</li>
                <li>Improved my leadership, communication, and agile project management skills</li>
              </ul>
            </div>
<div><h1 className="text-sm space-y-1">
  <p>🔐 <strong>Admin</strong>: mina@mail.com / 1234</p>
  <p>👤 <strong>User</strong>: nina@mail.com / 1234</p>
</h1>
</div>
            <div className="card-actions justify-end pt-6 space-y-4">
              <button
                onClick={() => window.open('https://bicyclestore.netlify.app/', '_blank')}
                className="btn btn-outline w-full"
              >
                🌐 Live Demo
              </button>
             

              <div className="w-full">
                <h3 className="text-md font-semibold mb-2">🔗 GitHub Repositories</h3>
                <div className="flex flex-col  gap-4">
                  <button
                    onClick={() => window.open('https://github.com/Marg0n/Bicycle/tree/AfrinaKhanam', '_blank')}
                    className="btn btn-outline w-full"
                  >
                    Frontend Repo
                  </button>
                  <button
                    onClick={() => window.open('https://github.com/Afrina2004/Assignment4Backend', '_blank')}
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

export default BicycleDetails;
