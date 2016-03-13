import React, { PropTypes } from 'react';
import StatusContainer from '../containers/StatusContainer';
import AbsenceComponent from './AbsenceComponent';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="columns">
                <StatusContainer {...this.props.config.StatusComponent} />
                <AbsenceComponent {...this.props.config.AbsenceComponent} />
            </div>
        );
    }
}

AppComponent.propTypes = {
    config: PropTypes.object.isRequired
};

export default AppComponent;
