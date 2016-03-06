import React from 'react';
import AbsenceItemComponent from './AbsenceItemComponent';

class AbsencePersonComponent extends React.Component {
    render() {
        let empty = '';
        if(this.props.items.length == 0) {
            empty = <p>-</p>;
        }

        return (
            <p className="abscence-person">
                <h2 className="title is-2">{this.props.name}</h2>
                {this.props.items.map((item, index) => <AbsenceItemComponent {...item} key={index} />)}
                {empty}
            </p>
        );
    }
}

AbsencePersonComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    items: React.PropTypes.array.isRequired
};

export default AbsencePersonComponent;