import React, { useRef } from 'react';
import '../styles/content.css';
function Content() {
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
          <p>The collection of 25 papers has been systematically classified into 5 clusters of papers based on similarities of the formulated problem, solutions and methods. These groups were created to emphasize the specific subject matters in the general contexts of the Internet of Things (IoT) and sometimes referred to as the Web of Things (WoT). Each of them reflect particular aspect of IoT and WoT research encompassing overall security threats, intricacies of device management, pursuit of interoperability, computing methods application, and particular architectural solutions for targeted use cases. This way of structuring not only helps to gain a better understanding of the shared issues and breakthroughs that occur within each topical area but also emphasizes the activity and, on the whole, vast area of research in the rather promising fields of IoT and WoT.</p>
        </div>
        <div ref={paper1Ref}>
          <h3>Cluster 1: Security in IoT and WoT</h3>
          <p>These group of papers are centered on the insecurity threats in IoT and Web of Things (WoT systems. The problem definition across these papers is consistent, they all address the growing threats posed by the interconnectivity of devices and their susceptibility to vulnerability to cyber threats such as hacking, data leakage, unauthorized access, and systems’ failures . The main solution strategy focuses on implementing further security features such as encryption, authentication, and ML-based Anomaly detection to these risks. The paper [4] even highlight employing the methods of ML, while other paper [1] describe protocols operating at different IoT layers: perception, network, and application. It usually includes literature review, case studies as well as security frameworks. There are differences in the magnitude of security threats resolved like home automations [5] have been compared to resolving security threat to broad IoT systems in [17]. And other paper [8] suggest that multiple-layer security strategies used in IOT, while other [2] focus specifically on a set of security concerns related to IoT search engine.</p>
        </div>
        <div ref={paper2Ref}>
          <h3>Cluster 2: Discovery and Management in IoT/WoT</h3>
          <p>This group of papers have the common problem definition revolves around how diverse and disparate IoT devices call for challenging Integrated Management and both their communication and data transfer protocols. This cluster challenges involved in providing the enabling capability for discoverability and composability of devices in IoT and WoT environments are thoroughly explored. The solution approach approach establishing frameworks for the recognition, enrollment, and control of IoT devices [3],[18] that is often enhanced by the implementation of Thing Descriptions (TDs). The methodology usually involves experiments or simulations, for instance WoT Lab [3]  the network scanning in [18] to evaluate the impact the proposed discovery models in dynamic contexts. As expected, all the papers aim at addressing the heterogeneity problem and [12] extends the work by primarily targeting Smart Buildings but employing also building metadata integration into the discovery process which, indeed, is slightly different from the general approach made in other papers of this group.</p>
        </div>
        <div ref={paper3Ref}>
          <h3>Cluster 3: Standards, Interoperability, and Middleware in IoT/WoT</h3>
          <p>Every one of the papers in this group basically has the similar problem definition of fragmentation and lack of interoperability which hinders the integration of IoT/WoT systems across the devices. The solution approach involves the use of web standards and middleware solutions to achieve better interoperability and standardization across systems. Paper [21] [25] propose using semantic web technologies to enhance data sharing and device communication. [16],[13] take a more middleware-centric approach, focusing on frameworks that integrate IoT systems with web standards. The methodology in this cluster of papers commonly a review of the existing frameworks, standards and middleware architectures comparing their efficacy in different scenarios . The paper [21] focuses on analysis of the lack of integration with the semantic web devices, while [16] discusses IoT-Cyber-Physical Systems integration in general.</p>
        </div>
        <div ref={paper4Ref}>
          <h3>Cluster 4: Machine Learning and Algorithmic Solutions</h3>
          <p>This cluster is characterized based on optimizing processes in IoT/WoT systems by means of ML and algorithms. For instance, [10] targets web API recommendation under dynamic situations and [22] aims at enhancing matching process in Social Web of Things (S-WoT) situations. The ideology in these papers involves the application of specific algorithms such as reinforcement learning [10] and evolutionary algorithms with clustering [22]. Three main objectives regarding flexibility and robustness are common to both papers is to improve the performance of systems by adjusting to new circumstances (such as API quality or semantic data matching). The methodology involves modeling the problems as optimization tasks, using simulation environments and validation against state-of-the-art techniques.  As the problem and methodologies are slightly different, but they address the enhancement of decision making using IoT/WoT systems with the help of advanced computation methodologies.</p>
        </div>
        <div ref={paper5Ref}>
          <h3>Cluster 5: Application-Specific Implementations and Architectures</h3>
          <p>The category focus on design architectures or applications which improve some specific functions within the IoT/WoT systems, for instance health monitoring[20] or search engines [11]. The solution approach is all based on creations of special frameworks or architectures for these applications. For example, [20] outlines the necessary Web of Things (WoT) technology underlying a smart environment for enhanced Health and Wellbeing through interconnected devices in Ambient Assisted Living (AAL) settings and [11] describes the application of the specialized Information Retrieval system for WoT search engines. The methodology typically involves the implementation of these frameworks and their evaluation in real-world or simulated environments. [14] focused on architecture, emphasizes edge computing integration with WoT, making it slightly different from the health or search focus of the other papers.</p>
        </div>
        <div className="Conclusion">
          <h3>Conclusion</h3>
          <p>
          Group 1 focused on security, highlighting the implementation of advanced protective measures and machine learning to safeguard against cyber threats. Group 2 addressed the challenges of device discovery and management, advocating for frameworks that enable seamless device integration. Group 3 explored standards, interoperability, and middleware, emphasizing the need for web standards to enhance system integration and data sharing. Group 4 analyzed the application of machine learning and algorithms to optimize WoT processes, showcasing their role in improving system adaptability. Lastly, Group 5 discussed application-specific implementations, designing specialized architectures to enhance functionalities such as health monitoring and search capabilities. Collectively, these groups illustrate the diverse yet interconnected challenges and innovations across the WoT landscape, underscoring the multifaceted approach required to propel the field forward
          </p>
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
