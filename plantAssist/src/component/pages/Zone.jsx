import React from 'react';
import { useState, useEffect } from 'react';
import Zone from '../assets/Zone.jpg'
import '../styles/Zone.css'
// import { useHistory } from 'react-router-dom';

function HardyZone () {
    return(
        <div className='img-container'>
        <img src={Zone} />
        </div>
    )
}

export default HardyZone;