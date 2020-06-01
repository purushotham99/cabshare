import React from 'react'
import './Post.css'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000'
})

class Post extends React.Component {
    state = {
        switch: false,
        source: "VIT",
        dest: "VIT",
        date: null
    }

    updateUser = async () => {
        // alert("source " + this.state.source + " dest " + this.state.dest)
        // alert('match/' + this.props.Id)
        let res = await api({ method: 'patch', url: '/match/' + this.props.userId, data: { dest: this.state.dest, source: this.state.source } });
        console.log(res);
        this.props.stateChanger();
    }

    switchClickHandler = () => {
        this.setState((prevState) => {
            return { switch: !prevState.switch };
        });
    };

    sourceHandler = (event) => {
        this.setState({ source: event.target.value })

    }

    destHandler = (event) => {
        this.setState({ dest: event.target.value })
    }



    render() {
        let source;
        let dest;

        if (this.state.switch) {
            source = <input type="text" disabled placeholder="VIT" className="col-sm-4 margin-left-right" />
            dest = <input type="text" placeholder="Destination" className="col-sm-4 margin-left-right" onChange={this.destHandler} />
        }
        if (!this.state.switch) {
            source = <input type="text" placeholder="Source" className="col-sm-4 margin-left-right" onChange={this.sourceHandler} />
            dest = <input type="text" disabled placeholder="VIT" className="col-sm-4 margin-left-right" />
        }

        return (
            <div id="post">
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                <form className="container" align="center">
                    <div className="row margin">

                        {source}

                        {dest}

                    </div>

                    <div className="row margin" >
                        <button type="button" className="fa fa-exchange fa-2x" aria-hidden="true" onClick={this.switchClickHandler}></button>
                    </div>
                    <div className="margin">
                        <h3>Date of journey</h3>
                        <input type="date" />
                    </div>
                    <div className="margin">
                        <p>Time of departure from VIT </p>
                        <input type="time" />
                    </div>
                    <div className="margin">
                        <input type="button" value="Post" onClick={this.updateUser}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Post
