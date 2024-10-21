import React, { useState } from 'react';
import '../styles/Team.css'; 
import pic from "./Nagendra.jpeg";
import pic2 from "./Gayatri.PNG"
import pic3 from "./Abdul3.jpeg";
import pic4 from "./Shruthi.jpeg";
import pic5 from "./sivalakshmi.jpeg"

const teamMembers = [
  { name: "Venkata Satya S Kumar", role: "Web Developer", bio: "Nagendra has experience in managing software development projects.", photo: pic, contributions: ["Nagendra sucessfully managed the front-end development of the website, delivering a well-organized framework. He also contributed in LaTeX template and conducted a thorough literature review in  template. In addition, he prepared a taxonomy table for our research and carefully picked publications that were closely connected with our survey issue, furthering the depth and usefulness of our study."] },
  { name: "Abdul", role: "Content Validator", bio: "Abdul specializes in Validating the Content in the webPage.", photo: pic3, contributions: ["Abdul was responsible for citing template references and selecting the relevant papers, ensuring that all sources were accurately acknowledged and aligned with the project's objectives."] },
  { name: "Gayatri", role: "Web Developer", bio: "Gayatri is expert in user interface design and user experience optimization.", photo: pic2, contributions: ["Gayatri was responsible for creating the LaTeX template's abstract and introduction, as well as ensuring that all references were cited properly mentioned. In addition, she collaborated with Nagendra to successfully implement the project, providing important perspectives to the team."] },
  { name: "Shruthi", role: "Reporting and Delivery Lead", bio: "Shruthi Manages the team Deliverables within Time", photo: pic4, contributions: ["Shruthi was responsible for selecting the research papers for the project, focusing specifically on those that closely aligned with our survey topic."] },
  { name: "Sivalakshmi", role: "Content Validator", bio: "Sivalakshmi ensures the content of webpage is Upto mark.", photo: pic5, contributions: ["Sivalakshmi was responsible for choosing the research papers for the project, selecting those that best matched our survey theme to enrich our study and findings."] }
];

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showContributions, setShowContributions] = useState(false);

  const handleMemberClick = member => {
    setSelectedMember(member);
    setShowContributions(false); // Reset to hide contributions initially
  };

  const toggleContributions = () => {
    setShowContributions(!showContributions);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setShowContributions(false); // Reset on modal close
  };

  return (
    <div className="team-container">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map(member => (
          <div className="team-member" key={member.name} onClick={() => handleMemberClick(member)}>
            <img src={member.photo} alt={member.name} className="member-photo"/>
            <div className="member-name">{member.name}</div>
          </div>
        ))}
      </div>
      {selectedMember && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{selectedMember.name} - {selectedMember.role}</h2>
            <p>{selectedMember.bio}</p>
            <button onClick={toggleContributions}>Work Contribution</button>
            {showContributions && (
              <p>{selectedMember.contributions.join(' ')}</p> // Join contributions into a single paragraph
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
