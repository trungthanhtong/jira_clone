import { takeLatest, call, put } from "@redux-saga/core/effects";
import { GET_ALL_PRODUCT_CATEGORIES_SAGA } from "../constants/JiraConstants";
import { ProjectService } from "../../services/ProjectService";
import { getAllProductCategogies } from "../actions/ProjectCategoryAction";
import { STATUS_CODE } from "../../util/constants/settingSystem";

function* getAllProjectCategories(action) {
    try {
        const { status, data } = yield call(() =>
            ProjectService.getAllProjectCategory()
        );
        if (status === STATUS_CODE.SUCCESS) {
            yield put(getAllProductCategogies(data.content));
        }
    } catch (err) {
        console.log(err.response.data);
    }
}

export function* watchingAllProjectCatagories() {
    yield takeLatest(GET_ALL_PRODUCT_CATEGORIES_SAGA, getAllProjectCategories);
}
