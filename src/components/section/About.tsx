
import { FaNodeJs, FaReact, FaAws, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiNestjs, SiJavascript, SiTypescript, SiMongodb, SiMysql, SiRedis, SiFirebase, SiCplusplus, SiExpress, } from "react-icons/si";

const About = () => {
  return (
    <>
      <div className='mb-8 py-9 flex flex-row items-center'>
        <p className='text-justify'>I'm a web developer with 3 years of experience, specializing in backend development. I have a strong focus on building scalable, efficient, and reliable systems using technologies like Node.js, NestJS, and MongoDB. My passion lies in solving complex problems and creating seamless integrations to power robust applications.</p>
        {/* <div className='md:ml-auto '>
          <img className='h-48 w-48 object-cover object-center rounded-full' src="/profile.jpg" alt="profile_pic" />
        </div> */}
      </div>



      <div className='mb-8'>
        <h2>Tech stack</h2>
        <div className="flex flex-col space-y-4 text-lg items-center">
          <div className='text-sm'>

            <div className="flex space-x-6 flex-wrap justify-center justify-center">
              <div className='flex fles-row items-center p-a'>
                <SiTypescript color="#3178C6" size={18} />
                <p className='ml-1'>TypeScript</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <SiJavascript color="#F7DF1E" size={18} />
                <p className='ml-1'>JavaScript</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <SiCplusplus color="#00599C" size={18} />
                <p className='ml-1'>C++</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <FaHtml5 color="#E34F26" size={18} />
                <p className='ml-1'>HTML</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <FaCss3Alt color="#1572B6" size={18} />
                <p className='ml-1'>CSS</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <FaGitAlt color="#F05032" size={18} />
                <p className='ml-1'>Git</p>
              </div>
            </div>
            <div className="flex space-x-6 flex-wrap justify-center">
              <div className='flex fles-row items-center p-a'>
                <FaNodeJs color="#339933" size={18} />
                <p className='ml-1'>Node.js</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <SiNestjs color="#E0234E" size={18} />
                <p className='ml-1'>NestJS</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <SiExpress color="#000000" size={18} />
                <p className='ml-1'>Express</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <FaReact color="#61DAFB" size={18} />
                <p className='ml-1'>React</p>
              </div>
            </div>
            <div className="flex space-x-6 flex-wrap justify-center">
              <div className='flex fles-row items-center p-a'>
                <FaAws color="#FF9900" size={18} />
                <p className='ml-1'>AWS</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <SiMysql color="#4479A1" size={18} />
                <p className='ml-1'>MySQL</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <SiMongodb color="#47A248" size={18} />
                <p className='ml-1'>MongoDB</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <SiRedis color="#DC382D" size={18} />
                <p className='ml-1'>Redis</p>
              </div>
              <div className='flex fles-row items-center p-a'>
                <SiFirebase color="#FFCA28" size={18} />
                <p className='ml-1'>Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-8'>
        <h2>Experience</h2>
        <div className='flex flex-col justify-center'>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default About