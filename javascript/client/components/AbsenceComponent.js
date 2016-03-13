import React, { PropTypes } from 'react';
import WebserviceComponent from '../WebserviceComponent';
import AbsencePersonComponent from './AbsencePersonComponent';

class AbsenceComponent extends WebserviceComponent {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    responseBodyToState(resBody) {
        return { data: resBody };
    }

    render() {
        return (
            <div className="column">
                <h1 className="title is-1">{this.props.title}</h1>
                {this.state.data.map((item, index) => <AbsencePersonComponent {...item} key={index} />)}
            </div>
        );
    }
}

AbsenceComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default AbsenceComponent;