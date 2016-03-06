import React from 'react';
import AbsencePersonComponent from './AbsencePersonComponent';

class AbsenceComponent extends React.Component {
    render() {
        let  data = [
            {
                'id': 'f469aec9-3764-4917-b48f-113a82ff42f2',
                'name': 'Björn',
                'items': [
                    {'id': 'f630e9b2-4408-4b50-9584-6e11cba7fed3', 'from': '06.03.2016', 'to': '15.05.2016', 'location': 'Munich'},
                    {'id': 'e7a5c753-4b72-4704-94db-cba22395d0b8', 'from': '01.06.2016', 'to': '15.06.2016', 'location': 'Poznan'},
                    {'id': '57622cfb-8850-4e65-a0cd-699aaf2e48c1', 'from': '13.08.2016', 'to': '31.08.2016', 'location': 'Munich'}
                ]
            },
            { 'id': '26bb0093-218a-4b06-a117-62006139e91a', 'name': 'Flo', 'items': []}
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