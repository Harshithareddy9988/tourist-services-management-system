import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Card, Button, Row, Col, Form, Modal } from "react-bootstrap";
import '../styles/GHomePage.css'
import axios from "axios";


function HomePage(){

        return (
            <div className='guideImage'>

                <h2>Find Your Tour Guide</h2>
                <button type='submit'><a href='/ViewAllGuide'> Male Guides </a></button>
                <button type='submit'><a href='/ViewAllFGuide'> Female Guides </a></button>
                
            </div>
        )
}

export default HomePage;