import React, { PropTypes } from 'react';
import AbsenceItemComponent from './AbsenceItemComponent';
import AbsenceItemAddComponent from './AbsenceItemAddComponent';

class AbsencePersonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showAddItem: false };
    }

    handleClick() {
        this.setState( { showAddItem: !this.state.showAddItem });
    }

    render() {
        let empty = '';
        if(this.props.items.length == 0) {
            empty = <p>-</p>;
        }

        return (
            <div className="abscence-person">
                <h2 className="title is-2">
                    {this.props.name}
                    <i className='fa fa-calendar-plus-o absence-icon absence-person-icon' onClick={this.handleClick.bind(this)} />
                </h2>
                <AbsenceItemAddComponent display={this.state.showAddItem} personId={this.props.id} />
                {this.props.items.map((item, index) =>
                    <AbsenceItemComponent {...item} key={index} personId={this.props.id} serviceURL={this.props.serviceURL} deleteAbsence={this.props.deleteAbsence} />)}
                {empty}
            </div>
        );
    }
}

AbsencePersonComponent.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    serviceURL: PropTypes.string.isRequired,
    deleteAbsence: PropTypes.func.isRequired
};

export default AbsencePersonComponent;