import { GET_ALL_PRODUCT_CATEGORIES, GET_ALL_PRODUCT_CATEGORIES_SAGA } from "../constants/JiraConstants";

export const getAllProductCategoriesSaga = () => ({
    type: GET_ALL_PRODUCT_CATEGORIES_SAGA
})

export const getAllProductCategogies = (data) => ({
    type: GET_ALL_PRODUCT_CATEGORIES,
    data
})
