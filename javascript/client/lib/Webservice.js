import Superagent from 'superagent';
import LogError from '../LogError';

class Webservice {
    sendRequest(request, dispatch, actionType) {
        return request.end(function (err, res) {
            if (res && res.ok) {
                dispatch({
                    type: actionType,
                    body: res.body
                })
            } else {
                LogError.error('Webservice error: ' + err);
            }
        });
    }

    get(url, dispatch, actionType) {
        return this.sendRequest(Superagent.get(url), dispatch, actionType);
    }

    post(url, dispatch, actionType) {
        return this.sendRequest(Superagent.post(url), dispatch, actionType);
    }
}

export default Webservice;