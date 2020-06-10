import React from 'react'
import ListElement from '../ListElement/ListElement'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000'
})

class List extends React.Component {
    state = {
        users: [],
        id: null
    }

    componentDidMount() {
        try {
            this.setState({ id: this.props.Id })
            api.get('/match/result/' + this.props.Id).then(res => {
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
                {this.state.users.map(user => <ListElement name={user.name} source={user.source} dest={user.dest}></ListElement>)}
            </div>
        )
    }
}

export default List
