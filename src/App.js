import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#040f3c';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  
  return (
   <>
   {/* <Router> */}
     <Navbar title='textutils' about='about_it' mode={mode} togglemode={togglemode}/>
     <div className="container my=3">
     {/* <Routes>    */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/" element={ */}
          <Textarea heading="Enter the text here" mode={mode}/>
          {/* // } /> */}
        {/* </Routes> */}
       </div>
 {/* </Router> */}
   </>
  );
}

export default App;
