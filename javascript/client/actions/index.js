import { GET_AVAILABILITY } from './types';
import Webservice from '../lib/Webservice';

const webservice = new Webservice();

export const getAvailableInterval = (interval, serviceURL) => {
    return function(dispatch) {
        const available = getAvailable(serviceURL);
        available(dispatch);

        window.setInterval(available.bind(this, dispatch), interval);
    }
}

export const getAvailable = (serviceURL) => {
    return function(dispatch) {
        webservice.get(serviceURL, dispatch, GET_AVAILABILITY);
    }
};

export const setAvailable = (serviceURL) => {
    return function(dispatch) {
        webservice.post(serviceURL, dispatch, GET_AVAILABILITY);
    }
};
