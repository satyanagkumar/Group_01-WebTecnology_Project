import React from 'react';


const TaxonomyTable = () => {
  return (
    <div className="container2">
      <h2 className="text-center">Taxonomy Table</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover mt-4">
          <thead className="thead-light">
            <tr>
              <th>Cluster</th>
              <th>Paper Citation</th>
              <th>Problem and Domain</th>
              <th>Solution Approach</th>
              <th>Web Architecture Type</th>
              <th>Evaluation Methodology</th>
              <th>Application Domain</th>
              <th>Security Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Group 1: Security in IoT and WoT</td>
              <td>[1,2,4,5,8,15,17,19]</td>
              <td>Security vulnerabilities and defenses in IoT/WoT systems across various IoT layers.</td>
              <td>Use of encryption, authentication protocols, and ML-based anomaly detection.</td>
              <td>ML Framework</td>
              <td>Systematic reviews, security framework analyses, and case studies.</td>
              <td>General IoT/WoT environments</td>
              <td>Encryption, authentication, ML-based anomaly detection</td>
            </tr>
            <tr>
              <td>Group 2: Discovery and Management in IoT/WoT</td>
              <td>[3,9,12,18]</td>
              <td>Device discovery and management challenges in IoT/WoT environments.</td>
              <td>Implementation of discovery services and automated device management.</td>
              <td>Service-oriented</td>
              <td>Experimental implementations, simulations, and real-world testing.</td>
              <td>Device management</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Group 3: Standards, Interoperability, and Middleware in IoT/WoT</td>
              <td>[13,16,21,25]</td>
              <td>Interoperability and standardization issues in IoT/WoT with focus on middleware integration.</td>
              <td>Development of standard protocols and middleware for system integration</td>
              <td>Middleware</td>
              <td>Reviews of standards, comparative analyses, and systematic evaluations.</td>
              <td>System integration</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Group 4: Machine Learning and Algorithmic Solutions</td>
              <td>[4,10,22]</td>
              <td>Application of machine learning and algorithms to optimize processes in IoT/WoT.</td>
              <td>Utilization of machine learning and computational algorithms</td>
              <td>Computational</td>
              <td>Modeling, simulations, and optimization tasks.</td>
              <td>API recommendation, Ontology matching</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Group 5: Application-Specific Implementations and Architectures</td>
              <td>[11,14,20]</td>
              <td>Tailored solutions for specific applications in IoT/WoT, focusing on health monitoring and search functionalities.</td>
              <td>Architectural frameworks for specific applications.</td>
              <td>Application-specific</td>
              <td>Development, implementation, and validation in real-world scenarios.</td>
              <td>Health, Search Engines</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxonomyTable;