import React, { PropTypes } from 'react';
import classNames from 'classnames';

class StatusComponent extends React.Component {

    handleClick() {
        this.props.setAvailable(this.props.serviceURL);
    }

    componentDidMount() {
        this.props.getAvailableInterval(this.props.refreshInterval, this.props.serviceURL);
    }

    render() {
        return (
            <div className='column'>
                <div className={classNames({ 'status': true, 'dnd': !this.props.available, 'available': this.props.available })} onClick={this.handleClick.bind(this)}>
                    <h1 className='title status-title'>{this.props.available ? this.props.textAvailable : this.props.textDnd}</h1>
                </div>
            </div>
        );
    }
}

StatusComponent.propTypes = {
    refreshInterval: PropTypes.number.isRequired,
    serviceURL: PropTypes.string.isRequired,
    textDnd: PropTypes.string.isRequired,
    textAvailable: PropTypes.string.isRequired,
    getAvailable: PropTypes.func.isRequired,
    setAvailable: PropTypes.func.isRequired,
};

export default StatusComponent;
