// src/data/sponsorsData.ts
import bitrobot from '../assets/sponsors/bitrobot.png';
import frodobots from '../assets/sponsors/frodobots.png';
import illinois from '../assets/sponsors/illinois.png';
import lerobot from '../assets/sponsors/lerobot.png';
import neuralink from '../assets/sponsors/neuralink.png';
import robotis from '../assets/sponsors/robotis.png';
import saronic from '../assets/sponsors/saronic.png';

export interface Sponsor {
  name: string;
  logo: string;
  link: string;
}

export const sponsors: Sponsor[] = [
  { name: 'FrodoBots', logo: frodobots, link: 'https://www.frodobots.ai/' },
  { name: 'BitRobot Foundation', logo: bitrobot, link: 'https://bitrobot.ai/' },
  { name: 'Saronic', logo: saronic, link: 'https://www.saronic.com/' },
  { name: 'ROBOTIS', logo: robotis, link: 'https://en.robotis.com/' },
  { name: 'Hugging Face LeRobot', logo: lerobot, link: 'https://huggingface.co/lerobot' },
  { name: 'Neuralink', logo: neuralink, link: 'https://neuralink.com/' },
  { name: 'UIUC Siebel School', logo: illinois, link: 'https://siebelschool.illinois.edu/' },
];
