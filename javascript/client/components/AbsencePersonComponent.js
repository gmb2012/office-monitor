import React, { PropTypes } from 'react';
import AbsenceItemComponent from './AbsenceItemComponent';
import AbsenceItemAddComponent from './AbsenceItemAddComponent';

class AbsencePersonComponent extends React.Component {
    render() {
        let empty = '';
        if(this.props.items.length == 0) {
            empty = <p>-</p>;
        }

        return (
            <div className="abscence-person">
                <h2 className="title is-2">
                    {this.props.name}
                    <i className='fa fa-calendar-plus-o absence-icon absence-person-icon' />
                </h2>
                <AbsenceItemAddComponent />
                {this.props.items.map((item, index) => <AbsenceItemComponent {...item} key={index} />)}
                {empty}
            </div>
        );
    }
}

AbsencePersonComponent.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
};

export default AbsencePersonComponent;