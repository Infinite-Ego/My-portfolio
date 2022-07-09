import React from 'react';
import Stack from './Components/Stack';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';

function App() {

  return (
    <div className="App">
     <Home/>
     <Stack/>
     <Portfolio/>
     <Contacts/>
    </div>
  );
}

export default App;
