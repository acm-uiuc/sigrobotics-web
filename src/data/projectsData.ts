// src/data/projectsData.ts (or wherever you prefer to place it)
import arm from '../assets/projs/arm.png';
import booster from '../assets/projs/booster.jpg';
import marc from '../assets/projs/marc.png';
import matchabot from '../assets/projs/matchabot.jpg';
import placeholder from '../assets/projs/placeholder.svg';
import uavh from '../assets/projs/uavh.png';

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
      place: "Winner",
      event: "2025 Embodied AI Hackathon",
      hosts: "NVIDIA · Hugging Face · Seeed Studio"
    }
  },
  {
    title: "MARC",
    description: "Marker Actuated Robotic Controller \u2014 turning a text prompt into a physical drawing. Stable Diffusion XL generates the artwork, it is vectorized to SVG, and a homography-calibrated SO-ARM 101 draws it with a marker to sub-2mm accuracy.",
    image: marc,
    link: "https://devpost.com/software/marc-marker-actuated-robotic-controller",
    status: "Completed",
    award: {
      place: "Winner",
      event: "Cal Hacks 12.0 \u2014 Best Robotics Hack",
      hosts: "BitRobot Network"
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
    title: "UAV-H",
    description: "Building and flight-testing a hydrogen-powered UAV designed for endurance. A 100 W fuel cell and 45 g of compressed hydrogen drive a 6-10 lb airframe toward 50+ miles of continuous flight \u2014 hydrogen carries roughly 4x the energy density of lithium-ion, refuels in minutes, and emits only water and heat.",
    image: uavh,
    link: "",
    status: "Ongoing"
  },
  {
    title: "RoboRacer Competition",
    description: "Racing a 1/10-scale car head-to-head at RoboRacer (formerly F1TENTH), building the full onboard stack: SLAM localization, raceline planning, and high-speed control.",
    image: placeholder,
    link: "https://github.com/SIGRobotics-UIUC/f1tenth",
    status: "Ongoing"
  },
  {
    title: "Brain Computer Interface",
    description: "Controlling robot arms to do manipulation tasks via BCI interface.",
    image: placeholder,
    link: "",
    status: "Ongoing"
  }, 
  {
    title: "Bracket Bot",
    description: "Developing Bracket Bot hardware and software stack to create a mobile manipulator to do household tasks, running on in-house developed world models and navigation / path planning algorithms.",
    image: placeholder,
    link: "",
    status: "Ongoing"
  }, 
  {
    title: "Booster Hand",
    description: "Creating a dexterous hand for the Booster K1 and integrating it into the firmware to be controlled natively.",
    image: placeholder,
    link: "",
    status: "Ongoing"
  },
  {
    title: "Hardware Group",
    description: "Making various novel physical robots, such as a real life pixar lamp and a wall climbing robot.",
    image: placeholder,
    link: "",
    status: "Ongoing"
  },  
  {
    title: "Earth Rover SDK Development & Open Sourcing",
    description: "",
    image: placeholder,
    link: "",
    status: "Completed"
  },  
  
];
