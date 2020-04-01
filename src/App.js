import React from 'react';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact 
      name="Alex Grant"
      avatar="https://randomuser.me/api/portraits/men/2.jpg"
      online="status-online"
      />
      <Contact 
      name="Joshua Gibson"
      avatar="https://randomuser.me/api/portraits/men/86.jpg"
      online=""
      />
      <Contact 
      name="Ernest Chavez"
      avatar="https://randomuser.me/api/portraits/men/75.jpg"
      online="status-online"
      />
    </div>
  );
}

export default App;
