import React from 'react';
import AbsencePersonComponent from './AbsencePersonComponent';

class AbsenceComponent extends React.Component {
    render() {
        let  data = [
            { 'name': 'Björn', 'items': []},
            { 'name': 'Flo', 'items': []}
        ];

        return (
            <div>
                <h1 className="title is-1">{this.props.title}</h1>
                {data.map((item, index) => <AbsencePersonComponent {...item} key={index} />)}
            </div>
        );
    }
}

AbsenceComponent.propTypes = {
    title: React.PropTypes.string.isRequired
};

export default AbsenceComponent;