import React from 'react';
import LohithImage from '../images/Lohith.jpg';

const teamMembers = [
  {
    name: 'Lohith Maralla',
    title: 'CEO',
    image: LohithImage, // Use the imported image
    description: 'Lohith Maralla is a senior at the Ohio State University majoring in computer science and engineering. His specialization is software engineering, and he enjoys both front-end and back-end development. His hobbies include playing soccer and watching movies.',
  },
  {
    name: 'Jane Smith',
    title: 'CTO',
    image: '/jane-smith.jpg', // Replace with the actual image path
    description: 'Jane Smith is our Chief Technology Officer. She oversees the technical aspects of our projects.',
  },
  {
    name: 'Jane Smith',
    title: 'CTO',
    image: '/jane-smith.jpg', // Replace with the actual image path
    description: 'Jane Smith is our Chief Technology Officer. She oversees the technical aspects of our projects.',
  },
  // Add more team members here with unique information
];

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} style={{ width: '200px', height: 'auto' }}/>
            <h2>{member.name}</h2>
            <p>{member.title}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
