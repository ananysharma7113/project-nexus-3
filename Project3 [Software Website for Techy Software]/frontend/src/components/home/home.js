import React,{useState} from 'react'
import '../home/home.css'
import team from '../images/team.webp'
import company_1 from '../images/aperture.jpeg'
import company_2 from '../images/cyberdine.jpeg'
import company_3 from '../images/fake1.png'
import company_4 from '../images/xcorp.png'
import insta from '../images/insta.png'
import youtube from '../images/youtube.png'
import facebook from '../images/facebook.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [error,setError]=useState("")

  const validation = (email)=>{
    let errors=''
    const email_pattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(email===''){
      errors='Email field cannot be empty'
    }
    else if(!email_pattern.test(email)){
      errors='The Email should have a valid pattern'
    }
    else{
      errors=''
    }

    return errors;
  }

  const handleChange=(e)=>{
    setEmail(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setError(validation(email));
    if (error===""){
      axios.post('http://localhost:8000/subscribe',{email})
      .then(res=>{
        alert("Thank You for subscribing us we'll keep you updated!")
        window.location.reload();
      })
      .catch(err=>console.log("error"))
    }
  };

  return (
    <div className='body'>
      <div>
        <div className='background'></div> 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark nav">
          <div className="container-fluid">
            <text className=" pacifico-regular">Techy</text>
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">HOME</a>
              <a className="nav-link" href="/services">SERVICES</a>
              <a className="nav-link" href="/about">ABOUT US</a>
              <a className="nav-link" href="/contact">CONTACT</a>
            </div>
            <text className=" pacifico-regular">Techy</text>
          </div>
        </nav>
        <h1 className='tagline'>DIGITAL AGENCY THAT THRIVES ON YOUR SUCCESS</h1>
        <text className='tagline_sub'>If you are looking for an agency to help you create a remarkable presence online, you've come to the right place. We can help you take your business to the next level.</text>
      </div>
      
      <div className='hire'>
        <h1 className='hire_title'>Hire Us For</h1>
        <div className='hire_content'>
          <div className='hire_text'>
            <h3 className='hire_title'>Design</h3>
            <text>Our web design team has ample years of experience in the core areas of design to build a website that you need.</text>
          </div>
          <div className='hire_text'>
            <h3 className='hire_title'>Devlopment</h3>
            <text>Looking out for customized solutions for your websites? Our team will develop and deliver a website that’ll serve your purpose.</text>
          </div>
          <div className='hire_text'>
            <h3 className='hire_title'>Marketing</h3>
            <text>With researched digital marketing, we will ensure that new customers and clients are able to find your business.</text>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='about_content'>
          <div className='about_head'>
            <h1 className='about_title'>About Us</h1>
            <text className='about_head_text'>We are a team of 40 web experts with over 12 years of experience in website building and marketing to help businesses grow online.</text>
          </div>
          <div className='about_foot'>
            <div className='about_text'>
              <h3 className='about_text_title'>Mission.</h3>
              <text>Our mission is to empower our clients to use the internet to its full potential by providing affordable, effective, custom design and marketing solutions.</text>
            </div>
            <div className='about_text'>
              <h3 className='about_text_title'>Vision.</h3>
              <text>Our vision is to become a global leader in providing the best and unique web design and marketing services to improve our client’s productivity and business strength.</text>
            </div>
          </div>
        </div>
        <img className='team_img' src={team} alt='software team'/>
      </div>
      <div className='work'>
        <h1 className='work_title'>Clients We Worked With</h1>
        <div className='comapany_group'>
          <img src={company_1} className='company' alt='client'/>
          <img src={company_2} className='company' alt='client'/>
          <img src={company_3} className='company' alt='client'/>
          <img src={company_4} className='company' alt='client'/>
        </div>
        <h1 className='work_title choose_title'>Why Choose Us</h1>
        <h5 className='choose-text'>We are the right term for your business. We have the expertise and knowledge to offer impartial advice and services at an honest price.</h5>
        <text className='choose-text'>With us you’ll feel heard. We listen to our client requirements and then select the right solution that fits. We care for your business as our own. We take a sincere interest in it and genuinely want to help your company reach its potential.</text>
      </div>

      
        <div className='card-content'>
          <h1 className='card-head'>Have a Project on mind?</h1>
          <div className='card-text'>We can help you bring your ideas to life. Let's talk about what we can build and raise together.</div>
          <button className='connect-btn' onClick={()=>{navigate('/contact')}}>Connect with us!</button>
        </div>
      
      
      
      <div className='build'>
        <div className='build_head'>
          Let us together build a flourishing business
        </div>
        <div className='build_text'>
          When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!
        </div>
      </div>
      <div className='subscribe'>
        <h1 className='subscribe_head content'>Subscribe</h1>
        <form className='form' onSubmit={handleSubmit}>
          
          <input className='input content' type='email' placeholder='Email Address' name='email'value={email} onChange={handleChange}></input>
          {error && <span className='home-error'>{error}</span>}
          
          <button className='button content connect-btn' type='submit'>I'm Interested</button>
        </form>
      </div>
      <div className='footer'>
        <div className='left'>
          <h1 className='footer_head'>Techy</h1>
          <text className='footer_text'>1234 N Spring St, Los Angeles, CA 90012</text>
          <text className='footer_text'>techy7113@gmail.com</text>
        </div>
        <div className='right'>
          <div className='link'>
            <a className='link-item' href='/'>Home</a>
            <a className='link-item' href='/services'>Services</a>
            <a className='link-item' href='/about'>About Us</a>
            <a className='link-item' href='/contact'>Contact</a>
          </div>
          <div className='social'>
            <a href='https://www.youtube.com' target='_blank' rel="noreferrer"><img src={youtube} alt='youtube' className='youtube img'/></a>
            <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><img src={facebook} alt='facebook' className='facebook img'/></a>
            <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><img src={insta} alt='insta' className='insta img'/></a>
          </div>
        </div>
      </div>
      <div className='copyright'>Copyright © 2024 Digital Agency | Powered by Digital Agency</div>
    </div> 
  )
}

export default Home
