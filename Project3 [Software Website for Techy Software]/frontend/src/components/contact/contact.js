import React from 'react'
import '../contact/contact.css'
import insta from '../images/insta.png'
import youtube from '../images/youtube.png'
import facebook from '../images/facebook.png'
import Map from '../map/Map'
import location from '../images/location.png'
import telephone from '../images/telephone.png'
import Modal from '../modal/modal'
import { useState } from 'react'
import axios from 'axios'


const Contact = () => { 

  // For Modal
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  // 
  
  const [messages,setMessages] = useState({
    first_name:'',
    last_name:'',
    email:'',
    subject:'',
    your_message:''
  });
  const [error,setError]= useState("");

  const validation = (messages)=>{
    let errors=''
    const email_pattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if(!email_pattern.test(messages.email)){
      errors='The Email should have a valid pattern'
    }
    else{
      errors=''
    }

    return errors;
  }

  const handleChangeMessages=(e)=>{
    const {name,value} = e.target;
    setMessages({
      ...messages,
      [name]:value
    });
  };

  const handleSubmitMessage=(e)=>{
    e.preventDefault();
    setError(validation(messages));
    if (error===""){
      axios.post('http://localhost:8000/message',messages)
      .then(res=>{
       alert("Thank You for reaching out to us we'll connect with you shortly!")
       window.location.reload();
      })
      .catch(err=>console.log("error"))
    }
    
  }

  return (
    <div className='contact-body'>
      <div className='contact-background'></div> 
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark nav">
        <div className="container-fluid">
          <text className=" pacifico-regular">Techy</text>
          <div className=" navbar-nav">
            <a className="nav-link" aria-current="page" href="/">HOME</a>
            <a className="nav-link" href="/services">SERVICES</a>
            <a className="nav-link" href="/about">ABOUT US</a>
            <a className="nav-link active" href="/contact">CONTACT</a>
          </div>
          <text className=" pacifico-regular">Techy</text>
        </div>
      </nav>

      <h1 className='contact-tagline'>CONTACT</h1>

      <div className='contact-help'>
        <div className='contact-help-content'>
          <div className='contact-help-content-up'>
            <h1 className='contact-help-head'>We are here to help!</h1>
            <div className='contact-location'>
              <img src={location} alt='location' className='contact-loc-img'/>
              <text>1234 N Spring St, Los Angeles, CA 90012</text>
            </div>
            <div className='contact-phone'>
              <img src={telephone} alt='telephone' className='contact-phone-img'/>
              <text> +1 234 567 890 </text>
            </div>
          </div>
          <div className='contact-help-content-down'>
            <h1 className='contact-help-head'>Follow Us</h1>
            <div className='contact-img-collection'>
              <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><img src={insta} alt='insta' className='contact-img'/></a>
              <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><img src={facebook} alt='facebook' className='contact-img'/></a>
              <a href='https://www.youtube.com' target='_blank' rel="noreferrer"><img src={youtube} alt='youtube' className='contact-img'/></a>
            </div>
          </div>

          <div>
            <button className="contact-connect-btn feedback-btn" onClick={handleOpen}>
              Give Feedback
            </button>
            <Modal show={showModal} handleClose={handleClose} />
          </div>
        </div>
        <form className='contact-form' onSubmit={handleSubmitMessage}>
          <h1 className='contact-help-head'>Send Us a Message</h1>
          <div className='contact-name'><input type='text' placeholder='First Name' className='contact-input' name='first_name' value={messages.first_name} onChange={handleChangeMessages}></input></div>
          <div className='contact-name'><input type='text' placeholder='Last Name' className='contact-input' name='last_name' value={messages.last_name} onChange={handleChangeMessages}></input></div>
          <div><input type='email' placeholder='Email Address' className='contact-input' name='email' value={messages.email} onChange={handleChangeMessages}></input></div>
          {error && <span className='contact-error'>{error}</span>}
          <div><input type='text' placeholder='Subject' className='contact-input' name='subject' value={messages.subject} onChange={handleChangeMessages}></input></div>
          <div><input type='text' placeholder='Your Message' className='contact-input' name='your_message' value={messages.your_message} onChange={handleChangeMessages}></input></div>
          <button className='contact-connect-btn' type='submit'>Send Message</button>
        </form>
      </div>

      <Map/>
      
      <div className='contact-footer'>
        <div className='contact-left'>
          <h1 className='contact-footer_head'>Techy</h1>
          <text className='contact-footer_text'>1234 N Spring St, Los Angeles, CA 90012</text>
          <text className='contact-footer_text'>techy7113@gmail.com</text>
        </div>
        <div className='contact-right'>
          <div className='contact-link'>
            <a className='contact-link-item' href='/'>Home</a>
            <a className='contact-link-item' href='/services'>Services</a>
            <a className='contact-link-item' href='/about'>About Us</a>
            <a className='contact-link-item' href='contact'>Contact</a>
          </div>
          <div className='contact-social'>
            <a href='https://www.youtube.com' target='_blank' rel="noreferrer"><img src={youtube} alt='youtube' className='contact-youtube img'/></a>
            <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><img src={facebook} alt='facebook' className='contact-facebook img'/></a>
            <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><img src={insta} alt='insta' className='contact-insta img'/></a>
          </div>
        </div>
      </div>
      <div className='contact-copyright'>Copyright © 2024 Digital Agency | Powered by Digital Agency</div>
    </div>
  )
}

export default Contact
