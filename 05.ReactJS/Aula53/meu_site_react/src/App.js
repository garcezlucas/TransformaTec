import './App.css';
import React from 'react';
import './components/HelloReact'
import HelloReact from './components/HelloReact'
import HelloDev from './components/HelloDev';

function App() {
  return (
    <div className="App">

      {/*Importando componente*/}
      <HelloReact />
      <HelloDev dev_name="Lucas" />
      
    </div>
  );
}

export default App;
