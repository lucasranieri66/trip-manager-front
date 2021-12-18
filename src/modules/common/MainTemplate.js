import React from 'react';
import NavBar from './NavBar';
import './MainTemplate.css'

function MainTemplate({ component: Component, ...rest }) {

    return (
        <div className='container'>
            <NavBar />
            <div className='content'>
                <div className='wrapper'>
                    < Component {...rest} />
                </div>
            </div>
        </div >
    );
}

export default MainTemplate;
