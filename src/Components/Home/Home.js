import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import SideDrawer from '../SideDrawer/SideDrawer';
import Toolbar from '../Toolbar/Toolbar';
import Body from '../Body/Body';
import LoginCard from '../Logincard/LoginCard'
import cookie from 'react-cookies'

import './Home.css';

class Home extends React.Component {
    state = {
        sideDrawerOpen: false,
        userLoggedIn: false,
        userId: null,
        uname: null
    }

    componentWillMount() {
        let cid = cookie.load('userId')
        if (cid != null) {
            this.setState({ userId: cid, userLoggedIn: true })
            alert('you are already logged in')
        }

    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {                                                      //drawer toggle
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    userRetriever = (id, name) => {

        this.setState({ userId: id, uname: name })
        cookie.save('userId', id, { path: '/', maxAge: 604800 })
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
            sideDrawer = <SideDrawer />                                              //fine
            drawerBackdrop = <BackDrop click={this.backDropClickHandler} />
        }
        return (
            <div id="parent-container">

                <Toolbar id="toolbar" drawerClick={this.drawerToggleClickHandler}></Toolbar>
                {loginHandler}
                {sideDrawer}
                {drawerBackdrop}


            </div>

        )
    }
}

export default Home;