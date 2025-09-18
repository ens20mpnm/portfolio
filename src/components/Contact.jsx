import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="contact">
      <h2>CONTACT ME</h2>
      <div className="contact-card">
        <div className="contact-card-body">
          <div>
            <p className="intro-text">
              Got a project in mind, or just want to say hi?
            </p>
            <form className="contact-form" onSubmit={(e)=>{ e.preventDefault(); alert('Form submitted (demo)') }}>
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
              <textarea placeholder="Your message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-map">
            <p className="map-text">Prefer meeting in person? Come find me here</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2207.268944168732!2d20.2596644!3d63.8258475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5a05e32705b5%3A0x4019078290e7e40!2sUme%C3%A5%20University!5e0!3m2!1sen!2sse!4v1694183723415!5m2!1sen!2sse"
              style={{border:0, width:'100%', height:'400px'}}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
