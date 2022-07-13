import { UserInfo } from '../../mock/mockService/MockUserInfoService'


export const getUserInfo = async ()=>{
    
    let userInfo = null
     await UserInfo().then((data)=>{
        console.log(data);
        userInfo = data;
    })
    return userInfo;
    
}