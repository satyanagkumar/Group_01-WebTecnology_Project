import React, { useState } from 'react';
import pic from "./1.png"

const teamMembers = [
  { name: "NagendraKumar", role: "Project Manager", bio: "Nagendra has over 10 years of experience managing software development projects.", photo: pic },
  { name: "Abdul", role: "Lead Developer", bio: "Abdul specializes in React and has been building scalable applications for 5 years.", photo: pic },
  { name: "Gayatri", role: "UI/UX Designer", bio: "Gayatri is an expert in user interface design and user experience optimization.", photo: pic },
  { name: "Shruthi", role: "Backend Developer", bio: "Shruthi excels in server-side logic and database interactions.", photo: pic },
  { name: "Sivalakshmi", role: "Quality Assurance", bio: "Sivalakshmi ensures that all code meets quality standards before release.", photo: pic }
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
