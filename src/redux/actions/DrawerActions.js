import { SET_SUBMIT_FORM } from "../constants/DrawerConstants";

export const setSubmitForm = (submitFunction) => ({
    type: SET_SUBMIT_FORM,
    submitFunction
})
