import React from 'react';
import '../styles/Meetings.css';

interface Resource {
  type: string;
  link: string;
}

interface Meeting {
  date: string;
  topic: string;
  resources: Resource[];
}

const sp25: Meeting[] = [
  { date: '01/29/2025', topic: 'Semester Planning', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1Yt_LLDCMyGKCyinBgNOgJv7d9tfg4tfFyYhQmeqXQYM/edit"},
      ] },
  { date: '02/05/2025', topic: 'MuJoCo', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1dtGuj1q1uO8wdr6FZLxzAh77IQDhmHhxI-hjjub0eQo/edit#slide=id.g3176b23e2f2_0_219"},
      {type: "code", link: "https://github.com/SIGRobotics-UIUC/mujoco-tutorial"}
    ] },
  { date: '02/12/2025', topic: 'Hardware: Wheels & Drive', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/19MKd18vV81n01lx9o5e6ZMqhpIm6HYFsRUGzxj5kcJI/edit#slide=id.g3042e88b18b_0_1"},
      {type: "code", link: "https://github.com/SIGRobotics-UIUC/mujoco-tutorial"}
    ] },
  { date: '02/19/2025', topic: 'Pose and Coordinate Frames', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1gQmzEhVNXKojIF5VDBNTez28WQMZHL8fVRPQ6nVaNe8/edit#slide=id.g3042e88b18b_0_1"},
    ] },
  { date: '02/26/2025', topic: 'Color Space, Convolutions, & Image Filters', 
  resources: [
    {type: "slides", link: "https://docs.google.com/presentation/d/1usjsmYJrFgOdpj00n6q1asGeDfxnsJnOMicZYeV5J5c/edit#slide=id.g3042e88b18b_0_1"},
    {type: "code", link: "https://github.com/SIGRobotics-UIUC/image_filters/tree/main"}
  ] },
  { date: '03/05/2025', topic: 'Intro to Deep Learning', 
  resources: [
    {type: "slides", link: "https://docs.google.com/presentation/d/1EMNG_Klj09sia6wKPTzDC4YqWXp7Eqs6Mx1fDytpExs/edit#slide=id.g3042e88b18b_0_1"},
    {type: "code", link: "https://colab.research.google.com/drive/14J43qe3sXpsUaEnMAtZLYV8gfgoJPWFm?usp=sharing"}
  ] },
  { date: '04/16/2025', topic: 'Sensors and SLAM', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/11z1wewL8PcIX6G--HiXj6dLAWS9ETcUcaHkt2SBc3xE/edit#slide=id.g3042e88b18b_0_1"},
  ] },
  // { date: '', topic: '', 
  //   resources: [
  //     {type: "slides", link: ""},
  //     {type: "code", link: ""}
  //   ] },
  // Add more meetings...
];

const fa24: Meeting[] = [
  { date: '09/05/2024', topic: 'ACM Open House', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1iwuhi3JMQGXlhGZhcbsDayfchMy4q3F1UUyoHIdDmnA/edit#slide=id.g287257a758a_2_0"}
    ] },
  { date: '09/19/2024', topic: 'Intro to SIGRobotics', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1PX_roKRyHUz0HOHSoFXWEx2PEgt8RWdr89Ontx5DLXs/edit?usp=sharing"},
      {type: "code", link: "https://github.com/SIGRobotics-UIUC/aruco-tutorial"}
    ] },
  { date: '09/26/2024', topic: 'Intro to Robotics', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1A2LnR74Gga5xZSg0ioO6s2Fb2-dNhhhBzkXClXNwhkY/edit?usp=sharing"},
      {type: "code", link: "https://github.com/omarrayyann/MujocoAR"}
    ] },
  { date: '10/03/2024', topic: 'Intro to Computer Vision', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1EbaqISHn6tAS372vbSHSHzNM-s17FMreE_XbHELkWxQ/edit?usp=sharing"},
      {type: "code", link: "https://poly.cam/"}
    ] },
  { date: '10/10/2024', topic: 'Intro to Deep Learning', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1hsOY4OF05Be9EkXTLK5WRUk9DVEzOov0svzqR9LSVa8/edit?usp=sharing"},
      {type: "code", link: "https://colab.research.google.com/drive/17N6acHS-qvgtfgkI0crFkxKz37-6KQsl?usp=sharing"}
    ] },
  { date: '10/17/2024', topic: 'Intro to Simulation', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1vTJGNPUZe9h3PEfZOc5Zf5h5ok5GqTXdLYwEMIZbePA/edit#slide=id.g3042e88b18b_0_1"},
      {type: "code", link: "https://github.com/SIGRobotics-UIUC/gym-lowcostrobot"}
    ] },
  { date: '10/22/2024', topic: 'Intro to Control Theory', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1LW7BMl6lEWRnv0WcYlCofJ1pBVoirI4S0ND613qb-ng/edit?usp=sharing"},
      {type: "code", link: "https://sparshg.dev/pid-balancer/"}
    ] },
    { date: '11/22/2024', topic: 'Robot Simulation', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1KQSFmpOpbs8NVGUocRyxGzeousKPUbfGytIpl0VJ4zs/edit?usp=sharing"},
      {type: "code", link: "https://github.com/SIGRobotics-UIUC/min-cartpole"}
    ] },
  { date: '11/19/2024', topic: 'Motion Planning', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/16lQ9hDaYBDD3pafss-KkI-cSvQ4WVL6mLJkh7YbN6yk/edit#slide=id.g3042e88b18b_0_1"},
    ] },
];

const Meetings: React.FC = () => {
  return (
    <div className="layout-xl">
      <h1 className="heading-title">Meetings</h1>
      <div>
        <h2 className="heading-subtitle-bold">When & Where</h2>
        <p><b>General Meeting:</b> Thursdays, 6-7 PM | Siebel 1304</p>
        <p><b>Project Meeting:</b> Sundays, 2-3 PM | Siebel 0220</p>
      </div>
      <div className="layout-md">
        <h2 className="heading-subtitle-bold">Spring 2025</h2>
        <table className="meeting-schedule">
          <thead>
            <tr>
              <th>Date</th>
              <th>Topic</th>
              <th>Resources</th>
            </tr>
          </thead>
          <tbody>
            {sp25.map((meeting, index) => (
              <tr key={index}>
                <td>{meeting.date}</td>
                <td>{meeting.topic}</td>
                <td>{meeting.resources.map((resource, index) => (
                  <span key={index}>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {"["+resource.type+"]"}
                    </a>
                    {index < meeting.resources.length - 1 ? ', ' : ''}
                  </span>
                ))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="layout-sm">
        <h2 className="heading-subtitle-bold">Fall 2024</h2>
        <table className="meeting-schedule">
          <thead>
            <tr>
              <th>Date</th>
              <th>Topic</th>
              <th>Resources</th>
            </tr>
          </thead>
          <tbody>
            {fa24.map((meeting, index) => (
              <tr key={index}>
              <td>{meeting.date}</td>
              <td>{meeting.topic}</td>
              <td>{meeting.resources.map((resource, index) => (
                <span key={index}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {"["+resource.type+"]"}
                  </a>
                  {index < meeting.resources.length - 1 ? ', ' : ''}
                </span>
              ))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Meetings;