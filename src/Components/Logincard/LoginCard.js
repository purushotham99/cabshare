import React from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000'
})

class LoginCard extends React.Component {
    state = {
        name: null,
        email: null,
    }

    createUser = async () => {
        let res = await api.post('/match', { name: this.state.name, email: this.state.email })
        this.props.passUser(res.data._id, this.state.name);
        this.props.userToggle();
    }

    nameHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    mailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    // createUser = (event) => {
    //     event.preventDefault();
    //     alert("You are sub " + this.state.name + " " + this.state.email)
    // }

    render() {
        return (
            <div>
                <div className="LoginCard">
                    <h2>LoginCard</h2>
                    <input type="text" placeholder="Name" onChange={this.nameHandler} />
                    <input type="email" placeholder="Enter Your mail id" onChange={this.mailHandler} />
                    <input type="button" value="Sign up" onClick={this.createUser} />
                </div>
            </div >
        )
    }
}

export default LoginCard
