
import Afrin from '../../../public/Afrin.pdf'
const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-black text-white">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold">About Me</h2>

        <p className="text-lg leading-relaxed">
           I’m <strong>Mossammat Afrina Khanam</strong>, a passionate{" "}
          <strong>Full-Stack Web Developer</strong> with a strong focus on building
          efficient, scalable, and user-friendly web applications.
        </p>

        <p className="text-lg leading-relaxed">
          I specialize in the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js)
          and enjoy turning complex problems into clean, elegant solutions.
          I’m skilled in <strong>TypeScript, Next.js, Redux Toolkit</strong>, and styling libraries
          like <strong>Tailwind CSS</strong> and <strong>DaisyUI</strong>.
        </p>

        <p className="text-lg leading-relaxed">
          I have successfully completed my web development course from{" "}
          <strong>Programming Hero</strong>, where I built multiple full-stack projects
          and gained hands-on experience with real-world application development.
        </p>

        <p className="text-lg leading-relaxed">
          Whether working on frontend interfaces or backend APIs, I always aim to write
          clean, maintainable code that delivers a seamless user experience. I'm committed
          to continuous learning and staying updated with modern web technologies.
        </p>

        <p className="text-lg leading-relaxed">
           Outside of coding, I enjoy exploring UI/UX design trends, solving real-world problems,
          and sharing knowledge with others.
        </p>


<div className="w-full">
              
                <div className="flex justify-center p-4 gap-4">
                  <button
                    onClick={() => window.open('https://acrobat.adobe.com/id/urn:aaid:sc:AP:eb3d0e02-8c98-4d6d-97fe-658dbc477ea7', '_blank')}
                    className="btn btn-outline  w-[200px]"
                  >
                  Certificate
                  </button>
         
                <a
  href="/Afrin.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline w-[200px]"
>
  Resume
</a>
                </div>
              </div>
       
      </div>
    </div>
  );
};

export default About;
