import React from 'react';
import "./styles/index.css"

import Image from './components/image/image'
import Info from './components/info/Info'
import About from './components/about/About'
import Form from './components/form/Form'

//import Title from './components/title/Title'

function App() {
  return (
    <>
      <div className='page-home'>
        <Image />
        <Info />
        <About />
        <Form />
      </div>
    </>
  );
}

export default App;
