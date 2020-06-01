import React from 'react';
import Post from '../Post/Post';
import List from '../List/List';
import './Body.css';

class Body extends React.Component {
    state = {
        post: false,
    }

    postClickHandler = () => {
        this.setState((prevState) => {
            return { post: !prevState.post };
        });
    };

    render() {
        let status;

        if (!this.state.post) {

            status = <Post stateChanger={this.postClickHandler} Id={this.props.userId}></Post>;
        }
        else {
            status = <List Id={this.props.userId}></List>
        }


        return (
            <div id="post-card" className="w3-panel w3-card-4">
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                {status}
            </div>
        );
    }
}

export default Body;
