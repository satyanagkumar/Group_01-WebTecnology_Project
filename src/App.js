import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Header({ scrollTo }) {
  return (
    <header>
      <nav>
        <ul>
          <li><button type="button" onClick={() => scrollTo('home')}>Home</button></li>
          <li><button type="button" onClick={() => scrollTo('content')}>Content</button></li>
          <li><button type="button" onClick={() => scrollTo('taxonomy')}>Taxonomy</button></li>
          <li><button type="button" onClick={() => scrollTo('team')}>Team</button></li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  const homeRef = useRef(null);
  const contentRef = useRef(null);
  const taxonomyRef = useRef(null);
  const teamRef = useRef(null);

  const scrollTo = (section) => {
    switch (section) {
      case 'home':
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'content':
        contentRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'taxonomy':
        taxonomyRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'team':
        teamRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Header scrollTo={scrollTo} />
      <div ref={homeRef} id="homeSection">
        <Home />
      </div>
      <div ref={contentRef} id="contentSection">
        <ContentSection />
      </div>
      <div ref={taxonomyRef} id="taxonomySection">
        <TaxonomySection />
      </div>
      <div ref={teamRef} id="teamSection">
        <TeamSection />
      </div>
    </div>
  );
}

function Home() {
  return (
      <div id="homeSection">
          <h1>Welcome to the Survey on Systems and Infrastructure for the Web of Things</h1>
          <p>
              This survey delves into the technological frameworks, middleware, and platforms essential for the integration of IoT devices into the web ecosystem. Our comprehensive analysis covers aspects of scalability, security, and real-time interactions across various systems.
          </p>
          <h2>Key Challenges</h2>
          <p>
              One of the primary challenges in the Web of Things (WoT) is ensuring robust scalability as the number of interconnected devices grows exponentially. Security remains a paramount concern, with the need to protect vast networks of devices and data from cyber threats. Additionally, achieving real-time interactions between these devices poses significant technological hurdles that must be overcome to enable efficient and dynamic WoT systems.
          </p>
          <h2>Recent Trends and Advancements</h2>
          <p>
              Recent advancements in the field include the development of more sophisticated middleware solutions that facilitate easier device integration and management. Architectural innovations have also led to improved interoperability between heterogeneous devices, enhancing the fluidity of device interactions within the WoT. The adoption of edge computing has further empowered real-time data processing closer to the source of data generation.
          </p>
          <h2>Future Research Directions</h2>
          <p>
              Future research in the Web of Things is poised to tackle enhanced methods for scalable architectures that can support an ever-increasing device ecosystem. Further explorations into advanced security protocols will aim to bolster defenses against evolving threats. Additionally, research will continue to focus on reducing latency in device communication to support emerging applications that require real-time decision-making capabilities.
          </p>
      </div>
  );
}


function ContentSection() {
  return (
    <div>
      <h2>Summarized Findings</h2>
      <div>
        <h3>Paper 1</h3>
        <p>Description of Problem Domain, Solutions, and Findings...</p>
      </div>
    </div>
  );
}

function TaxonomySection() {
  return (
    <div>
      <h2>Classification Table</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Category 1</td>
            <td>Details about Category 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function TeamSection() {
  return (
      <div id="teamSection">
          <h2>Our Team</h2>
          <div className="member-container">
              <div className="member">
                  <img src="1.png" alt="Member 1"/>
                  <p>Name: Member 1<br/>Bio</p>
              </div>
              <div className="member">
                  <img src="1.png" alt="Member 2"/>
                  <p>Name: Member 2<br/>Bio</p>
              </div>
              <div className="member">
                  <img src="2.jpg" alt="Member 3"/>
                  <p>Name: Member 3<br/>Bio</p>
              </div>
              <div className="member">
                  <img src="2.jpg" alt="Member 4"/>
                  <p>Name: Member 4<br/>Bio</p>
              </div>
          </div>
      </div>
  );
}


export default App;


ReactDOM.render(<App />, document.getElementById('root'));
