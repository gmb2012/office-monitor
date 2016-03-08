import React from 'react';
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

    render() {
        return (
            <p className={classNames({ 'abscence-item': true, 'abscence-item-current': this.isCurrent(this.props.from, this.props.to) })}>
                {this.formatTimestamp(this.props.from)} - {this.formatTimestamp(this.props.to)} : {this.props.location}
                <i className='fa fa-calendar-minus-o absence-icon absence-item-icon' />
            </p>
        );
    }
}

AbsenceItemComponent.propTypes = {
    id: React.PropTypes.string.isRequired,
    from: React.PropTypes.number.isRequired,
    to: React.PropTypes.number.isRequired,
    location: React.PropTypes.string.isRequired
};

export default AbsenceItemComponent;