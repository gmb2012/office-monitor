import React, { PropTypes } from 'react';
import classNames from 'classnames';

class AbsenceItemAddComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'from': this.inputToday(),
            'to': this.inputToday(),
            'location': 'Munich'

        };
    }

    handleClick(event) {
        event.preventDefault();
        this.props.addAbsence(
            this.props.serviceURL + '/' + this.props.personId,
            {
                'from': Math.round(+Date.parse(this.state.from) / 1000),
                'to': Math.round(+Date.parse(this.state.to) / 1000),
                'location': this.state.location
            }
        );
    }

    handleChange(event)  {
        this.state[event.target.name] = event.target.value;
        this.setState(this.state);
    }


    inputToday() {
        return (new Date).toISOString().substring(0, 10);
    }

    render() {
        return (
            <div className={classNames({ 'box': true, 'absence-item-add': true, 'hidden': !this.props.display })}>
                <form className='absenceItem' onChange={this.handleChange.bind(this)}>
                    <p className='control'>
                        <label className='label'>From</label>
                        <input className='input' type='date' name='from' min={this.inputToday()} defaultValue={this.state.from} />
                    </p>
                    <p className='control'>
                        <label className='label'>To</label>
                        <input className='input' type='date' name='to' min={this.inputToday()} defaultValue={this.state.to} />
                    </p>
                    <p className='control'>
                        <label className='label'>Location</label>
                        <input className='input' type='text' name='location' required="required" defaultValue={this.state.location} />
                    </p>
                    <p className='control'>
                        <button className='button is-primary' onClick={this.handleClick.bind(this)}>Save</button>
                    </p>
                </form>
            </div>
        );
    }
}

AbsenceItemAddComponent.propTypes = {
    display: PropTypes.bool.isRequired,
    personId: PropTypes.string.isRequired,
    serviceURL: PropTypes.string.isRequired,
    addAbsence: PropTypes.func.isRequired
};

export default AbsenceItemAddComponent;