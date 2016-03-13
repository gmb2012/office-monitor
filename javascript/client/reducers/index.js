import { GET_AVAILABILITY, GET_ABSENCE } from '../actions/types';

const status = (state = true, action) => {
    switch (action.type) {
        case GET_AVAILABILITY:
            return action.body.available;
            break;
        default:
            return state;
    }
}

const absence = (state = [], action) => {
    switch (action.type) {
        case GET_ABSENCE:
            return action.body;
            break;
        default:
            return state;
    }
}

export default {
    status,
    absence
}
