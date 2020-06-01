import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import SideDrawer from '../SideDrawer/SideDrawer';
import Toolbar from '../Toolbar/Toolbar';
import Body from '../Body/Body';
import LoginCard from '../Logincard/LoginCard'

import './Home.css';

class Home extends React.Component {
    state = {
        sideDrawerOpen: false,
        userLoggedIn: false,
        userId: null,
        uname: null
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {                                                      //drawer toggle
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    userRetriever = (memail, name) => {

        this.setState({ userId: memail, uname: name })
    }

    userStatusHandler = () => {

        this.setState((prevState) => {
            return { userLoggedIn: !prevState.userLoggedIn };                                     //user status

        });
        alert("Welcome " + this.state.uname + ". You have logged In Successfully");
    };


    backDropClickHandler = () => {                                                              //backdrop
        this.setState({ sideDrawerOpen: false })
    };



    render() {
        let sideDrawer;
        let drawerBackdrop;
        let loginHandler;

        if (this.state.userLoggedIn) {
            loginHandler = <div>
                <Body userId={this.state.userId}></Body>
            </div>
        }
        else {                                                                                              //login or post
            loginHandler = <LoginCard userToggle={this.userStatusHandler} passUser={this.userRetriever}></LoginCard>
        }

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />;                                              //fine
            drawerBackdrop = <BackDrop click={this.backDropClickHandler} />;
        }
        return (
            <div id="parent-container">

                <Toolbar id="toolbar" drawerClick={this.drawerToggleClickHandler}></Toolbar>
                {loginHandler}
                {sideDrawer}
                {drawerBackdrop};


            </div>

        );
    }
}

export default Home;