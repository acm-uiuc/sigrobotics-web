// src/data/projectsData.ts (or wherever you prefer to place it)
import arm from '../assets/projs/arm.png';
import booster from '../assets/projs/booster.jpg';
import temp from '../assets/temp.jpg';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  status: 'Ongoing' | 'Completed' | 'Archived';
}

export const projects: Project[] = [
  {
    title: "LeKiwi",
    description: "An open-source, low-cost mobile-manipulator.\n A SIGRobotics x Huggingface LeRobot collaboration.",
    image: "https://github.com/SIGRobotics-UIUC/LeKiwi/raw/main/media/lekiwi_real.jpg",
    link: "https://github.com/SIGRobotics-UIUC/LeKiwi?tab=readme-ov-file",
    status: "Completed"
  },
  {
    title: "Robot Arms",
    description: "3D-printed Koch arms for table-top manipulation via imitation learning.",
    image: arm,
    link: "",
    status: "Ongoing"
  },
  {
    title: "Booster Humanoid",
    description: "Reimplementing papers on Booster K1 humanoid",
    image: booster,
    link: "",
    status: "Ongoing"
  },
  {
    title: "Roboracer team",
    description: "Racing a 1/10th scale RC car head to head autonomously",
    image: temp,
    link: "https://github.com/SIGRobotics-UIUC/f1tenth",
    status: "Ongoing"
  },
  {
    title: "Brain Computer Interface",
    description: "",
    image: temp,
    link: "",
    status: "Ongoing"
  }, 
  {
    title: "Bracket Bot",
    description: "",
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
    description: "Making various novel physical robots, such as a real life pixar lamp and a wall climbing robot",
    image: temp,
    link: "",
    status: "Ongoing"
  },  
  {
    title: "Earth Rover open sourcing",
    description: "",
    image: temp,
    link: "",
    status: "Completed"
  },  
  
];
