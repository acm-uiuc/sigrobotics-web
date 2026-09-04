// src/data/projectsData.ts (or wherever you prefer to place it)
import arm from '../assets/projs/arm.png';
import booster from '../assets/projs/booster.jpg';
import matchabot from '../assets/projs/matchabot.jpg';
import temp from '../assets/temp.jpg';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  status: 'Ongoing' | 'Completed' | 'Archived';
  /** Pulled out of the grid and shown as the lead item on the projects page. */
  featured?: boolean;
  /** Set when the project placed at a competition; highlights the card. */
  award?: {
    place: string;
    event: string;
    hosts: string;
  };
}

export const projects: Project[] = [
  {
    title: "LeKiwi",
    description: "An open-source, low-cost mobile-manipulator.\n A SIGRobotics x Huggingface LeRobot collaboration.",
    image: "https://github.com/SIGRobotics-UIUC/LeKiwi/raw/main/media/lekiwi_real.jpg",
    link: "https://github.com/SIGRobotics-UIUC/LeKiwi?tab=readme-ov-file",
    status: "Completed",
    featured: true
  },
  {
    title: "Matcha Bot",
    description: "Automating the matcha-making process with two SO-101 arms, running the GR00T N1.5 VLA model on a Jetson Thor.",
    image: matchabot,
    link: "https://www.hackster.io/sigrobotics/matcha-bot-sigrobotics-embodied-ai-hackathon-1st-place-f0e520",
    status: "Completed",
    award: {
      place: "1st Place",
      event: "2025 Embodied AI Hackathon",
      hosts: "NVIDIA · Hugging Face · Seeed Studio"
    }
  },
  {
    title: "Robot Arms",
    description: "Training bimanual robot manipulation policies for difficult tasks on multiple embodiments (YAM, OMX, SO-101).",
    image: arm,
    link: "",
    status: "Ongoing"
  },
  {
    title: "Booster Humanoid",
    description: "Researching humanoid robot learning, using the Booster as a platform for deploying RL policies, retargeting, and more.",
    image: booster,
    link: "",
    status: "Ongoing"
  },
  {
    title: "RoboRacer Competition",
    description: "Racing a 1/10-scale car head-to-head at RoboRacer (formerly F1TENTH), building the full onboard stack: SLAM localization, raceline planning, and high-speed control.",
    image: temp,
    link: "https://github.com/SIGRobotics-UIUC/f1tenth",
    status: "Ongoing"
  },
  {
    title: "Brain Computer Interface",
    description: "Controlling robot arms to do manipulation tasks via BCI interface.",
    image: temp,
    link: "",
    status: "Ongoing"
  }, 
  {
    title: "Bracket Bot",
    description: "Developing Bracket Bot hardware and software stack to create a mobile manipulator to do household tasks, running on in-house developed world models and navigation / path planning algorithms.",
    image: temp,
    link: "",
    status: "Ongoing"
  }, 
  {
    title: "Booster Hand",
    description: "Creating a dexterous hand for the Booster K1 and integrating it into the firmware to be controlled natively.",
    image: temp,
    link: "",
    status: "Ongoing"
  },
  {
    title: "Hardware Group",
    description: "Making various novel physical robots, such as a real life pixar lamp and a wall climbing robot.",
    image: temp,
    link: "",
    status: "Ongoing"
  },  
  {
    title: "Earth Rover SDK Development & Open Sourcing",
    description: "",
    image: temp,
    link: "",
    status: "Completed"
  },  
  
];
