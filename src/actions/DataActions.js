import * as C from '../constants/ActionTypes';
import Worker from '../service/api/worker';
import { getFileUrl } from "../service/api/url";

function requestData(id) {
    return {
        type: C.REQUEST_DATA,
        id
    }
}

function receiveData(id, data) {
    return {
        type: C.RECEIVE_DATA,
        id,
        data: data
    }
}

function markIdAsActive() {

    return {
        type: C.RECEIVE_DATA,
        id
    }
}

const doFetchData = (id) => {
    return dispatch => {
        dispatch(requestData());

        let worker = new Worker();
        worker.postMessage(getFileUrl(id));
        worker.onmessage = (event) => {
            dispatch(receiveData(id, event.data));
        };
    }
};

const shouldFetchData = (id, state) => {
    return ! (state.data.hasOwnProperty('regions') && state.data.regions.hasOwnProperty(id));
};

export const fetchData = (id) => (dispatch, getState) => {
    if (shouldFetchData(id, getState())) {
        return dispatch(doFetchData(id))
    }
};