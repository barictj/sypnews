import React, { useState, useEffect, useContext } from 'react';
import './loading.scss'

const LoadingComponent = (props) => {
    return (

        <div className='loading-container'>
            L<img src="../static/download.png" className='imgmongo' style={{ width: '100px', height: '100px' }} />ading
        </div>

    );
};

export default LoadingComponent;
