import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/home";
import About from './pages/about';
import PredictForm from './pages/form';
import Result from './pages/result';
import College from './components/college.component';
import ReactNavbar from './components/navbar.component';
import Implementation from './pages/implementation';
import Team from './pages/team';


const App = () => {
  const [file, setFile] = useState();
  const [filename, setFileName] = useState('Choose File');
  const [prediction, setPrediction] = useState(null);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    console.log(file);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPrediction(data);
      });
  };

  return (
    <div className='App'>
        <College /> 
        <ReactNavbar /> 
        
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/form" element={<PredictForm />} />
                <Route exact path="/result" element={<Result />} />
                <Route exact path="/implementation" element={<Implementation />} />
                <Route exact path="/team" element={<Team />} />
            </Routes>
        </Router>
    </div>
  );
};

export default App;
