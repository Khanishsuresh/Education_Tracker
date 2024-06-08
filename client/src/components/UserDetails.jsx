import React from 'react';

function UserDetails() {
  const name = "Navin kumar R";
  const registrationNumber = "20201234";
  const branch = "Computer Science";
  const year = "2022-2026";
  const cgpa = "8.5";
  const attendance = "95%";
  const skillslist = ["JavaScript", "React", "Node.js", "Python"];
  const expertiselist = ["Web Development", "Machine Learning"];
  const leetcode = "navin_leetcode";
  const codechef = "navin_codechef";
  const codeforce = "navin_codeforce";
  const certificatesList = ["AWS Certified Developer", "Google Cloud Certified"];
  const projectsList = ["Portfolio Website", "E-commerce Platform"];
  const papersList = ["AI in Healthcare", "Blockchain Technology"];
  const awardsList = ["Best Student Award", "Coding Competition Winner"];

  return (
    <div className="details-container">
      <div className="detail-group">
        <h2>{name}</h2>
        <h4>Registration No</h4>
        <p>{registrationNumber}</p>
        <h4>Roll No</h4>
        <p>22CB037</p>
      </div>
      <div className="detail-group">
        <h4>Branch:</h4>
        <p>{branch}</p>
        <h4>Year:</h4>
        <p>{year}</p>
      </div>
      <div className="detail-group">
        <h4>CGPA:</h4>
        <p>{cgpa}</p>
        <h4>Attendance:</h4>
        <p>{attendance}</p>
      </div>
      <div className="detail-group">
        <h4>Skills:</h4>
        <ul>
          {skillslist.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="detail-group">
        <h4>Expertise:</h4>
        <ul>
          {expertiselist.map((expertise, index) => (
            <li key={index}>{expertise}</li>
          ))}
        </ul>
      </div>
      <div className="detail-group">
        <h4>Leetcode:</h4>
        <p>{leetcode}</p>
      </div>
      <div className="detail-group">
        <h4>Codechef:</h4>
        <p>{codechef}</p>
      </div>
      <div className="detail-group">
        <h4>Codeforce:</h4>
        <p>{codeforce}</p>
      </div>
      <div className="detail-group">
        <h4>Certificates:</h4>
        <ul>
          {certificatesList.map((certificate, index) => (
            <li key={index}>{certificate}</li>
          ))}
        </ul>
      </div>
      <div className="detail-group">
        <h4>Projects:</h4>
        <ul>
          {projectsList.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
      <div className="detail-group">
        <h4>Papers:</h4>
        <ul>
          {papersList.map((paper, index) => (
            <li key={index}>{paper}</li>
          ))}
        </ul>
      </div>
      <div className="detail-group">
        <h4>Awards:</h4>
        <ul>
          {awardsList.map((award, index) => (
            <li key={index}>{award}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserDetails;
