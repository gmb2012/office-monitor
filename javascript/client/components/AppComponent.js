import React, { PropTypes } from 'react';
import StatusContainer from '../containers/StatusContainer';
import AbsenceContainer from '../containers/AbsenceContainer';
import ClockComponent from './ClockComponent';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="columns">
                <StatusContainer {...this.props.config.StatusComponent} />
                <AbsenceContainer {...this.props.config.AbsenceComponent} />
                <ClockComponent />
            </div>
        );
    }
}

AppComponent.propTypes = {
    config: PropTypes.object.isRequired
};

export default AppComponent;
