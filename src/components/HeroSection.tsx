import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

interface HeroSectionProps {
    title?: string;
    description?: string | React.ReactNode;
    imageSrc: string;
    imageAlt?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title = "SIGRobotics",
    description = "We are a student-run robotics special-interest group.",
    imageSrc = "/../assets/open_house.png",
    imageAlt = "ACM Open House"
}) => {
    return (
        <div className="layout-xl">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="heading-title">
                        {title}
                    </h1>
                    <p>
                        {description}
                    </p>
                    <div className="hero-buttons">
                        <a 
                            href="https://discord.gg/d6MXagJTb8"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="button-secondary"
                        >
                            Join Our Discord
                        </a>
                        <Link to="/about" className="button-primary">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="layout-img">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="hero-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;