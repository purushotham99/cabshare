import React from 'react'
import ListElement from '../ListElement/ListElement'
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

                {this.state.users.map(user => <ListElement name={user.name} source={user.source} dest={user.dest}></ListElement>
                    // <h2 key={user._id}>{user.name}+" "+{user.source}+" "+{user.dest}</h2>
                )}

            </div>
        )
    }
}

export default List
