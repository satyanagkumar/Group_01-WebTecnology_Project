import React, { useState } from 'react';
import pic from "./1.png"

const teamMembers = [
  { name: "NagendraKumar", role: "Web Developer", bio: "Nagendra has experience in managing software development projects.", photo: pic },
  { name: "Abdul", role: "Content Validator", bio: "Abdul specializes in Validating the Content in the webPage.", photo: pic },
  { name: "Gayatri", role: "Web Developer", bio: "Gayatri is expert in user interface design and user experience optimization.", photo: pic },
  { name: "Shruthi", role: "Reporting and Delivery Lead", bio: "Shruthi Manages the team Deliverables with in Time", photo: pic },
  { name: "Sivalakshmi", role: "Content Validator", bio: "Sivalakshmi ensures the content of webpage is Upto mark.", photo: pic }
];

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = member => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
