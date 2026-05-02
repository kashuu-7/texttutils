import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes, 
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');   // weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#181b37';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'textUtils - Dark Mode'  //Title Change   /Optional
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'textUtils - Light Mode'//Title Change /Optional
    }
  }

  return (
    <>
    {/* <Router> */}
          <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            {/* <Routes> */}
              {/* <Route exact path="/about" element={<About />} />  */}

              {/* <Route exact path="/" element={ */}
            <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} />
            {/* } /> */}
            {/* </Routes> */}
          </div>
     {/* </Router> */}
    </>
  );
}

export default App;
