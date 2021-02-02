import axios from 'axios'
import '../../mock/api'

axios.defaults.baseURL = '/';

export function isExits(params = {}) {
    return axios.post(
        '/api/studentDatum/verifyStudentDatum',
        params
    );
}

export function addResult(params = {}) {
    return axios.post(
        '/api/studentDatum/submitQuestionnaire',
        params
    )
}