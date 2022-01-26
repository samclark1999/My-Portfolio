import React from 'react'
import './HeroSection.css'
import { Button } from '../../Button';
import ats from './ATS.pdf'
import { Link } from 'react-router-dom';

function HeroSection(props) {
    return (
        <div className='hero-container' id='hero'>
            <video src="/videos/hero.mp4" autoPlay loop muted />
            <h1>Sam Clark</h1>
            <p>Web Developer</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    VIEW RESUME
                </Button>
                <Link to={ats} target='blank_' rel='noreferrer noopener' className='btn-mobile'>
                    <button className="ats">ATS FRIENDLY RESUME</button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
