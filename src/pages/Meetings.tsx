import React from 'react';
import '../styles/Meetings.css';

interface Meeting {
  date: string;
  topic: string;
  tags: string[];
}

const meetings: Meeting[] = [
  { date: '2024-10-13', topic: 'Week 06: Robotics Basics', tags: ['intro', 'mechanics'] },
  { date: '2024-10-06', topic: 'Week 05: Sensor Integration', tags: ['sensors', 'programming'] },
  // Add more meetings...
];

const Meetings: React.FC = () => {
  return (
    <div className="meetings">
      <h1>Meetings</h1>
      <div className="meeting-times">
        <h2>Fall 2024 General Meetings</h2>
        <p>Thursdays, 6-7 PM | Robotics Lab Room 101</p>
        <p>Sundays, 2-3 PM | Robotics Lab Room 101</p>
      </div>
      <table className="meeting-schedule">
        <thead>
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, index) => (
            <tr key={index}>
              <td>{meeting.date}</td>
              <td>{meeting.topic}</td>
              <td>{meeting.tags.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meetings;