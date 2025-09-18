import React, { useRef, useState, useEffect } from 'react'

const projects = [
  { title: 'Renos AB', img:'/images/renos.png', desc: 'En interaktiv resa mot hållbar sjukvård' },
  { title: 'Projektarbete', img:'/images/socmed.png', desc: 'App för att uppmuntra ...' },
  { title: 'KmCH.SE', img:'/images/kmch.png', desc: 'Kort beskrivning av projekt 2' },
  { title: 'ChargePlanner', img:'/images/chargePlanner.png', desc: 'information om projekt tre' },
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
            <div className="more-projects-about-card" key={i}>
              <div className="more-projects-card-content">
                <img src={p.img} alt={p.title} />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-btn next" onClick={()=> setIndex(i => (i + 1) % projects.length)}>❯</button>
    </div>
  )
}
