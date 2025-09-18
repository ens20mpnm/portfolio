import React from 'react'

export default function Projects(){
  const items = [
    {title:'BuildSim Nordic 2026', img:'/Device-MacbookPro.png', desc:'Helped Ibpsa Nordic...'},
    {title:'Projekt', img:'/socmed.png', desc:'...'},
    {title:'Renos AB', img:'/renos.png', desc:'...'},
    {title:'KmCH.SE', img:'/kmch.png', desc:'...'},
    {title:'ChargePlanner', img:'/chargePlanner.png', desc:'...'},
  ]

  return (
    <section id="projects" className="project">
      {items.map((p, idx) => (
        <div className="project-container" key={idx}>
          <div className="project-info">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
          <div className={ idx === 1 ? "project-images" : "project-image" }>
            { Array.isArray(p.img) ? p.img.map((s,i)=> <img key={i} src={s} alt={p.title} />) : <img src={p.img} alt={p.title} /> }
          </div>
        </div>
      ))}
    </section>
  )
}
