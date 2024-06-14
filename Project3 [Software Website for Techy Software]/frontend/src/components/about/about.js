import React from 'react'
import '../about/about.css'
import insta from '../images/insta.png'
import youtube from '../images/youtube.png'
import facebook from '../images/facebook.png'
import tech_team from '../images/tech_team.jpeg'
import people_1 from '../images/people_1.jpeg'
import people_2 from '../images/people_2.jpeg'
import people_3 from '../images/people_3.jpeg'
import people_4 from '../images/people_4.jpeg'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate();
  return (
    <div className='about-body'>
      <div className='about-background'></div> 
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark nav">
        <div className="container-fluid">
          <text className=" pacifico-regular">Techy</text>
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/">HOME</a>
            <a className="nav-link" href="/services">SERVICES</a>
            <a className="nav-link active" href="/about">ABOUT US</a>
            <a className="nav-link" href="/contact">CONTACT</a>
          </div>
          <text className=" pacifico-regular">Techy</text>
        </div>
      </nav>
      <h1 className='about-tagline'>ABOUT US</h1>
      <div className='about_'>
        <img src={tech_team} className='about_img' alt='tech_team'/>
        <div className='about-content'>
          <div className='about-upper'>
            <div className='about-head-text'>We are a team of 40 web experts with over 12 years of experience in website building and marketing to help businesses grow online.</div>
            <div className='about-text'>If you are looking for the best website design, development, and marketing services to grow your business online, we are here to help. We are a team of certified experts with tremendous experience in web design, development, and marketing who’ll walk with you all through.</div>
          </div>
          <div className='about-lower'>
            <h1 className='about-head'>Our Core Values</h1>
            <ul className='about-list'>
              <div>Committed to delivering the best</div>
              <div>Honest and transparent services</div>
              <div>We care for your business just like ours</div>
              <div>Keep learning and adapting to new technologies</div>
            </ul>
          </div>
        </div>
      </div>
      <div className='rating'>
        <h1 className='rating-head'>What Our Clients Say</h1>
        <div className='rating-container'>
          <div className='rating-box'>
            <div className='rating-item'>I've been working with this digital agency for the past six months, and their SEO services have been nothing short of exceptional. Our website's organic traffic has increased by 150%, and we've seen a significant improvement in our search engine rankings for several key terms. Their team is knowledgeable, responsive, and always ready to go the extra mile to ensure we're satisfied. Highly recommended!</div>
            <div className='rating-img-content'>
              <img src={people_1} className='rating-img' alt='customer'/>
              <div className='customer-name'>
                David Patterson
              </div>
            </div>
          </div>
          <div className='rating-box'>
            <div className='rating-item'>As a startup, we needed a professional, functional, and aesthetically pleasing website to make a strong first impression. The web development team at this digital agency delivered beyond our expectations. They were patient, attentive to detail, and incorporated all our feedback seamlessly. The end result was a stunning website that has received numerous compliments from our clients.</div>
            <div className='rating-img-content'>
              <img src={people_2} className='rating-img' alt='customer'/>
              <div className='customer-name'>
                Daniel johnson
              </div>
            </div>
          </div>
        </div>
        <div className='rating-container'>
          <div className='rating-box'>
            <div className='rating-item'>Our company's social media presence was practically non-existent before we started working with this agency. Their social media management services have transformed our online engagement. They create relevant, engaging content and manage our accounts proactively. We've seen a 300% increase in our follower base and significant improvement in customer interaction. The team is creative and always ahead of trends.</div>
            <div className='rating-img-content'>
              <img src={people_3} className='rating-img' alt='customer'/>
              <div className='customer-name'>               	
                Mark Hoffman
              </div>
            </div>
          </div>
          <div className='rating-box'>
            <div className='rating-item'>We engaged this digital agency for their PPC services, and the results have been quite impressive. Our ads are now reaching the right audience, and we've seen a marked increase in conversions. The team is data-driven and always provides detailed reports on campaign performance. The only reason for not giving a full five stars is that sometimes there was a slight delay in communication, but overall, we're very satisfied with the service.</div>
            <div className='rating-img-content'>
              <img src={people_4} className='rating-img' alt='customer'/>
              <div className='customer-name'>
                Pricilia Doe
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className='about-card-content'>
        <h1 className='about-card-head'>Have a Project on mind?</h1>
        <div className='about-card-text'>We can help you bring your ideas to life. Let’s talk about what we can build and raise together.</div>
        <button className='about-connect-btn' onClick={()=>{navigate('/contact')}}>Connect with us!</button>
      </div>
      
      
      <div className='about-build'>
        <div className='about-build_head'>
          Let us together build a flourishing business
        </div>
        <div className='about-build_text'>
          When connected with us, you aren’t growing your business alone. We have your back and put in our best to contribute to the growth of your entire team and organization. So, if you are looking for the right agency that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!
        </div>
      </div>
      <div className='about-footer'>
        <div className='about-left'>
          <h1 className='about-footer_head'>Techy</h1>
          <text className='about-footer_text'>1234 N Spring St, Los Angeles, CA 90012</text>
          <text className='about-footer_text'>techy7113@gmail.com</text>
        </div>
        <div className='about-right'>
          <div className='about-link'>
            <a className='about-link-item' href='/'>Home</a>
            <a className='about-link-item' href='/services'>Services</a>
            <a className='about-link-item' href='/about'>About Us</a>
            <a className='about-link-item' href='/contact'>Contact</a>
          </div>
          <div className='about-social'>
            <a href='https://www.youtube.com' target='_blank' rel="noreferrer"><img src={youtube} alt='youtube' className='about-youtube about-img'/></a>
            <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><img src={facebook} alt='facebook' className='about-facebook about-img'/></a>
            <a href='https://www.facebook.com' target='_blank' rel="noreferrer"><img src={insta} alt='insta' className='about-insta about-img'/></a>
          </div>
        </div>
      </div>
      <div className='about-copyright'>Copyright © 2024 Digital Agency | Powered by Digital Agency</div>
    </div>
  )
}

export default About
