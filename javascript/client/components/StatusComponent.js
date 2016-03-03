import React from 'react';
import classNames from 'classnames';
import WebserviceComponent from '../WebserviceComponent';
import Superagent from 'superagent';

class StatusComponent extends WebserviceComponent {
    constructor(props) {
        super(props);
        this.state = {available: false};
    }

    responseBodyToState(resBody) {
        return {available: resBody.available};
    }

    handleClick (event) {
        Superagent
            .post(this.props.serviceURL)
            .end(function (err, res) {
                if (res && res.ok) {
                    this.setState(this.responseBodyToState(res.body));
                } else {
                    LogError.error('Webservice error in class "' + this.constructor.name + '": ' + err);
                }
            }.bind(this));
    }

    render() {
        return (
            <div className={classNames({ 'status': true, 'dnd': !this.state.available, 'available': this.state.available })} onClick={this.handleClick.bind(this)}>
                <h1 className='title status-title'>{this.state.available ? this.props.textAvailable : this.props.textDnd}</h1>
            </div>
        );
    }
}

StatusComponent.propTypes = {
    textDnd: React.PropTypes.string.isRequired,
    textAvailable: React.PropTypes.string.isRequired
};

export default StatusComponent;