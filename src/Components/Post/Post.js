import React from 'react'
import './Post.css'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const api = axios.create({
    baseURL: 'http://localhost:9000'
})

class Post extends React.Component {
    state = {
        switch: false,
        source: "VIT",
        dest: "VIT",
        date: null,
    }

    updateUser = async () => {

        alert(this.state.date)
        api({ method: 'patch', url: '/match/' + this.props.Id, data: { source: this.state.source, dest: this.state.dest, date: this.state.date.toString() } });
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
                    <DatePicker selected={this.state.date} onChange={(date1) => this.setState({ date: date1 })} minDate={new Date()}
                        todayButton="Today"
                        withPortal
                        showYearDropdown
                        scrollableMonthYearDropdown
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        placeholderText="Select Date and time of departure"
                    />

                    {/* <div className="margin">
                        <h3>Date of journey</h3>
                        <input type="datetime-local" onChange={this.dateHandler} />
                    </div> */}

                    <div className="margin">
                        <input type="button" value="Post" onClick={this.updateUser}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Post
