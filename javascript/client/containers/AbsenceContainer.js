import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import AbsenceComponent from '../components/AbsenceComponent';

class AbsenceContainer extends React.Component {
    render() {
        return (
            <AbsenceComponent {...this.props}  />
        );
    }
}

AbsenceContainer.propTypes = {
    refreshInterval: PropTypes.number.isRequired,
    serviceURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        persons: state.absence
    }
};


export default connect(mapStateToProps, actions)(AbsenceContainer);
