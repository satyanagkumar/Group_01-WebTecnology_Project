import React, { useState } from 'react';
import pic9 from "./IOT Security Issues.png"; 
import pic10 from "./connect.png";
import pic11 from "./IOT_overview.jpg" ;
import pic12 from "./MI Integration.png" // Ensure the image path is correct

function Home() {
  const [activeSection, setActiveSection] = useState('Abstract');

  const sections = {
    Abstract:{
      title: "Abstract",
      content: (
        <>
        <p>The Web of Things (WoT) promises to seamlessly integrate numerous devices onto the Internet, transforming everyday objects into smart, interconnected components. This survey goes deeply into the systems and infrastructure that support WoT, investigating the field's intricacies, innovations, and future potential. This review examines recent research breakthroughs in IoT and WoT studies, focusing on five main areas: security, device management, interoperability, machine learning applications, and specialized architectures. Security studies address weaknesses like as hacking and data breaches by employing a variety of remedies such as encryption and machine learning-based anomaly detection. The papers on device management present a framework for discovering and controlling IoT devices based on Thing Descriptions (TDs). Interoperability research focuses on the use of web standards and middleware to address fragmentation concerns. Machine learning approaches, such as reinforcement learning, seek on optimization. Application-specific research focuses on health monitoring structures and search engines. The current survey summarizes approaches and issues while also providing insights for future research.</p>
        <div style={{ textAlign: "center" }}>
          <img src={pic10} alt="Number of Devices Connected over years" style={{width: "100%", maxWidth: "400px"}} />
          <p>Devices Connected in billion from the year 2015 to 2025</p>
       </div>
      </>

      )
    },
    challenges: {
      title: "Key Challenges in the Field",
      content: (
        <>
          <p>The rapidly increasing development of IoT devices presents a number of key issues in the industry. First and foremost, security and privacy concerns must be addressed; as the number of networked devices increases, so does the risk of security breaches and privacy violations. This risk is heightened by the variety and capabilities of the devices involved. Second, interoperability and standardization are significant challenges; without uniform standards across platforms and devices, efficient integration and functioning cannot be realized. Third, scaling and managing an expanding network of devices provide significant issues, particularly in preserving performance as the system grows. Finally, energy efficiency is a crucial issue; the increasing number of devices connecting to the Internet greatly rises energy demand, emphasizing the urgent need for more sustainable solutions.These problems not only illustrate the difficulty of integrating IoT into our daily lives, but they also identify crucial areas that must be addressed in order to fully realize the potential of IoT technologies
          </p>
          <div style={{ textAlign: "center" }}>
          <img src={pic9} alt="Challenges in IoT" style={{width: "100%", maxWidth: "400px"}} />
          <p>Image shows the types of security challenges in IOT</p>
       
       </div>
        </>
      )
    },
    trends: {
      title: "Recent Trends and Advancements",
      content: (
        <>
        <p>Innovations of the Web of Things ‘WoT’ are defining its future with advances in addressing current issues and proliferation of opportunities. Edge and Fog Computing are revolutionary Key technologies which help to decrease latency and increase overall response times through data computation near the source of the said data. The decentralisation also allows for better control of the data traffic and increases signalling and processing time. Further, AI & ML integration is enhancing many IoT devices to be more intelligent for making efficient and intelligent decisions at its own. This integration enables the engineering of more sophisticated systems that execute intelligent and proactive activities, as well as reactive actions. Moreover, application of Blockchain Technology is gaining significance in providing a security to IoT transactions and data exchanges to build up trust. Its architecture is effective in protecting data and providing transparency in all the transactions. Finally, Semantic Technologies are undergoing application in device interconnectivity and data harmonization. The existent technologies offer a system structure that fosters the comprehension and cooperation between different systems and makes the WoT more secure and universal. Altogether, these trends and demands, indeed, responses to the WoT current problems as well as set the stage for further, more enhanced evolution of technologies there.</p>
        <div style={{ textAlign: "center" }}>
          <img src={pic12} alt="IoT in the era of Generative AI" style={{width: "100%", maxWidth: "400px"}} />
          <p>Synergizing Generative AI and IoT Devices</p>
          <p></p>
       
       </div>
       </>
      )
      
    },
    future: {
      title: "Future Research Directions",
      content: (
        <>
        <p>In the future, there are great advancements that are expected to take place in the actual domain of the Web of Things (WoT), with proposed solutions aimed to solve some of the emerging and challenging issues and to improve the applicability as well as security of the technology. Advanced Security Mechanisms is an important field as new solutions have to be developed in order to enhance security of IoT networks in regard to new threats that appear from time to time. It comprises the creation of a much more advanced approach to utilize cryptographic procedures as well as utilization of intrusion detection that meets IoT environment requirements. At the same time, the shift towards Autonomous Systems is pronounced as a shift in paradigm in research: it focuses on developing systems that will require limited super-vision from people, and thus, contribute to reducing human factor as a source of errors. Furthermore, it is accepted that the formulations for the Universal Standards are important to the future of WoT. Formulating informative, international characteristics would guarantee patterns, having obtained devices from different producers, capable of sharing information, making device compatibility and efficiency attainable. Finally, Sustainable Practices are gaining more attention, and research focuses on creating energy efficiency solutions for the growing IoT network. These technologies are not only intended for energy saving of particular devices but also for the integration of renewable energy within them where possible to compensate for negative impacts of the overall IoT applications.</p>
        <div style={{ textAlign: "center" }}>
          <img src={pic11} alt="IoT Overview" style={{width: "100%", maxWidth: "400px"}} />
          <p>Image shows every device Seamlessly Integrated through the Internet of Things (IoT)</p>
       
       </div> 
       </>
      
      )
    }
  };

  return (
    <div className="home">
      <div className="content">
        <h2>{sections[activeSection].title}</h2>
        {sections[activeSection].content}
      </div>
      <div className="sidebar"> 
        <h2>Overview</h2>
        <ul>
          <li onClick={() => setActiveSection('Abstract')}>Abstract</li>
          <li onClick={() => setActiveSection('challenges')}>Key Challenges in the Field</li>
          <li onClick={() => setActiveSection('trends')}>Recent Trends and Advancements</li>
          <li onClick={() => setActiveSection('future')}>Future Research Directions</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
