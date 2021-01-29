import axios from 'axios'
import '../../mock/api'

export async function isExits(params = {}) {
    return axios.post(
        '/api/isExits',
        params
    );
}

export async function addResult(params = {}) {
    return axios.post(
        '/api/addResult',
        params
    )
}