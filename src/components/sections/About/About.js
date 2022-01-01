import React from 'react'
import './About.css'
import {Button} from '../../Button'
import {AiFillLinkedin} from 'react-icons/ai'
import styled from 'styled-components'
import {AiFillGithub} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

const Email = styled(MdEmail)`
    color: dodgerblue;
    font-size: 2rem;
    vertical-align: top;
    margin-left: 10px;

    @media screen and (max-width:1180px) {
        font-size: 1.75rem;
    }
    @media screen and (max-width:690px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 577px) {
        font-size: 1rem;
    }
    @media screen and (max-width: 424px) {
        margin-top: -3px;
    }
`

const Github = styled(AiFillGithub)`
    color: dodgerblue;
    font-size: 2rem;
    vertical-align: top;
    margin-left: 10px;
    &:hover {
        color: white;
    }
    @media screen and (max-width:1180px) {
        font-size: 1.75rem;
    }
    @media screen and (max-width:690px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 577px) {
        font-size: 1rem;
    }
`
const Linkedin = styled(AiFillLinkedin)`
    color: dodgerblue;
    font-size: 2rem;
    vertical-align: top;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
        color: white;
    }
    @media screen and (max-width:1180px) {
        font-size: 1.75rem;
    }
    @media screen and (max-width:690px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 577px) {
        font-size: 1rem;
    }
`

function About() {
    return (
        <div className='about-section' id="about">
           
           <div className='content-left'>
                <div className='card-img'>
                    <img
                        src='images/profile.jpeg'
                        alt=''
                        className='profile-img'
                    />
                
                </div>
                
           </div>
           <div className='content-right'>
                <div className='wrapper'>
                    <h1 className='head'>Hello,</h1>
                    <p className='par'>I am a young professional with a Bachelor of Arts in Business Administration & Marketing from the University of Washington and a Professional Certificate in Coding: Full Stack Development with MERN from MIT x PRO.
                    </p>
                    <p className='par'>I thrive in team centered envirnoments where I can explore my creativity. I'm interested in Front End opportunities where I can create unique user-friendly applications and websites. 
                    </p>
                    <h1 className='head02'>Sam</h1>

                    <div className='contact-container'>
                        <div className='contact-items'>
                            <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--medium'
                            >
                            VIEW RESUME
                            </Button>
                            <Email />
                                <input 
                                    type="text"
                                        className='email-input' 
                                        value="samclarkwork99@gmail.com">
                                </input>
                        
                            <a href="https://www.github.com/samclark1999/" target="_blank" rel="noreferrer noopener">
                                <Github />
                            </a>
                            <a href="https://www.linkedin.com/in/samclark99/" target="_blank" rel="noreferrer noopener">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>
           </div>
        
        </div>
    )
}

export default About
