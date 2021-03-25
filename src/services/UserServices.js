import { DOMAIN_JIRA } from "../util/constants/settingSystem"
import Axios from 'axios'

export const UserService = {
    signIn: (userLogin) => {
        return Axios({
            url:`${DOMAIN_JIRA}/users/signin`,
            method: 'POST',
            data: userLogin
        })
    }
}
