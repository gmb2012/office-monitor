import React from 'react';
import StatusComponent from './StatusComponent';
import AbsenceComponent from './AbsenceComponent';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="columns">
                <StatusComponent {...this.props.config.StatusComponent} />
                <AbsenceComponent {...this.props.config.AbsenceComponent} />
            </div>
        );
    }
}

AppComponent.propTypes = {
    config: React.PropTypes.object.isRequired
};

export default AppComponent;