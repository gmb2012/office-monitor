import React, { PropTypes } from 'react';
import dateFormat from 'dateformat';

class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: '', time: '12:35:53' };

        // binding
        this.refreshClock = this.refreshClock.bind(this);
    }

    refreshClock() {
        let date = new Date();
        this.setState({ date: dateFormat(date, 'dd.mm.yyyy'), time: dateFormat(date, 'HH:MM:ss') });
    }

    componentDidMount() {
        this.refreshClock();
        setInterval(this.refreshClock, 1000);
    }

    render() {
        return (
            <h2 className='title is-3 clock'>
                {this.state.time}<br />{this.state.date}
            </h2>
        );
    }
}

export default ClockComponent;