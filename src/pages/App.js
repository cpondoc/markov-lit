import React from 'react';
import '../style/index.css';

function App(props) {
  let newText = props.name.split('\n').map((item, i) => {
    return <p className="description" key={i}>{item}</p>
  });
  return (
    <div className="container" id="poemcont">
      {newText}
      <h3>~ (fake) Shakespeare</h3>
    </div>
  );
}

export default App;