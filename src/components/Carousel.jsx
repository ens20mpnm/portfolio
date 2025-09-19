import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  { title: 'ChaptR', img:'/images/chaptr.png', desc: 'Developed an Android app for logging progress with reading books'},
  { title: 'KmCH.SE', img:'/images/kmch.png', desc: 'Created a logo and webdesign for a non-profit' },
  { title: 'Renos AB', img:'/images/renos.png', desc: 'School projects where we created a website and logo for Renos AB' },
  { title: 'School project', img:'/images/socialamedier.png', desc: 'Designed an application used to promote renewables in Western Australia' },
  { title: 'ChargePlanner', img:'/images/chargePlanner.png', desc: 'School project, desgined an application for electric cars' },
]

export default function Carousel(){
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(()=> {
      setIndex(i => (i + 1) % projects.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.more-projects-about-card')
    if (!card) return
    const style = window.getComputedStyle(card)
    const margin = parseFloat(style.marginRight) + parseFloat(style.marginLeft)
    const width = card.offsetWidth + margin
    track.style.transform = `translateX(-${index * width}px)`
    track.style.transition = 'transform 0.3s ease'
  }, [index])

  return (
    <div style={{position:'relative'}}>
      <button className="carousel-btn prev" onClick={()=> setIndex(i => (i - 1 + projects.length) % projects.length)}>❮</button>
      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef}>
          {projects.map((p,i) => (
            <Link to="/projects" key={i} className="more-projects-about-card">
              <div className="more-projects-card-content">
                <img src={p.img} alt={p.title} />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <button className="carousel-btn next" onClick={()=> setIndex(i => (i + 1) % projects.length)}>❯</button>
    </div>
  )
}

