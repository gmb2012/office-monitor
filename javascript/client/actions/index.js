import { GET_AVAILABILITY, GET_ABSENCE } from './types';
import Webservice from '../lib/Webservice';

const webservice = new Webservice();

// STATUS
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

// ABSENCE
export const getAbsenceInterval = (interval, serviceURL) => {
    return function(dispatch) {
        const absence = getAbsence(serviceURL);
        absence(dispatch);

        window.setInterval(absence.bind(this, dispatch), interval);
    }
}

export const getAbsence = (serviceURL) => {
    return function(dispatch) {
        webservice.get(serviceURL, dispatch, GET_ABSENCE);
    }
};

export const deleteAbsence = (serviceURL) => {
    return function(dispatch) {
        webservice.delete(serviceURL, dispatch, GET_ABSENCE);
    }
};
