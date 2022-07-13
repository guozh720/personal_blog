import * as fs from 'fs'
interface IuserInfo{
    name:string,
    age:number,
    sex:string,
    goal:string
}
export const UserInfo = (): Promise<IuserInfo> => {
    return new Promise((resolve: Function, reject: Function) => {
        setTimeout(() => {
            let userInfo = {}
            if (fs.existsSync('src/mock/mockData/mockUserInfo.json')) {
                userInfo = JSON.parse(fs.readFileSync('../mockData/mockUserInfo.json', 'utf8'))
            }
            resolve(userInfo)
        }, 2000);
    })
}

