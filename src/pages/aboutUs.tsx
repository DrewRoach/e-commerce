import React from "react";
import "./aboutUs.css";
import LohithImage from "../assets/Lohith.jpg";
import DrewImage from "../assets/IMG_6532.jpeg";
import RonitImage from "../assets/20231008_232814.jpg";

const teamMembers = [
  {
    name: "Lohith Maralla",
    title: "CEO",
    image: LohithImage,
    description:
      "Lohith Maralla is a senior at the Ohio State University majoring in computer science and engineering. His specialization is software engineering, and he enjoys both front-end and back-end development. His hobbies include playing soccer and watching movies.",
  },
  {
    name: "Drew Arocha",
    title: "CTO",
    image: DrewImage,
    description:
      "Drew Arocha is our Chief Technology Officer. He is a senior at Ohio State University majoring in computer science. He oversees the technical aspects of our projects.",
  },
  {
    name: "Ronit Jain",
    title: "COO",
    image: RonitImage,
    description:
      "Ronit Jain is a senior at the Ohio State University majoring in Computer Science and Engineering. He serves as our COO and oversees day-to-day tasks and operations. In his free time, he enjoys playing the piano or competing in chess and esports.",
  },
  // Add more team members here with unique information
];

const AboutUs = () => {
  return (
    <div className="team-section">
      <div className="inner-width">
        <h2>Meet our Team</h2>
        <div className="pers">
          {teamMembers.map((teamMember, index) => (
            <div className="pe" key={index}>
              <img src={teamMember.image} alt={teamMember.name} />
              <div className="p-name">{teamMember.name}</div>
              <div className="p-des">{teamMember.title}</div>
              <div className="p-description">
                {teamMember.description.split('. ').map((sentence, idx) => (
                  <p key={idx}>{sentence}.</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
