import React from 'react';
import "./index.css"

import { BrowserRouter, Route, Link } from "react-router-dom";

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
