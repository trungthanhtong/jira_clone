import { GET_ALL_PRODUCT_CATEGORIES } from "../constants/JiraConstants"

const initialState = {
    projectCategories: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_CATEGORIES: {
            return {...state, projectCategories: [...action.data]}
        }
    

    default:
        return {...state}
    }
}
