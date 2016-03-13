import React, { PropTypes } from 'react';
import classNames from 'classnames';

class AbsenceItemAddComponent extends React.Component {
    inputToday() {
        return (new Date).toISOString().substring(0, 10);
    }

    render() {
        return (
            <div className={classNames({ 'box': true, 'absence-item-add': true, 'hidden': !this.props.display })}>
                <p className='control'>
                    <label className='label'>From</label>
                    <input className='input' type='date' id='absence-item-add-from' min={this.inputToday()} defaultValue={this.inputToday()} />
                </p>
                <p className='control'>
                    <label className='label'>To</label>
                    <input className='input' type='date' id='absence-item-add-to' min={this.inputToday()} defaultValue={this.inputToday()} />
                </p>
                <p className='control'>
                    <label className='label'>Location</label>
                    <input className='input' type='text' id='absence-item-add-location' defaultValue='Munich' />
                </p>
                <p className='control'>
                    <input className='input' type='hidden' id='absence-item-add-id' readOnly="readonly" value={this.props.personId} />
                    <button className='button is-primary'>Save</button>
                </p>
            </div>
        );
    }
}

AbsenceItemAddComponent.propTypes = {
    display: PropTypes.bool.isRequired,
    personId: PropTypes.string.isRequired,
};

export default AbsenceItemAddComponent;