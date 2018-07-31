import { REQUEST_DATA, RECEIVE_DATA } from '../constants/ActionTypes';
import { getDivisions, getPrecincts, getTotals } from "../service/dataProvider";
import { extendObject } from '../service/helper/object';
import Request from '../service/request';

const initialState = {
    isLoading: true,
    defaultId: 'RO'
};

export const data = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return extendObject(state, { isLoading: true });
        case RECEIVE_DATA:
            let id = action.id;
            return Object.assign({}, state, {
                isLoading: false,
                regions: extendObject(
                    state.regions, { [id] : event.data }
                ),
                divisions: extendObject(
                    state.divisions, { [id] : (id === state.defaultId) ? {} : getDivisions(id, event.data) }
                ),
                precincts: extendObject(
                    state.precincts, { [id] : (id === state.defaultId) ? event.data.u : getPrecincts(id, event.data) }
                )
            });
        default:
            return state
    }
};