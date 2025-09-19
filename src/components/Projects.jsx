import React from 'react'

export default function Projects(){
const items = [
  {
    title: 'BuildSim Nordic 2026',
    img: '/images/Device-MacbookPro.png',
    desc: 'Developed and designed the website for IBPSA Nordic’s annual conference entirely from scratch using WordPress. The project included structuring content,\n' +
          'customizing the design to match the organization’s branding,\n' +
          'and creating an intuitive, user-friendly interface.\n' +
          'Focus was placed on responsive design to ensure a seamless experience across devices, providing valuable experience in both frontend design and backend configuration within WordPress.',
          link: 'https://buildsimnordic2026.ibpsa-nordic.org'
  },
  {title:'KmCH.SE', img:'/images/kmch.png', desc:'Designed the logo and helped design the website.\n'+
    'KMCH Nepal is a locally anchored and democratically structured organization that was founded in 2007.\n'+
    'The purpose of the organization is to give children from the scattered villages in Humla in northwestern Nepal the opportunity to go to school.',
    link: 'https://www.kmch.se'
  },
  {title:'Project for school',
     img:'/images/socialamedier.png',
      desc:'Schoolproject where we designed an implemented an app that would be used to promote renewable energy in Western Australia,\n' +
          'Togehter with marketing students from a University in Perth, we created an application, where they did the reserach and we did the developing and designing,\n' +
          'We developed a React Native application.\n' +
          'Focus was placed on creating an application that could make more people intresseted in renewables.'
  },
  {title:'Renos AB',
     img:'/images/renos.png',
      desc:'Schoolproject where we designed an created a website for Renos AB,\n' 
  },
  {title:'ChaptR',
     img:'/images/chaptr.png',
      desc:'I developed an Android application called Chaptr, designed to function similarly to Goodreads, but with a more modern and engaging user experience. The app allows users to track books they’ve read, discover new titles, and interact with a community of readers. I focused on creating a clean, visually appealing interface while implementing interactive and fun features that enhance user engagement.\n' 
  },

  
  {title:'ChargePlanner', img:'/images/chargePlanner.png', desc:'As part of a schoolproject I created a hi-fi prototype for an application called ChargePlanner, designed to assist electric vehicle users in planning and optimizing their charging routines. The project focused on user-friendly navigation, intuitive design, and clear visualization of charging options. I developed the prototype in Figma, emphasizing both aesthetic appeal and practical functionality to ensure a smooth and engaging user experience.'},
]


  return (
    <section id="projects" className="project">
      {items.map((p, idx) => (
        <div className="project-container" key={idx}>
          <div className="project-info">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p></p>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Look at the site
              </a>
            )}
          </div>
          <div className={ idx === 1 ? "project-images" : "project-image" }>
            { Array.isArray(p.img) ? p.img.map((s,i)=> <img key={i} src={s} alt={p.title} />) : <img src={p.img} alt={p.title} /> }
          </div>
        </div>
      ))}
    </section>
  )
}
