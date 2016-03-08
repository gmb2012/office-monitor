import React from 'react';

class AbsenceItemAddComponent extends React.Component {
    render() {
        return (
            <div className='box absence-item-add'>
                <p className='control'>
                    <label className='label'>From</label>
                    <input className='input' type='date' id='absence-item-add-from' placeholder={Date.now()} />
                </p>
                <p className='control'>
                    <label className='label'>To</label>
                    <input className='input' type='date' id='absence-item-add-to' placeholder={Date.now()} />
                </p>
                <p className='control'>
                    <label className='label'>Location</label>
                    <input className='input' type='text' id='absence-item-add-location' placeholder='Munich' />
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