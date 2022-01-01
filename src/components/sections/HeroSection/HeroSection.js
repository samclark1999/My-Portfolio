import React from 'react'
import './HeroSection.css'
import { Button } from '../../Button';

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
            </div>
        </div>
    )
}

export default HeroSection
