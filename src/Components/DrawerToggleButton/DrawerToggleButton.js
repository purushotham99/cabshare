
import React from 'react';
import './DrawerToggleButton.css';


const DrawerToggleButton = props => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className='toggle_button' onClick={props.click}>
                <i className="fa fa-bars fa-2x" id="Hamburger"></i>
            </div>
        </div>
    )
}

export default DrawerToggleButton
