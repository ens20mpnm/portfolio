import React from 'react'
import Carousel from './Carousel'

export default function Home(){
  return (
    <>
      <section className="top-section">
        <section className="color-top-section">
          <header className="header">
            <div className="intro">
              <h1>Hi! I'm <span>Matilda Pallin</span> 👋</h1>
              <p>
                I´m an aspiring Full-Stack Developer with experience in frontend, backend, and a strong passion for UX/UI.
              </p>
              <div className="connect">
                <a href="mailto:matilda.pallin98@gmail.com" className="connect-btn">Contact me</a>
              </div>
            </div>
            <div className="big-profile-pic">
              <img src="/images/Ellipse_10.png" alt="Avatar" />
            </div>
          </header>

          <section className="skills">
            {[
              {src:'/images/figma.png', label:'Figma'},
              {src:'https://cdn.worldvectorlogo.com/logos/typescript.svg', label:'Typescript'},
              {src:'https://cdn.worldvectorlogo.com/logos/javascript-1.svg', label:'Javascript'},
              {src:'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg', label:'Tailwindcss'},
              {src:'https://cdn.worldvectorlogo.com/logos/git-icon.svg', label:'Git'},
              {src:'https://cdn.worldvectorlogo.com/logos/react-2.svg', label:'React'},
              {src:'https://cdn.worldvectorlogo.com/logos/next-js.svg', label:'Next.js'},
              {src:'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', label:'Node.js'},
              {src:'https://cdn.worldvectorlogo.com/logos/python-5.svg', label:'Python'},
              {src:'https://cdn.worldvectorlogo.com/logos/html-1.svg', label:'HTML'},
              {src:'https://cdn.worldvectorlogo.com/logos/css-3.svg', label:'CSS'},
              {src:'https://cdn.worldvectorlogo.com/logos/c.svg', label:'C'}
            ].map((i, idx) => (
              <div className="icon" key={idx}>
                <img src={i.src} alt={i.label} />
                <p>{i.label}</p>
              </div>
            ))}
          </section>
        </section>

        <div className="transition-1">
          <div className="transition-1-img">
            <img src="/images/trans1.png" alt="Transition-1" />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div id="about" className="about">
          <h2>About me</h2>
          <div className="about-card">
            <div className="about-card-content">
              <img src="/images/mini-profilepic.png" alt="Profile" />
              <div>
                <h3>Matilda Pallin</h3>
                <p>M.Sc Student in Engineering in Interaction, Technology and Design at Umeå University</p>
              </div>
            </div>
            <p className="about-card-text">
              I am a 27-year-old engineering student in my final year at Umeå University.
      I am a driven, goal-oriented and ambitious person who enjoys taking on challenges and continuously learning new skills.
      Friends and colleagues would describe me as outgoing, motivated, and committed to reaching both personal and professional goals.
      I thrive in dynamic environments and look forward to contributing with my knowledge, energy, and dedication.
            </p>
            <div className="about-card-socials">
              <a href="https://matildapallin.netlify.app" target="_blank" rel="noopener noreferrer">
                  My portfolio
                </a>
              <div className="icon-linkedin">
                <a href="https://www.linkedin.com/in/matilda-pallin-a3b1b1266/" target="_blank" rel="noreferrer">
                  <img src="/images/LinkedIn-Logo.wine.svg" alt="LinkedIn" />
                </a>
              </div>
              <div className="icon">
                <a href="https://www.instagram.com/ditt-namn" target="_blank" rel="noreferrer">
                  <img src="/images/Instagram_icon.png" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="experience">
          <h2>Experience</h2>
          <div class="job">
              <h3>Freelance Web Developer
                <span class="tag fulltime">Summerjob</span> 
              </h3>
              <p>💻 BuildSim Nordic 2026· 📍 Umeå</p>
              <span class="date">📅 June 2025 – currently</span>
              <p>Developed the annual conference site for Ibpsa Nordic.
                The task icluded developing and designing everything from scratch using wordpress.</p>
            </div>
            <div class="job">
              <h3>Student Brand Manager
                <span class="tag internship">Internship</span>
              </h3>
              <p>👩‍💻 Cygni · 📍 Umeå</p>
              <span class="date">📅 2023 – 2024</span>
              <p>As a student brand manager at Cygni I got the opportunity to be the middleman between the company and students,
                  I created event that students could join to get a better understanding of what Cygni do
                  as a company and what opportunities they have open for students. </p>
            </div>
            <div class="job">
              <h3>Digital Marketing Manager
                <span class="tag non-profit">Non-profit work</span>
              </h3>
              <p>👩‍💻 DataTjej · 📍 Sweden · Distance</p>
              <span class="date">📅 2023 – 2024</span>
              <p>Took on the role as digital marketing manager for the nonprofit organisation DataTjej.
                  Together with another colleague i had the task to create material for all of DataTjejs digital platforms.
                The job also included planning for things to come and come up with new idea to inspire and gain more members.</p>
            </div>
        </div>
      </section>

      <section className="recent-project-section">
        <div className="recent-project-container-1">
          <h2>RECENT PROJECT</h2>
        </div>
        <section id="projects" className="recent-project">
          <div className="recent-project-container">
            <div className="recent-project-info">
              <h3>BuildSim Nordic 2026</h3>
              <p>Developed and designed the website for IBPSA Nordic’s annual conference entirely from scratch using WordPress. The project included structuring content,
                 customizing the design to match the organization’s branding, 
                 and creating an intuitive, user-friendly interface. 
                 Focus was placed on responsive design to ensure a seamless experience across devices, providing valuable experience in both frontend design and backend configuration within WordPress.</p>
            </div>
            <div className="recent-project-image">
              <img src="/images/Device-MacbookPro.png" alt="Mockup" />
            </div>
          </div>
        </section>
        <div className="transition-2">
          <div className="transition-2-img">
            <img src="/images/trans2.png" alt="Transition" />
          </div>
        </div>
      </section>

      <section className="more-projects-section">
        <h2>MORE PROJECTS</h2>
        <Carousel />
      </section>
    </>
  )
}
