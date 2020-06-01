import React from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000'
})

class List extends React.Component {
    state = {
        users: []
    }

    constructor() {
        super();
        try {
            api.get('/match').then(res => {
                console.log(res.data)
                this.setState({ users: res.data })
            })
        } catch (Error) {
            console.log("ERROR " + Error);
        };

    }

    render() {
        return (
            <div>

                {this.state.users.map(user => <h2 key={user.id}>{user.name}</h2>)}

            </div>
        )
    }
}

export default List
