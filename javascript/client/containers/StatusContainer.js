import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import StatusComponent from '../components/StatusComponent';
import AbsenceComponent from '../components/AbsenceComponent';

class StatusContainer extends React.Component {
    render() {
        return (
            <StatusComponent {...this.props}  />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        available: state.status
    }
};


export default connect(mapStateToProps, actions)(StatusContainer);
