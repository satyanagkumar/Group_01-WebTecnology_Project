import React, { useRef } from 'react';

function Content() {
  // Correctly initializing refs within the component body
  const paper1Ref = useRef(null);
  const paper2Ref = useRef(null);
  const paper3Ref = useRef(null);
  const paper4Ref = useRef(null);
  const paper5Ref = useRef(null);
  

  const scrollToPaper = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container">
      <div className="contentpage">
        <div className="Cluster">
          <p>The collection of 23 papers has been systematically classified into 5 clusters of papers based on similarities of the formulated problem, solutions and methods. These groups were created to emphasize the specific subject matters in the general contexts of the Internet of Things (IoT) and sometimes referred to as the Web of Things (WoT). Each of them reflect particular aspect of IoT and WoT research encompassing overall security threats, intricacies of device management, pursuit of interoperability, computing methods application, and particular architectural solutions for targeted use cases. This way of structuring not only helps to gain a better understanding of the shared issues and breakthroughs that occur within each topical area but also emphasizes the activity and, on the whole, vast area of research in the rather promising fields of IoT and WoT.</p>
          <ul>
            <li>Cluster 1: Security in IoT and WoT</li>
            <li>Cluster 2: Discovery and Management in IoT/WoT</li>
            <li>Cluster 3: Standards, Interoperability, and Middleware in IoT/WoT</li>
            <li>Cluster 4: Machine Learning and Algorithmic Solutions</li>
            <li>Cluster 5: Application-Specific Implementations and Architectures</li>
          </ul>
        </div>
        <div ref={paper1Ref}>
          <h1>Cluster 1: Security in IoT and WoT</h1>
          <p>These group of papers are centered on the insecurity threats in IoT and Web of Things (WoT systems. The problem definition across these papers is consistent, they all address the growing threats posed by the interconnectivity of devices and their susceptibility to vulnerability to cyber threats such as hacking, data leakage, unauthorized access, and systems’  Failures . The main solution strategy therefore focuses on implementing further security features such as encryption, authentication, and ML-based Anomaly detection to these risks. Some papers (like Paper 2) even highlight employing the methods of ML, while others (Paper 5, for example) describe protocols operating at different IoT layers: perception, network, and application. It usually includes literature review, case studies as well as security frameworks. There are differences in the magnitude of security threats resolved (home automations in Paper 1 have been compared to resolving security threat to broad IoT systems in Paper 6). Some papers (such as paper 15) suggest that multiple-layer security strategies, while others [such as paper 4] focus specifically on a set of security concerns related to IoT search engine..</p>
        </div>
        <div ref={paper2Ref}>
          <h1>Cluster 2: Discovery and Management in IoT/WoT</h1>
          <p>This group of papers have the common problem definition revolves around how diverse and disparate IoT devices call for challenging Integrated Management and both their communication and data transfer protocols. In the papers, the challenges involved in providing the enabling capability for discoverability and composability of devices in IoT and WoT environments are thoroughly explored. The solution approach approach establishing frameworks for the recognition, enrollment, and control of IoT devices (as shown in Paper 3 and Paper 8) that is often enhanced by the implementation of Thing Descriptions (TDs). The methodology usually involves experiments or simulations, for instance WoT Lab in Paper 3 or the network scanning in Paper 8 to evaluate the impact the proposed discovery models in dynamic contexts. As expected, all the papers aim at addressing the heterogeneity problem and Paper 16 extends the work by primarily targeting Smart Buildings but employing also building metadata integration into the discovery process which, indeed, is slightly different from the general approach made in other papers of this group.</p>
        </div>
        <div ref={paper3Ref}>
          <h1>Cluster 3: Standards, Interoperability, and Middleware in IoT/WoT</h1>
          <p>Every one of the papers in this group basically talk about the problem definition of fragmentation and lack of interoperability which hinders the integration of IoT/WoT systems across the devices. The solution approach involves the use of web standards and middleware solutions to achieve better interoperability and standardization across systems. Papers like Paper 12 and Paper 23 propose using semantic web technologies to enhance data sharing and device communication. Paper 7 and Paper 17 take a more middleware-centric approach, focusing on frameworks that integrate IoT systems with web standards. The methodology in this cluster of papers commonly a review of the existing frameworks, standards and middleware architectures comparing their efficacy in different scenarios . The first one is the difference in scope and the subject of the problems investigated: Paper 23 is devoted to the analysis of the lack of integration with the semantic web, while Paper 7 discusses IoT-Cyber-Physical Systems integration in general.</p>
        </div>
        <div ref={paper4Ref}>
          <h1>Cluster 4: Machine Learning and Algorithmic Solutions</h1>
          <p>The papers in this group are characterized by the similar problem definition based on optimizing processes in IoT/WoT systems by means of ML and algorithms. For instance, Paper 13 targets web API recommendation under dynamic situations and Paper 22 aims at enhancing matching process in Social Web of Things (S-WoT) situations. The solution approach in these papers involves the application of specific algorithms such as reinforcement learning in Paper 13 and evolutionary algorithms with clustering as Paper 22. Three main objectives regarding flexibility and robustness are common to both papers: to improve the performance of systems by adjusting to new circumstances (such as API quality or semantic data matching). The methodology involves modeling the problems as optimization tasks, using simulation environments and validation against state-of-the-art techniques.  As the problem and methodologies are slightly different, both the papers address the enhancement of decision making using IoT/WoT systems with the help of advanced computation methodologies.</p>
        </div>
        <div ref={paper5Ref}>
          <h1>Cluster 5: Application-Specific Implementations and Architectures</h1>
          <p>The papers of this group have a problem definition to design architectures or applications which improve some specific functions within the IoT/WoT systems, for instance health monitoring (Paper 10) or search engines (Paper 19). The solution approach is all based on creations of special frameworks or architectures for these applications. For example, Paper 10 outlines the necessary Web of Things (WoT) technology underlying a smart environment for enhanced Health and Wellbeing  through interconnected devices in Ambient Assisted Living (AAL) settings and Paper 19 is devoted to the application of the specialized Information Retrieval system for WoT search engines. The methodology typically involves the implementation of these frameworks and their evaluation in real-world or simulated environments. Paper 20, while still focused on architecture, emphasizes edge computing integration with WoT, making it slightly different from the health or search focus of the other papers.</p>
        </div>
      </div>
      <div className="sidebar2">
      <h2>Research papers</h2>
        <ul>
          <li onClick={() => scrollToPaper(paper1Ref)}>Cluster 1</li>
          <li onClick={() => scrollToPaper(paper2Ref)}>Cluster 2</li>
          <li onClick={() => scrollToPaper(paper3Ref)}>Cluster 3</li>
          <li onClick={() => scrollToPaper(paper4Ref)}>Cluster 4</li>
          <li onClick={() => scrollToPaper(paper5Ref)}>Cluster 5</li>
          {/* Repeat for other papers */}
        </ul>
      </div>
    </div>
  );
}

export default Content;
