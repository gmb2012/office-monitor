import { GET_AVAILABILITY } from '../actions/types';

const status = (state = true, action) => {
    switch (action.type) {
        case GET_AVAILABILITY:
            return action.body.available;
            break;
        default:
            return state;
    }
}

export default {
    status
}
