import React from 'react'
import '../services/services.css'
import company_1 from '../images/aperture.jpeg'
import company_2 from '../images/cyberdine.jpeg'
import company_3 from '../images/fake1.png'
import company_4 from '../images/xcorp.png'
import insta from '../images/insta.png'
import youtube from '../images/youtube.png'
import facebook from '../images/facebook.png'
import { useNavigate } from 'react-router-dom'


const Services = () => {
  const navigate=useNavigate();
  return (
    <div className='services-body'>
      <div className='services-background'></div> 
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark nav">
        <div className="container-fluid">
          <text className=" pacifico-regular">Techy</text>
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/">HOME</a>
            <a className="nav-link active" href="/services">SERVICES</a>
            <a className="nav-link" href="/about">ABOUT US</a>
            <a className="nav-link" href="/contact">CONTACT</a>
          </div>
          <text className=" pacifico-regular">Techy</text>
        </div>
      </nav>
      <h1 className='services-tagline'>SERVICES</h1>
      <div className='help'>
        <h1 className='help-head'>How can we help you?</h1>
        <div className='help-content'>
          <div className='help-item'>
            <h3 className='help-content-head'>Creative Design</h3>
            <text className='help-content-text'>Our team of professional graphic and web designers will help you with unique and creative logo and website designs that will match your business.</text>
            <button className='connect-btn' onClick={()=>{navigate('/contact')}}> Get In Touch</button>
          </div>
           <div className='help-item'>
            <h3 className='help-content-head'>Research & Development</h3>
            <text className='help-content-text'>We help you develop the right website with a good user interface built after a lot of research in the industry to help you make the best out of it.</text>
            <button className='connect-btn' onClick={()=>{navigate('/contact')}}> Get In Touch</button>
          </div>
           <div className='help-item'>
            <h3 className='help-content-head'>Branding & Marketing</h3>
            <text className='help-content-text'>Need help with branding and marketing to reach out to a larger audience? We can help you create a brand presence and marketing efforts.</text>
            <button className='connect-btn' onClick={()=>{navigate('/contact')}}> Get In Touch</button>
          </div>
        </div>
      </div>
      <div className='services-work'>
        <h1 className='services-work_title'>Clients We Worked With</h1>
        <div className='services-comapany_group'>
          <img src={company_1} className='company' alt='client'/>
          <img src={company_2} className='company' alt='client'/>
          <img src={company_3} className='company' alt='client'/>
          <img src={company_4} className='company' alt='client'/>
        </div>
      </div>

      <div className='services-card-content'>
        <h1 className='services-card-head'>Have a Project on mind?</h1>
        <div className='services-card-text'>We can help you bring your ideas to life. Let’s talk about what we can build and raise together.</div>
        <button className='services-connect-btn' onClick={()=>{navigate('/contact')}}>Connect with us!</button>
      </div>
      <div className='services-build'>
        <div className='services-build_head'>
          Let us together build a flourishing business
        </div>
        <div className='services-build_text'>
          When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!
        </div>
      </div>
      <div className='services-footer'>
        <div className='services-left'>
          <h1 className='services-footer_head'>Techy</h1>
          <text className='services-footer_text'>1234 N Spring St, Los Angeles, CA 90012</text>
          <text className='services-footer_text'>techy7113@gmail.com</text>
        </div>
        <div className='services-right'>
          <div className='services-link'>
            <a className='services-link-item' href='/'>Home</a>
            <a className='services-link-item' href='/services'>Services</a>
            <a className='services-link-item' href='/about'>About Us</a>
            <a className='services-link-item' href='/contact'>Contact</a>
          </div>
          <div className='services-social'>
            <a href='https://www.youtube.com' target='_blank' rel="noreferrer"><img src={youtube} alt='youtube' className='services-youtube services-img'/></a>
            <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><img src={facebook} alt='facebook' className='services-facebook services-img'/></a>
            <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><img src={insta} alt='insta' className='services-insta services-img'/></a>
          </div>
        </div>
      </div>
      <div className='services-copyright'>Copyright © 2024 Digital Agency | Powered by Digital Agency</div>
    </div>
  )
}

export default Services
