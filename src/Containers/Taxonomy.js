import React from 'react';


const TaxonomyTable = () => {
  return (
    <div className="container2">
      <h2 className="text-center">Taxonomy Table</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover mt-4">
          <thead className="thead-light">
            <tr>
              <th>Paper</th>
              <th>Problem Domain</th>
              <th>Solution Approach</th>
              <th>Web Arch.Type</th>
              <th>Evolution Methodology</th>
              <th>Appp Domain</th>
              <th>Security Mechanism.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Author1 et al. (2021)</td>
              <td>Resource Effecting Optimization</td>
              <td>Theory Sysyem</td>
              <td>Azure cloud</td>
              <td>Simulation Analysis</td>
              <td>Internet of Things</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Author2 et al. (2022)</td>
              <td>Real-Time Monitoring</td>
              <td>Reinforcement </td>
              <td>Centralized Cloud</td>
              <td> Prototyping</td>
              <td>Healthcare Management</td>
              <td>Secure Communication Protocols</td>
            </tr>
            <tr>
              <td>Author3 et al. (2023)</td>
              <td>Data </td>
              <td>Privacy</td>
              <td>centralized Etherium</td>
              <td>Analysis</td>
              <td>N/A</td>
              <td>Encryption</td>
            </tr>
            <tr>
              <td>Author4 et al. (2020)</td>
              <td>Network Security</td>
              <td>Algorithms</td>
              <td>Azure</td>
              <td>Simulator</td>
              <td>Web of Things</td>
              <td>Detecting Bias</td>
            </tr>
            <tr>
              <td>Author5 et al. (2021)</td>
              <td>Intelligent Decision Making</td>
              <td>Learning</td>
              <td>Cloud project</td>
              <td>Application</td>
              <td>Smart Ledger</td>
              <td>Federated Management</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxonomyTable;