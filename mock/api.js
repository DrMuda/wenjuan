import Mock from "mockjs";

let defaultResult = [
    {
        studentName:"张三",
        school:"大肥羊学校",
        birthday:"2021/1/29",
        grade:"三年二班",
    }
]

export default [
    Mock.mock('/api/isExits', req => {
        const info = JSON.parse(req.body)
        const index1 = defaultResult.findIndex((result) => {
            return result.studentName === info.studentName
        })
        const index2 = defaultResult.findIndex((result) => {
            return result.school === info.school
        })
        const index3 = defaultResult.findIndex((result) => {
            return result.birthday === info.birthday
        })
        const index4 = defaultResult.findIndex((result) => {
            return result.grade === info.grade
        })
        if (index1 === -1 || index2 === -1 || index3 === -1 || index4 === -1) {
            return {
                status: true,
                message: "success",
                data: false
            }
        }
        return {
            status: true,
            message: "success",
            data: true
        }
    }),
    Mock.mock('/api/addResult', req => {
        const newResult = req.body
        if (newResult) {
            defaultResult.push(JSON.parse(newResult))
        }
        return {
            status: true,
            message: "提交成功",
        }
    }),
]