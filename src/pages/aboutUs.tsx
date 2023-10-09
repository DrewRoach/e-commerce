import React from "react";
import LohithImage from "../assets/Lohith.jpg";
import DrewImage from "../assets/IMG_6532.jpeg";
import RonitImage from "../assets/20231008_232814.jpg"

const teamMembers = [
  {
    name: "Lohith Maralla",
    title: "CEO",
    image: LohithImage, // Use the imported image
    description:
      "Lohith Maralla is a senior at the Ohio State University majoring in computer science and engineering. His specialization is software engineering, and he enjoys both front-end and back-end development. His hobbies include playing soccer and watching movies.",
  },
  {
    name: "Drew Arocha",
    title: "CTO",
    image: DrewImage,
    description:
      "Drew Arocha is our Chief Technology Officer. He is a senior at Ohio State University majoring in computer science.  He oversees the technical aspects of our projects.",
  },
  {
    name: "Ronit Jain",
    title: "COO",
    image: RonitImage, 
    description:
      "Ronit Jain is a senior at the Ohio State University majoring in Computer Science and Engineering. He serves as our COO and oversees day-to-day tasks and operations. In his free time, he enjoys playing the piano, or competing in chess and esports",
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
            <img
              src={member.image}
              alt={member.name}
              style={{ width: "200px", height: "auto" }}
            />
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
