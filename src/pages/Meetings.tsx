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

const sp26: Meeting[] = [
  { date: '01/27/2026', topic: 'Semester Planning', 
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1od6GCKpglS3Tz92DGrVOZyeAOICjU9RFCcElmb4VePY/edit"},
    ] },
  { date: '01/27/2026', topic: 'Pose and Coordinate Frames',
    resources: [
      {type: "slides", link: "https://docs.google.com/presentation/d/1_A7KlO1l7nkaIzwfFUKeIyLa8NTt2WNPBtr8jSUmCo0/edit"},
    ] },
  // { date: '', topic: '', 
  //   resources: [
  //     {type: "slides", link: ""},
  //     {type: "code", link: ""}
  //   ] },
  // Add more meetings...
];

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
// Not scheduled yet — the section renders a placeholder until it fills in.
const fa26: Meeting[] = [];

/** "MM/DD/YYYY" -> sortable timestamp; 0 if the string is malformed. */
const parseDate = (value: string): number => {
  const [month, day, year] = value.split('/').map(Number);
  if (!month || !day || !year) return 0;
  return new Date(year, month - 1, day).getTime();
};

const SemesterSchedule = ({
  title,
  meetings,
  inProgress = false,
}: {
  title: string;
  meetings: Meeting[];
  inProgress?: boolean;
}) => {
  // Most recent workshop first.
  const ordered = [...meetings].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  return (
  <section className="meeting-semester">
    <div className="meeting-semester-head">
      <h2 className="heading-subtitle-bold">{title}</h2>
      {inProgress && <span className="meeting-flag">In progress</span>}
    </div>

    {meetings.length === 0 ? (
      <p className="meeting-empty">
        Schedule is being finalised — check back soon.
      </p>
    ) : (
      <table className="meeting-schedule">
        <colgroup>
          <col className="meeting-col-date" />
          <col className="meeting-col-topic" />
          <col className="meeting-col-resources" />
        </colgroup>
        <thead>
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Resources</th>
          </tr>
        </thead>
        <tbody>
          {ordered.map((meeting, index) => (
            <tr key={index}>
              <td>{meeting.date}</td>
              <td>{meeting.topic}</td>
              <td>
                {meeting.resources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meeting-resource"
                  >
                    {resource.type}
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </section>
  );
};

const Meetings: React.FC = () => {
  return (
    <div className="layout-xl">
      <h1 className="heading-title">Meetings</h1>

      <section className="meeting-semester">
        <h2 className="heading-subtitle-bold">When &amp; Where</h2>
        <dl className="meeting-when">
          <div>
            <dt>General meeting</dt>
            <dd>Tuesdays, 7–8 PM · Siebel 1302</dd>
          </div>
          <div>
            <dt>Project meeting</dt>
            <dd>Saturdays, 1–3 PM · Siebel 2405</dd>
          </div>
        </dl>
      </section>

      <SemesterSchedule title="Fall 2026" meetings={fa26} inProgress />
      <SemesterSchedule title="Spring 2026" meetings={sp26} />
      <SemesterSchedule title="Spring 2025" meetings={sp25} />
      <SemesterSchedule title="Fall 2024" meetings={fa24} />
    </div>
  );
};

export default Meetings;
