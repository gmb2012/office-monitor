import React from 'react';

class AbsencePersonComponent extends React.Component {
    render() {
        return (
            <p className="abscence-person">
                <h2 className="title is-2">{this.props.name}</h2>
                <p className="abscence-item abscence-item-current">13.04.2016 - 15.05.2016 : Munich</p>
                <p className="abscence-item">01.06.2016 - 15.06.2016 : Polen</p>
                <p className="abscence-item">13.08.2016 - 31.08.2016 : Munich</p>
            </p>
        );
    }
}

AbsencePersonComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.Object).isRequired,
};

export default AbsencePersonComponent;