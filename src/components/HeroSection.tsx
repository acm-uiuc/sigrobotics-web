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
    title = "Your Club's Title Here",
    description = "For over X years, our robotics club has been fostering innovation and leadership for students everywhere. Our inclusive community has created a strong network of students and alumni, bringing their diverse interests to robotics.",
    imageSrc = "/path/to/your/image.jpg",
    imageAlt = "Robotics Club Activity"
}) => {
    return (
        <div className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {title}
                    </h1>
                    <p className="hero-description">
                        {description}
                    </p>
                    <div className="hero-buttons">
                        <a 
                            href="https://discord.gg/d6MXagJTb8"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hero-button"
                        >
                            Join Our Discord
                        </a>
                        <Link to="/about" className="hero-button filled">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="hero-image-container">
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