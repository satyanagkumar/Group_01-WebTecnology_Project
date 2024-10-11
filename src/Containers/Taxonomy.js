import React from 'react';


const TaxonomyTable = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Taxonomy Table</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover mt-4">
          <thead className="thead-light">
            <tr>
              <th>Paper</th>
              <th>Citation</th>
              <th>Problem</th>
              <th>Domain</th>
              <th>Solution</th>
              <th>Approach</th>
              <th>Web Arch.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Author1 et al. (2021)</td>
              <td>Resource Allocation Optimization</td>
              <td>Theory</td>
              <td>Distributed Edge-Cloud</td>
              <td>Simulation and Theoretical Analysis</td>
              <td>IoT and Smart Cities</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Author2 et al. (2022)</td>
              <td>Real-Time Monitoring</td>
              <td>Reinforcement Learning</td>
              <td>Centralized Cloud</td>
              <td>Real-World Prototyping</td>
              <td>Healthcare Monitoring</td>
              <td>Secure Communication Protocols</td>
            </tr>
            <tr>
              <td>Author3 et al. (2023)</td>
              <td>Data Privacy</td>
              <td>Differential Privacy</td>
              <td>Decentralized Blockchain</td>
              <td>Empirical Analysis</td>
              <td>N/A</td>
              <td>Homomorphic Encryption</td>
            </tr>
            <tr>
              <td>Author4 et al. (2020)</td>
              <td>Network Traffic Management</td>
              <td>Heuristic Algorithms</td>
              <td>Hybrid (Edge and Cloud)</td>
              <td>Simulation Study</td>
              <td>Autonomous Vehicles</td>
              <td>Anomaly Detection</td>
            </tr>
            <tr>
              <td>Author5 et al. (2021)</td>
              <td>Intelligent Decision Making</td>
              <td>Supervised Learning</td>
              <td>Cloud-Only</td>
              <td>Real-World Deployment</td>
              <td>Smart Manufacturing</td>
              <td>Federated Identity Management</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxonomyTable;