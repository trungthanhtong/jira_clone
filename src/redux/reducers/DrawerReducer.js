/* eslint-disable import/no-anonymous-default-export */
import EditProjectForm from '../../components/Form/EditProjectForm';
import {CLOSE_DRAWER, OPEN_DRAWER, SET_SUBMIT_FORM} from '../constants/DrawerConstants'

const initialState = {
    visible: false,
    ComponentContent: <EditProjectForm/>,
    callbackSubmit: () => {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DRAWER: {
            return {...state, visible: true}
        }
        case CLOSE_DRAWER: {
            return {...state, visible: false}
        }
        case SET_SUBMIT_FORM: {
            return {...state, callbackSubmit: action.submitFunction}
        }
        default:
            return { ...state };
    }
};
