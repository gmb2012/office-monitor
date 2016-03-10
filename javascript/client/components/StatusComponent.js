import React from 'react';
import classNames from 'classnames';
import Superagent from 'superagent';

class StatusComponent extends React.Component {

    handleClick() {
        this.props.setAvailable(this.props.serviceURL);
    }

    componentDidMount() {
        this.props.getAvailableInterval(1000, this.props.serviceURL);
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
    textDnd: React.PropTypes.string.isRequired,
    textAvailable: React.PropTypes.string.isRequired,
    getAvailable: React.PropTypes.func.isRequired,
    setAvailable: React.PropTypes.func.isRequired,
};

export default StatusComponent;
