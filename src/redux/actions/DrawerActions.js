import { OPEN_DRAWER, SET_SUBMIT_FORM } from "../constants/DrawerConstants";

export const setSubmitForm = (submitFunction) => ({
    type: SET_SUBMIT_FORM,
    submitFunction,
})

export const openDrawer = (title, Component) => ({
    type: OPEN_DRAWER,
    Component,
    title,
})
