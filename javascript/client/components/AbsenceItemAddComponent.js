import React, { PropTypes } from 'react';

class AbsenceItemAddComponent extends React.Component {
    inputToday() {
        return (new Date).toISOString().substring(0, 10);
    }

    render() {
        return (
            <div className='box absence-item-add'>
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
                    <button className='button is-primary'>Save</button>
                    <button className='button'>Cancel</button>
                </p>
            </div>
        );
    }
}

export default AbsenceItemAddComponent;