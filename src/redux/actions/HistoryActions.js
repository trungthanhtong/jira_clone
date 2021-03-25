import { ADD_HISTORY } from "../constants/HistoryConstants"

export const addHistory = (history) => {
    return {
        type: ADD_HISTORY,
        history,
    }
}