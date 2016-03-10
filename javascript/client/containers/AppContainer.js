import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import StatusComponent from '../components/StatusComponent';
import AbsenceComponent from '../components/AbsenceComponent';

class AppContainer extends React.Component {
    render() {
        return (
            <div className="columns">
                <StatusComponent {...this.props.config.StatusComponent}
                    available={this.props.status} getAvailable={this.props.getAvailable} />
                <AbsenceComponent {...this.props.config.AbsenceComponent} />
            </div>
        );
    }
}

AppContainer.propTypes = {
    config: PropTypes.object.isRequired,
    status: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {

    return state;
}


export default connect(mapStateToProps, actions)(AppContainer);
