import React from 'react';

class AbsenceItemComponent extends React.Component {
    render() {
        return (
            <p className="abscence-item">{this.props.from} - {this.props.to} : {this.props.location}</p>
        );
    }
}

AbsenceItemComponent.propTypes = {
    id: React.PropTypes.string.isRequired,
    from: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired
};

export default AbsenceItemComponent;

/*
 <p className="abscence-item abscence-item-current">13.04.2016 - 15.05.2016 : Munich</p>
 */