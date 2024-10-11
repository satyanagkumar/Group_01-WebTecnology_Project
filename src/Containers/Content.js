import React, { useRef } from 'react';

function Content() {
  // Correctly initializing refs within the component body
  const paper1Ref = useRef(null);
  const paper2Ref = useRef(null);
  const paper3Ref = useRef(null);
  const paper4Ref = useRef(null);
  const paper5Ref = useRef(null);
  const paper6Ref = useRef(null);
  const paper7Ref = useRef(null);
  const paper8Ref = useRef(null);
  const paper9Ref = useRef(null);
  const paper10Ref = useRef(null);

  const scrollToPaper = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container">
      <div className="contentpage">
        <div ref={paper1Ref}>
          <h1>Paper1</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={paper2Ref}>
          <h1>Paper2</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={paper3Ref}>
          <h1>Paper3</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={paper4Ref}>
          <h1>Paper4</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={paper5Ref}>
          <h1>Paper5</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={paper6Ref}>
          <h1>Paper6</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={paper7Ref}>
          <h1>Paper7</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={paper8Ref}>
          <h1>Paper8</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={paper9Ref}>
          <h1>Paper9</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div ref={paper10Ref}>
          <h1>Paper10</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div className="sidebar2">
      <h2>Research papers</h2>
        <ul>
          <li onClick={() => scrollToPaper(paper1Ref)}>Paper1</li>
          <li onClick={() => scrollToPaper(paper2Ref)}>Paper2</li>
          <li onClick={() => scrollToPaper(paper3Ref)}>Paper3</li>
          <li onClick={() => scrollToPaper(paper4Ref)}>Paper4</li>
          <li onClick={() => scrollToPaper(paper5Ref)}>Paper5</li>
          <li onClick={() => scrollToPaper(paper6Ref)}>Paper6</li>
          <li onClick={() => scrollToPaper(paper7Ref)}>Paper7</li>
          <li onClick={() => scrollToPaper(paper8Ref)}>Paper8</li>
          <li onClick={() => scrollToPaper(paper9Ref)}>Paper9</li>
          <li onClick={() => scrollToPaper(paper10Ref)}>Paper10</li>
          <li onClick={() => scrollToPaper(paper6Ref)}>Paper11</li>
          <li onClick={() => scrollToPaper(paper7Ref)}>Paper12</li>
          <li onClick={() => scrollToPaper(paper8Ref)}>Paper13</li>
          <li onClick={() => scrollToPaper(paper9Ref)}>Paper14</li>
          <li onClick={() => scrollToPaper(paper10Ref)}>Paper15</li>
          {/* Repeat for other papers */}
        </ul>
      </div>
    </div>
  );
}

export default Content;
