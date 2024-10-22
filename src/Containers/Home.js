import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import pic9 from "./IOT Security Issues.png"; 
import pic10 from "./connect.png";
import pic11 from "./IOT_overview.jpg";
import pic12 from "./MI Integration.png";

function Home() {
  const [activeSection, setActiveSection] = useState('Abstract');
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sections = {
    Abstract: {
      title: "Abstract",
      content: (
        <>
          <p>The Web of Things (WoT) promises to seamlessly integrate numerous devices onto the Internet, transforming everyday objects into smart, interconnected components. This survey goes deeply into the systems and infrastructure that support WoT, investigating the field's intricacies, innovations, and future potential. This review examines recent research breakthroughs in IoT and WoT studies, focusing on five main areas: security, device management, interoperability, machine learning applications, and specialized architectures.</p>
          <p>Security studies address weaknesses like hacking and data breaches by employing a variety of remedies such as encryption and machine learning-based anomaly detection. The papers on device management present a framework for discovering and controlling IoT devices based on Thing Descriptions (TDs). Interoperability research focuses on the use of web standards and middleware to address fragmentation concerns. Machine learning approaches, such as reinforcement learning, focus on optimization. Application-specific research focuses on health monitoring structures and search engines.</p>
          <p>The current survey summarizes approaches and issues while also providing insights for future research. WoT holds immense potential in various applications, but it also faces challenges, primarily in terms of security, scalability, and standardization. Continued research is necessary to unlock the full potential of WoT technologies.</p>
          <div style={{ textAlign: "center" }}>
            <img src={pic10} alt="Number of Devices Connected over years" style={{ width: "100%", maxWidth: "400px" }} />
            <p>Devices Connected in billion from the year 2015 to 2025</p>
          </div>
        </>
      )
    },
    challenges: {
      title: "Key Challenges in the Field",
      content: (
        <>
          <p>The rapidly increasing development of IoT devices presents a number of key issues in the industry. First and foremost, security and privacy concerns must be addressed; as the number of networked devices increases, so does the risk of security breaches and privacy violations. This risk is heightened by the variety and capabilities of the devices involved.</p>
          <p>Second, interoperability and standardization are significant challenges; without uniform standards across platforms and devices, efficient integration and functioning cannot be realized. Third, scaling and managing an expanding network of devices provide significant issues, particularly in preserving performance as the system grows.</p>
          <p>Finally, energy efficiency is a crucial issue; the increasing number of devices connecting to the Internet greatly raises energy demand, emphasizing the urgent need for more sustainable solutions. These problems not only illustrate the difficulty of integrating IoT into our daily lives, but they also identify crucial areas that must be addressed in order to fully realize the potential of IoT technologies.</p>
          <div style={{ textAlign: "center" }}>
            <img src={pic9} alt="Challenges in IoT" style={{ width: "100%", maxWidth: "400px" }} />
            <p>Image shows the types of security challenges in IOT</p>
          </div>
        </>
      )
    },
    trends: {
      title: "Recent Trends and Advancements",
      content: (
        <>
          <p>Innovations of the Web of Things ‘WoT’ are defining its future with advances in addressing current issues and the proliferation of opportunities. Edge and Fog Computing are revolutionary key technologies that help decrease latency and increase overall response times through data computation near the source of the data. The decentralization also allows for better control of the data traffic and increases signaling and processing time.</p>
          <p>Furthermore, AI & ML integration is enhancing many IoT devices to be more intelligent for making efficient and intelligent decisions on their own. This integration enables the engineering of more sophisticated systems that execute intelligent and proactive activities, as well as reactive actions.</p>
          <p>Moreover, the application of Blockchain Technology is gaining significance in providing security to IoT transactions and data exchanges to build trust. Its architecture is effective in protecting data and providing transparency in all transactions. Finally, Semantic Technologies are undergoing application in device interconnectivity and data harmonization. The existent technologies offer a system structure that fosters the comprehension and cooperation between different systems, making WoT more secure and universal.</p>
          <div style={{ textAlign: "center" }}>
            <img src={pic12} alt="IoT in the era of Generative AI" style={{ width: "100%", maxWidth: "400px" }} />
            <p>Synergizing Generative AI and IoT Devices</p>
          </div>
        </>
      )
    },
    future: {
      title: "Future Research Directions",
      content: (
        <>
          <p>In the future, great advancements are expected in the actual domain of the Web of Things (WoT), with proposed solutions aimed at solving emerging challenges and improving the applicability as well as security of the technology. Advanced Security Mechanisms is an important field as new solutions must be developed to enhance the security of IoT networks in regard to new threats.</p>
          <p>It comprises a much more advanced approach to utilize cryptographic procedures as well as intrusion detection tailored to IoT environments. At the same time, the shift toward Autonomous Systems is pronounced as a research paradigm: it focuses on developing systems that require limited supervision from people, thus reducing human error as a source of problems.</p>
          <p>Furthermore, the formulation of Universal Standards is key to WoT’s future. Establishing international standards will guarantee patterns, allowing devices from different producers to share information, making device compatibility and efficiency more attainable. Finally, Sustainable Practices are gaining attention, and research focuses on creating energy-efficient solutions for the growing IoT network. These technologies aim for energy savings not just for individual devices but also for integrating renewable energy to compensate for negative impacts of IoT applications.</p>
          <div style={{ textAlign: "center" }}>
            <img src={pic11} alt="IoT Overview" style={{ width: "100%", maxWidth: "400px" }} />
            <p>Image shows every device Seamlessly Integrated through the Internet of Things (IoT)</p>
          </div>
        </>
      )
    }
  };

  return (
    <div className="home">
      <div className="content">
        {isMobile ? (
          <>
            {Object.keys(sections).map((key) => (
              <div key={key}>
                <h2>{sections[key].title}</h2>
                {sections[key].content}
              </div>
            ))}
          </>
        ) : (
          <>
            
            <h2>{sections[activeSection].title}</h2>
            {sections[activeSection].content}
          </>
        )}
      </div>

      
      {!isMobile && (
        <div className="sidebar">
          <h2>Overview</h2>
          <ul>
            <li onClick={() => setActiveSection('Abstract')}>Abstract</li>
            <li onClick={() => setActiveSection('challenges')}>Key Challenges in the Field</li>
            <li onClick={() => setActiveSection('trends')}>Recent Trends and Advancements</li>
            <li onClick={() => setActiveSection('future')}>Future Research Directions</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
