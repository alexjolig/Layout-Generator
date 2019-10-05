import React from 'react';
import Dropdown from './drop-down';
import Layout from './layout';

function App() {

  document.title = "Layout Generator";
  
  return (
    <div className="container">
      <Dropdown />
      <Layout />
    </div>
  );
}

export default App;
