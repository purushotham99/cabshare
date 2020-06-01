import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';
import './Toolbar.css';
function Toolbar(props) {
    return (
        <span >
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
            <div className='container'>

                <div className="row">
                    <DrawerToggleButton className="col-cm-2" click={props.drawerClick} />
                    <div className="col-sm-10" id="LOGO"><h1>CabShare App</h1></div>
                </div>
            </div>
        </span>
    )
}

export default Toolbar;
