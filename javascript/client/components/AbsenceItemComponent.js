import React, { PropTypes } from 'react';
import classNames from 'classnames';

class AbsenceItemComponent extends React.Component {
    zeroPad(number) {
        if(number < 10) {
            number = '0' + number;
        }

        return number;
    }

    formatTimestamp(timestamp) {
        var date = new Date(timestamp * 1000);
        return this.zeroPad(date.getDate())  + '/' + this.zeroPad(date.getMonth() + 1) + '/' +  date.getFullYear();
    }

    isCurrent(from, to) {
        let returnValue = false;

        if(Date.now() >= from * 1000 && Date.now() <= to * 1000) {
            returnValue = true;
        }

        return returnValue;
    }

    handleClick(id) {
        if(window.confirm("Are you sure?")) {
            this.props.deleteAbsence(this.props.serviceURL + '/' + this.props.personId + '/' + this.props.id);
        }
    }

    render() {
        return (
            <p className={classNames({ 'abscence-item': true, 'abscence-item-current': this.isCurrent(this.props.from, this.props.to) })}>
                {this.formatTimestamp(this.props.from)} - {this.formatTimestamp(this.props.to)} : {this.props.location}
                <i className='fa fa-calendar-minus-o absence-icon absence-item-icon' onClick={this.handleClick.bind(this)} />
            </p>
        );
    }
}

AbsenceItemComponent.propTypes = {
    id: PropTypes.string.isRequired,
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    personId: PropTypes.string.isRequired,
    serviceURL: PropTypes.string.isRequired,
    deleteAbsence: PropTypes.func.isRequired
};

export default AbsenceItemComponent;