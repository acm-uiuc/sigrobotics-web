// data/aboutData.ts

import bhargav from '../assets/exec/bhargav.jpg';
import gloria from '../assets/exec/gloria.jpg';
import advait from '../assets/exec/advait.jpg';
import reid from '../assets/exec/reid.jpg';
import manav from '../assets/exec/manav.jpg';
import saketh from '../assets/exec/saketh.jpg';
import henry from '../assets/exec/henry.jpg';
import leo from '../assets/exec/leo.jpg';
import robert from '../assets/exec/robert.jpg';
import keshav from '../assets/exec/keshav.jpg';
import aarsh from '../assets/exec/aarsh.jpg';
import gokul from '../assets/exec/gokul.jpg';
import ewan from '../assets/exec/ewan.jpg';

import amazon from '../assets/companies/amazon.png';
import anduril from '../assets/companies/anduril.png';
import dyna from '../assets/companies/dyna.png';
import generalbiological from '../assets/companies/generalbiological.png';
import gm from '../assets/companies/gm.png';
import lightberry from '../assets/companies/lightberry.png';
import meta from '../assets/companies/meta.png';
import mindrobotics from '../assets/companies/mindrobotics.png';
import nasa from '../assets/companies/nasa.png';
import nvidia from '../assets/companies/nvidia.png';
import saronic from '../assets/companies/saronic.png';
import scenix from '../assets/companies/scenix.png';
import sliprobotics from '../assets/companies/sliprobotics.png';
import waabi from '../assets/companies/waabi.png';
import zoox from '../assets/companies/zoox.png';

export const whatWeDo = [
  "Weekly workshops and lectures on robotics topics",
  "Hands-on projects and build sessions",
  "Speaker events and paper reading groups",
  "Collaboration with industry partners on cutting-edge projects"
];


export const chairs = [
  { name: 'Manav Chandaka', link: 'https://www.linkedin.com/in/manavchandaka/', image: manav },
  { name: 'Robert Molina', link: 'https://www.linkedin.com/in/rcmolina', image: robert },
  { name: 'Keshav Badrinath', link: 'https://keshavbadrinath.com', image: keshav },
  { name: 'Aarsh Mittal', link: 'https://aarsh.dev', image: aarsh },
  { name: 'Gokul Balaji', link: '', image: gokul },
  { name: 'Ewan McPhilliamy', link: '', image: ewan },
];

export const retired = [
  { name: 'Saketh Kantipudi', link: 'https://www.linkedin.com/in/saketh-kantipudi/', image: saketh },
  { name: 'Reid Faistl', link: 'https://www.linkedin.com/in/reid-faistl-8165412a7/', image: reid },
  { name: 'Leo Lin', link: 'https://www.leo-lin.com/', image: leo },
];

export const founders = [
  { name: 'Bhargav Chandaka', link: 'https://bchandaka.github.io/', image: bhargav },
  { name: 'Gloria Wang', link: 'https://gxywang.github.io/', image: gloria },
  { name: 'Advait Patel', link: 'https://advaitpatel.com', image: advait },
  { name: 'Henry Che', link: 'https://hungdche.github.io/', image: henry },
];

export interface Company {
  name: string;
  logo: string;
}

export const companies: Company[] = [
  { name: 'Amazon Robotics', logo: amazon },
  { name: 'Anduril', logo: anduril },
  { name: 'DYNA Robotics', logo: dyna },
  { name: 'General Biological', logo: generalbiological },
  { name: 'General Motors', logo: gm },
  { name: 'Lightberry', logo: lightberry },
  { name: 'Meta', logo: meta },
  { name: 'Mind Robotics', logo: mindrobotics },
  { name: 'NASA', logo: nasa },
  { name: 'NVIDIA', logo: nvidia },
  { name: 'Saronic', logo: saronic },
  { name: 'SceniX', logo: scenix },
  { name: 'Slip Robotics', logo: sliprobotics },
  { name: 'Waabi', logo: waabi },
  { name: 'Zoox', logo: zoox },
];
