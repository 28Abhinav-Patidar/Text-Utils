import Navbar from './components/Navbar';
import './App.css';
// import About from './components/About';
import Form from './components/form';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {BrowserRouter as Router,Routes , Route } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setalert] = useState(null);

const changemode = (setchangedmode) =>{
  if (setchangedmode==='light'){
    setMode('light');
    document.body.style.backgroundColor ='white';
  }
  else if (setchangedmode==='dark'){
    setMode('dark');
     document.body.style.backgroundColor ='black';
  }
  else if (setchangedmode==='danger'){
    setMode('danger');
    document.body.style.backgroundColor ='#ff6d6d';
 }
 else{
  setMode('blue');
  document.body.style.backgroundColor ='rgba(127,233,255,1)';
}
}
const sendalert = (message , text) =>{
     setalert({
      msg : message,
      text : text
     })
     setTimeout(() =>{
      setalert(null);
     },2000);
  }
  return (
    <>
       {/* <Router> */}
       <Navbar Title="TextUtils" sendalert={sendalert} About="About TextUtils"  mode={mode} changemode={changemode}/>
       <Alert alert={alert}/> 
       <div className='container my-3'>
       {/* <Routes> */}
              {/* <Route path="/about" element={<About mode={mode}/>}/>
              <Route path="/" element={} /> */}<Form sendalert={sendalert} heading = "Enter The Text Here" mode={mode}  changemode={changemode}/>
        {/* </Routes> */}
        </div>  
       {/* </Router>  */}
    </>
  );
}

export default App;
