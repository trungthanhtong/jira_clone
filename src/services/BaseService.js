import Axios from 'axios';
import { ACCESS_TOKEN, DOMAIN_JIRA } from '../util/constants/settingSystem';

export class BaseService {
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN_JIRA}/${url}`,
            method: 'PUT',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_JIRA}/${url}`,
            method: 'POST',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }

    get = (url) => {
        return Axios({
            url: `${DOMAIN_JIRA}/${url}`,
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }

    delete = (url, model) => {
        return Axios({
            url: `${DOMAIN_JIRA}/${url}`,
            method: 'DELETE',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }
}