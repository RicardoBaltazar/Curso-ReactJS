import React from 'react';
import "./styles/index.css"

import Image from './components/image/image'
import Address from './components/address/Address'
//import Title from './components/title/Title'

function App() {
  return (
    <>
      <div className='page-home'>
        <Image />
        <Address />
      </div>
    </>
  );
}

export default App;
