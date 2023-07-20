import React from "react";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup } from 'react-bootstrap';
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import style from '../styles/form.modules.css';
import Table from 'react-bootstrap/Table';
import { generatePath } from "react-router-dom";




const PredictForm = () => {

    const [leftFile, setLeftFile] = useState();
    const [rightFile, setRightFile] = useState();
    const [prediction, setPrediction] = useState(null);

    const [leftFilename, setLeftFileName] = useState('Choose File');
    const [rightFilename, setRightFileName] = useState('Choose File');

    //const[rightPath, setRightFileNamePath] = useState('Choose File');

    const [ViewReport, setViewReport] = useState(false);
    const [C, setC] = useState(false);
    const [A, setA] = useState(false);
    const [G, setG] = useState(false);
    const [M, setM] = useState(false);

    const [leftPath, setLeftPath] = useState('../images/');
    const [rightPath, setRightPath] = useState();

    const [name, setName] = useState();
    const [left, setLeft] = useState();
    const [right, setRight] = useState();

    const [responseData, setResponseData] = useState(
        {
            name: name,
            left: '',
            right: ''
        }
    );

    const navigate = useNavigate();

    const viewReport = (name, left, right) => {
        navigate({
            pathname: "/result",
            search: createSearchParams({
                name: name.toString(),
                left: left,
                right: right
            }).toString()
        });

        console.log("in navigate: "+name+" "+left+" "+right);
    };

    const handleChange=(e)=>{  
        const newInput = (data)=>({...data, [e.target.name]:e.target.value})
        console.log("new input: "+newInput);
        setResponseData(newInput)
    }
      

    const onLeftChange = e => {
        setLeftFile(e.target.files[0]);
        setLeftFileName(e.target.files[0].name);
    };
    const onRightChange = e => {
        setRightFile(e.target.files[0]);
        setRightFileName(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('leftFile', leftFile);
        formData.append('rightFile', rightFile);

        console.log("file in react "+leftFile);
        console.log("rfile in react "+rightFile);
        console.log(leftFile);
    
        fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then(data => {
            console.log("data in react "+data+" left "+data.leftPrediction+" right "+data.rightPrediction);
            if(data.class[0] === 0 || data.class[1] === 0)
                setC(true);
            if(data.class[0] === 1 || data.class[1] === 1)
                setG(true);
            if(data.class[0] === 2 || data.class[1] === 2)
                setA(true);
            if(data.class[0] === 3 || data.class[1] === 3)
                setM(true);
            setLeftPath(data.lPath);
            setRightPath(data.rPath);
            setPrediction(data);
          });
      };


    return (
        <>
            <div class='form-container' style={{padding: '100px'}}>
                <Form class='form' onSubmit={onSubmit}>
                    <div class='form-content'>
                    <div class='form-title'>Eye Disease Detection using VGG-19 CNN Algorithm</div>
                        <Form.Group className="mb-3" controlId="name" onChange={handleChange} value = {responseData.name}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="leftEye" className="mb-3" onChange={onLeftChange}>
                            <Form.Label>Left Image of an Eye</Form.Label>
                            <Form.Control type="file" />
                            <Form.Text className="text-muted">
                                Please upload .jpg files.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="rightEye" className="mb-3" onChange={onRightChange}>
                            <Form.Label>Right Image of an Eye</Form.Label>
                            <Form.Control type="file" />
                            <Form.Text className="text-muted">
                                Please upload .jpg files.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Predict
                        </Button>
                        <p>
                            {prediction && <p>The Results are predicted by the model. Click below to view Report</p>}
                        </p>
                        
                    </div>
                </Form>
            </div>
            <div class='form-container' style={{
                    display : prediction? 'block' : 'none',
                }}>
                <div class='form'>
                <Button style={{marginLeft : '45%'}} variant="info" onClick={() => setViewReport(!ViewReport)}>View Report</Button>
                
                <div>
                    {ViewReport?
                        <div className="form-container" style={{padding: '100px'}}>

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Actual Class</th>
                                    <th>Fundus Image</th>
                                    <th>Predicted Class</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{leftFilename}</td>
                                    <td><img height="100" width="100" src={require(`../images/${leftFilename}`)} /></td>
                                    <td>{prediction.leftPrediction}</td>
                                    
                                    </tr>
                                    <tr>
                                    <td>{rightFilename}</td>
                                    <td><img height="100" width="100" src={require(`../images/${rightFilename}`)} /></td>
                                    <td>{prediction.rightPrediction}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <br />
                            <h3>Preventive Measures</h3>
                            <div style={{display: C? 'block': 'none'}}>
                                <h4>Cataract</h4>
                                <br />
                                <ol>
                                    <li>Quit Smoking</li>
                                    <li>Quit Alcohol</li>
                                    <li>Regular examination of Eyes</li>
                                    <li>Wear SunGlasses</li>
                                    <li>Have proper diet and eat food rich in Vitamin A</li>
                                    <li>Keep Blood Sugar in Check</li>
                                </ol>
                            </div>

                            <div style={{display: G? 'block': 'none'}}>
                                <h4>Glaucoma</h4>
                                <br />
                                <ol>
                                    <li>Quit Smoking</li>
                                    <li>Quit Alcohol</li>
                                    <li>Maintain healthy weight</li>
                                    <li>Control your blood pressure</li>
                                    <li>Be physically active</li>
                                    <li>Prescription eye drops can stop glaucoma from progressing.</li>
                                </ol>
                            </div>

                            <div style={{display: M? 'block': 'none'}}>
                                <h4>Pathological Myopia</h4>
                                <br />
                                <ol>
                                    <li>Quit Smoking</li>
                                    <li>Quit Alcohol</li>
                                    <li>Regular examination of Eyes</li>
                                    <li>Wear SunGlasses</li>
                                    <li>Have proper diet and eat food rich in Vitamin A</li>
                                    <li>Keep Blood Sugar in Check</li>
                                </ol>
                            </div>

                            
                            <div style={{display: A? 'block': 'none'}}>
                                <h4>Age-related Macular Degeneration</h4>
                                <br />
                                <ol>
                                    <li>Quit Smoking</li>
                                    <li>Taking Supplements(not recommended for more than 4 years)</li>
                                    <li>Eat foods containing high levels of Lutein and Zeaxanthin.</li>
                                    <li>Foods such as egg yolk, yellow corn, orange or yellow peppers, kale, broccoli, spinach, kiwi, grapes, zucchini, and squash have high levels of lutein and/or zeaxanthin and are thought to be protective.</li>
                                    <li>Ophthalmologists recommend the use of sunglasses and a hat to protect against potentially harmful bright sunlight.</li>
                                    <li>Very important to have regular eye examinations.</li>
                                </ol>
                            </div>

                        </div>
                        :   null
                    }
                </div>
                </div>    
            </div>
        
        </>
    );
}
export default PredictForm;