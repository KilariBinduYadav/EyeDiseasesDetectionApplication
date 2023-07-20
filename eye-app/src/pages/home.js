import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Background from '../components/background.component';
import Card from 'react-bootstrap/Card';
import style from "../styles/home.modules.css";

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url("https://westlinnvision.com/wp-content/uploads/2016/09/02EyeResources-Howtheeyeworks.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '76vh'
        }}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='home' style={{
                display: 'flex',
                justifyContent: 'Center',
                padding: '50px',
                color: 'gold'
                }}>
                <h2>Recommending Preventive Measures by Early Detection of Eye Disorders Using VGG Neural Networks</h2>
                <br/>
                <br/>
                <Button variant="primary">
                    <Link to='/form' 
                        style={{color:'ButtonHighlight', textDecoration: 'none' }}>
                        Start Prediction
                    </Link>
                </Button>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'Center',
                }}
            >
                
            </div>
            
        </div>
    );
};

export default Home;