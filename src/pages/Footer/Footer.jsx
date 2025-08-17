import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () =>{
    return (
        <div>

<footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10">
  <nav className=" gap-4">
    <a className="link link-hover text-3xl font-bold text-white">Contact with me</a>
     <a className="text-white text-xl">Here is some contact information where you can contact.</a>
 <section className='flex space-x-2'><MdPhoneInTalk className='text-white text-2xl' />
 <a className="text-white text-xl">Phone : +7187447336</a>
 </section>

<section className='flex space-x-2'><MdEmail className='text-white text-2xl' />
  <a className="text-white text-xl">Email : Khanamafrina700@gmail.com</a>
 </section>

  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4 text-white">
      <a>
        <Link to='https://www.linkedin.com/in/afrina-khanam-277415290'> <a >
        <h1 className='text-4xl font-bold'>ln</h1>
      </a></Link> 
      </a>
      <Link to='https://github.com/Afrina2004/Real-Estate-Project/blob/main/index.html' className='link link-hover'> <a >
        <FaGithub className='text-4xl' />
      </a></Link> 
     <Link to='https://github.com/Afrina2004/Real-Estate-Project/blob/main/index.html' className='link link-hover'> <a >
        <FaFacebookF  className='text-4xl' />
      </a></Link> 
    </div>
  </nav>
  <aside>
    <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved by Mossammat Afrina Khanam</p>
  </aside>
</footer>
<div>
            </div>
        </div>
    )
}

export default Footer;
