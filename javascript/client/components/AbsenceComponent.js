import React, { PropTypes } from 'react';
import AbsencePersonComponent from './AbsencePersonComponent';

class AbsenceComponent extends React.Component {
    componentDidMount() {
        this.props.getAbsenceInterval(this.props.refreshInterval, this.props.serviceURL);
    }

    render() {
        return (
            <div className="column">
                <h1 className="title is-1">{this.props.title}</h1>
                {this.props.persons.map((item, index) =>
                    <AbsencePersonComponent
                        {...item}
                        serviceURL={this.props.serviceURL}
                        deleteAbsence={this.props.deleteAbsence}
                        addAbsence={this.props.addAbsence}
                        key={index} />)}
            </div>
        );
    }
}

AbsenceComponent.propTypes = {
    title: PropTypes.string.isRequired,
    persons: PropTypes.arrayOf(PropTypes.object).isRequired,
    refreshInterval: PropTypes.number.isRequired,
    serviceURL: PropTypes.string.isRequired,
    getAbsenceInterval: PropTypes.func.isRequired,
    getAbsence: PropTypes.func.isRequired,
    addAbsence: PropTypes.func.isRequired,
    deleteAbsence: PropTypes.func.isRequired
};

export default AbsenceComponent;