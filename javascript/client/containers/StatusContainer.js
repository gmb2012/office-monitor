import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import StatusComponent from '../components/StatusComponent';

class StatusContainer extends React.Component {
    render() {
        return (
            <StatusComponent {...this.props}  />
        );
    }
}

StatusContainer.propTypes = {
    refreshInterval: PropTypes.number.isRequired,
    serviceURL: PropTypes.string.isRequired,
    textDnd: PropTypes.string.isRequired,
    textAvailable: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        available: state.status
    }
};


export default connect(mapStateToProps, actions)(StatusContainer);
