import React from 'react';
import classNames from 'classnames';

class AbsenceItemComponent extends React.Component {
    isCurrent(from, to) {
        let returnValue = false;

        if(Date.now() >= Date.parse(from) && Date.now() <= Date.parse(to)) {
            returnValue = true;
        }

        return returnValue;
    }

    render() {
        ;

        return (
            <p className={classNames({ 'abscence-item': true, 'abscence-item-current': this.isCurrent(this.props.from, this.props.to) })}>
                {this.props.from} - {this.props.to} : {this.props.location}
            </p>
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