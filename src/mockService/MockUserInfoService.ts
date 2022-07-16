import { asyncUtil } from "../utils/utils";

interface IUserInfo{
    name:string,
    age:number,
}

const mockUserInfoJson:IUserInfo={
    name:'张三',
    age:5,
}
export const getUserInfoMockApi = async():Promise<IUserInfo>=>asyncUtil(mockUserInfoJson,1500)