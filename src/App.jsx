import React, { useState, useContext } from 'react';
import {useBetween} from 'use-between'
import Home from './Home'
import Products from './Products'

function App() {
  const [show, setShow] = useState(true)
  
  return (<>
    <main className='container-fluid orange orange-darken-4'>
      <nav className=' container z-depth-0 transparent'>
        <ul className='fs-4 left'>
          <li><span className="hoverable">IProd</span></li>
        </ul>
        <ul className='right'>
          <li onClick={() => setShow(true)} className=' flow-text mx-2 fs-6 black-text'><span className="hoverable">Home</span></li>
          <li onClick={() => setShow(false)} className='flow-text fs-6 black-text'><span className="hoverable">Products</span></li>
        </ul>
      </nav>
    </main>
    <div className='container z-depth-0'>
      {show ? <Home /> : <Products />}
    </div>
  </>
  );
}

export default App;