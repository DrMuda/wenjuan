import axios from 'axios'
import '../../mock/api'
import delay from '../utils/delay'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

export async function isExits(params = {}) {
    try {
        // await delay(10000)
        const result = await axios.post(
            '/api/studentDatum/verifyStudentDatum',
            params
        );
        return result
    } catch (e) {
        console.error(e)
        return {
            data: {
                status: false
            }
        }
    }
}

export async function addResult(params = {}) {
    try {
        const result = await axios.post(
            '/api/studentDatum/submitQuestionnaire',
            params
        )
        return result
    } catch (e) {
        console.error(e)
        return {
            data: {
                status: false
            }
        }
    }
}

export async function checkLinedIsInvalid(params = {}) {
    // await delay(2000)
    try {
        const result = await axios.post(
            '/api/studentDatum/checkLinedIsInvalid',
            params
        )
        return result
    } catch (e) {
        console.error(e)
        return {
            data: {
                status: false
            }
        }
    }
}

export async function createVerify() {
    // await delay(5000)
    try {
        const result = await axios.get(
            "/api/studentDatum/createVerify",
            { responseType: 'arraybuffer' }
        )
        return result
    } catch (e) {
        console.error(e)
        return {
            data: {
                status: false
            }
        }
    }
}

export async function verify(params = {}) {
    try {
        const result = await axios.post(
            `/api/studentDatum/verify?code=${params}`,
            // params
        )
        return result
    } catch (e) {
        console.error(e)
        return {
            data: {
                status: false
            }
        }
    }
}