import React from 'react'
import './About.css'
import aboutImage from '../../images/about.jpg'

const About = () => {
    return(
        <div>
            <div className="aboutImg">
                <img src={aboutImage} />
            </div>
            <div className="about">
                <div className="about-headline">
                We dress a generation of urban professionals, creatives and innovators that need functional yet modern products for their everyday lives.
                </div>
                <span className="bold">History</span>
                <div className="about-his">
                
                <br />
                We were born on September 1st 2013. Today we are team of more than 20 people in-house, but we also collaborate with agents, distributors photographers and ambassadors from all over the world.
                </div>
                <span className="bold">Our values </span>
                <div className="about-val" >
                
                <br />
                Balanced between functionality, aesthetics and minimalism with a less is more approach to design. Less is more. User-centric in all design processes, experimentation, innovation, and future outlook. We manufacture in places with happy people in good working conditions  
                </div>
                <span className="bold">Some brand numbers so far </span>
                <div className="conclusion">
                
                We have sold more than 250K pairs.
<br />
                Customers in more than 51countries are wearing us.
<br />
                We sell in more than 300 shops all around the globe. 
<br />
<br />
<br />
               <span className="hash"> #DOTHEFUTURE </span>
<br />
                OUR MATRA. OUR GUIDE. WHERE WE ARE GOING.
                </div>
            </div>
        </div>
    )
}

export default About;