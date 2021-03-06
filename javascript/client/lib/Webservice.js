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

    post(url, dispatch, actionType, params = {}) {
        return this.sendRequest(Superagent.post(url).send(params), dispatch, actionType);
    }

    delete(url, dispatch, actionType) {
        return this.sendRequest(Superagent.delete(url), dispatch, actionType);
    }
}

export default Webservice;