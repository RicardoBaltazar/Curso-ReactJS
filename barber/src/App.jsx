import React from 'react';
import "./styles/index.css"

import Image from './components/image/image'
import Info from './components/info/Info'
import About from './components/about/About'

//import Title from './components/title/Title'

function App() {
  return (
    <>
      <div className='page-home'>
        <Image />
        <Info />
        <About /> 
      </div>
    </>
  );
}

export default App;
