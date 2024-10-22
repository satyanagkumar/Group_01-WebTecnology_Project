import React from 'react';

const TaxonomyTable = () => {
  return (
    <div style={styles.fullPageContainer}>
      <h2 style={styles.heading}>Taxonomy Table</h2>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Cluster</th>
              <th style={styles.th}>Paper Citation</th>
              <th style={styles.th}>Problem and Domain</th>
              <th style={styles.th}>Solution Approach</th>
              <th style={styles.th}>Web Architecture Type</th>
              <th style={styles.th}>Evaluation Methodology</th>
              <th style={styles.th}>Application Domain</th>
              <th style={styles.th}>Security Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.row}>
              <td style={styles.td}>Group 1: Security in IoT and WoT</td>
              <td style={styles.td}>[1,2,4,5,8,15,17,19]</td>
              <td style={styles.td}>Security vulnerabilities and defenses in IoT/WoT systems across various IoT layers.</td>
              <td style={styles.td}>Use of encryption, authentication protocols, and ML-based anomaly detection.</td>
              <td style={styles.td}>ML Framework</td>
              <td style={styles.td}>Systematic reviews, security framework analyses, and case studies.</td>
              <td style={styles.td}>General IoT/WoT environments</td>
              <td style={styles.td}>Encryption, authentication, ML-based anomaly detection</td>
            </tr>
            <tr style={styles.row}>
              <td style={styles.td}>Group 2: Discovery and Management in IoT/WoT</td>
              <td style={styles.td}>[3,9,12,18]</td>
              <td style={styles.td}>Device discovery and management challenges in IoT/WoT environments.</td>
              <td style={styles.td}>Implementation of discovery services and automated device management.</td>
              <td style={styles.td}>Service-oriented</td>
              <td style={styles.td}>Experimental implementations, simulations, and real-world testing.</td>
              <td style={styles.td}>Device management</td>
              <td style={styles.td}>N/A</td>
            </tr>
            <tr style={styles.row}>
              <td style={styles.td}>Group 3: Standards, Interoperability, and Middleware in IoT/WoT</td>
              <td style={styles.td}>[13,16,21,25]</td>
              <td style={styles.td}>Interoperability and standardization issues in IoT/WoT with focus on middleware integration.</td>
              <td style={styles.td}>Development of standard protocols and middleware for system integration</td>
              <td style={styles.td}>Middleware</td>
              <td style={styles.td}>Reviews of standards, comparative analyses, and systematic evaluations.</td>
              <td style={styles.td}>System integration</td>
              <td style={styles.td}>N/A</td>
            </tr>
            <tr style={styles.row}>
              <td style={styles.td}>Group 4: Machine Learning and Algorithmic Solutions</td>
              <td style={styles.td}>[4,10,22]</td>
              <td style={styles.td}>Application of machine learning and algorithms to optimize processes in IoT/WoT.</td>
              <td style={styles.td}>Utilization of machine learning and computational algorithms</td>
              <td style={styles.td}>Computational</td>
              <td style={styles.td}>Modeling, simulations, and optimization tasks.</td>
              <td style={styles.td}>API recommendation, Ontology matching</td>
              <td style={styles.td}>N/A</td>
            </tr>
            <tr style={styles.row}>
              <td style={styles.td}>Group 5: Application-Specific Implementations and Architectures</td>
              <td style={styles.td}>[11,14,20]</td>
              <td style={styles.td}>Tailored solutions for specific applications in IoT/WoT, focusing on health monitoring and search functionalities.</td>
              <td style={styles.td}>Architectural frameworks for specific applications.</td>
              <td style={styles.td}>Application-specific</td>
              <td style={styles.td}>Development, implementation, and validation in real-world scenarios.</td>
              <td style={styles.td}>Health, Search Engines</td>
              <td style={styles.td}>N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// CSS in JS for advanced styles ensuring the table fits the page properly
const styles = {
  fullPageContainer: {
    width: '100vw',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f9fafb',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
  },
  tableWrapper: {
    width: '100%',
    maxWidth: '100vw', // Take the full width of the screen
    overflowX: 'auto', // Allow horizontal scroll for smaller screens
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#ffffff',
    border: '3px solid #1abc9c',
    borderRadius: '10px',
  },
  th: {
    padding: '16px 20px',
    textAlign: 'center',
    fontSize: '1.1rem',
    backgroundColor: '#1abc9c',
    color: '#ffffff',
    fontWeight: 'bold',
    border: '2px solid #16a085',
    background: 'linear-gradient(135deg, #1abc9c, #16a085)',
  },
  td: {
    padding: '16px 20px',
    textAlign: 'center',
    fontSize: '1rem',
    border: '2px solid #ddd',
    color: '#2c3e50',
    backgroundColor: '#f4f6f7',
    wordWrap: 'break-word',
  },
  row: {
    backgroundColor: '#f4f6f7',
    transition: 'background-color 0.3s ease',
  },
};

export default TaxonomyTable;
