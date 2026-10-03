import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

interface HeroSectionProps {
    title?: string;
    description?: string | React.ReactNode;
    /** Full-bleed background image. Omit to fall back to the neutral wash. */
    imageSrc?: string;
    imageAlt?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title = "SIGRobotics",
    description = "We are a student-run robotics special-interest group.",
    imageSrc,
    imageAlt = "ACM Open House"
}) => {
    const style = {
        '--hero-image': imageSrc ? `url(${imageSrc})` : 'none',
        '--hero-placeholder-opacity': imageSrc ? 0 : 1,
    } as React.CSSProperties;

    return (
        <section className="hero" style={style} aria-label={imageAlt}>
            <div className="hero-inner">
                <div className="hero-content">
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-description">{description}</p>
                    <div className="hero-buttons">
                        <Link to="/about" className="button-primary">
                            Learn More
                        </Link>
                        <a
                            href="https://discord.gg/d6MXagJTb8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-secondary"
                        >
                            Join Discord
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
