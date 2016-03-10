import { GET_AVAILABILITY } from './types';
import Superagent from 'superagent';

export const getAvailableInterval = (interval, serviceURL) => {
    return function(dispatch) {
        const available = getAvailable(serviceURL);
        available(dispatch);

        window.setInterval(available.bind(this, dispatch), interval);
    }
}

export const getAvailable = (serviceURL) => {
    return function(dispatch) {
        Superagent
            .get(serviceURL)
            .end(function (err, res) {
                if (res && res.ok) {
                    dispatch({
                        type: GET_AVAILABILITY,
                        body: res.body
                    });
                } else {
                    LogError.error('Webservice error in class "' + this.constructor.name + '": ' + err);
                }
            });
    }
};


export const setAvailable = (serviceURL) => {
    console.log("setAva");

    return function(dispatch) {
        Superagent
            .post(serviceURL)
            .end(function (err, res) {
                if (res && res.ok) {
                    dispatch({
                        type: GET_AVAILABILITY,
                        body: res.body
                    });
                } else {
                    LogError.error('Webservice error in class "' + this.constructor.name + '": ' + err);
                }
            });
    }
};
