import axios from 'axios'
import '../../mock/api'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

// function delay(timeout){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve()
//         },timeout)
//     })
// }

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