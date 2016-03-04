import React from 'react';

class AbsenceComponent extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title is-1">{this.props.title}</h1>
                <p>
                    <h2 className="title is-2">Björn</h2>
                    <p className="abscence-item abscence-item-current">13.04.2016 - 15.05.2016 : Munich</p>
                    <p className="abscence-item">01.06.2016 - 15.06.2016 : Polen</p>
                    <p className="abscence-item">13.08.2016 - 31.08.2016 : Munich</p>
                </p>
            </div>
        );
    }
}

AbsenceComponent.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default AbsenceComponent;