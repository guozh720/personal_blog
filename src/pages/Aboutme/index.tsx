import react from 'react'
import { useEffect, useState, useMemo } from 'react';
import { getUserInfoMockApi } from '../../mockService/MockUserInfoService'
import { IUserInfo } from '../../mockService/MockUserInfoService';

const AboutMe = () => {
    const [info, setInfo] = useState<IUserInfo>();

    const fnGetUserInfo = async () => {
        try {
            const userInfoData = await getUserInfoMockApi()
            setInfo(userInfoData)
        } catch (error) {
            setInfo(error as IUserInfo)
        }

    }
    useEffect(() => {
        console.log('userEffect')
        fnGetUserInfo()
    }, [])
    return (
        <>
        <div style={{display:'flex',width:'100%',justifyContent:'center',}}>
            <div style={
                {
                    width:'70%',
                    backgroundImage:'linear-gradient(-180deg, #15140F 0%, #34312C 97%);',
                    display:'flex',
                    justifyContent:'center'
                 
                }
                
                }>
                <div>
                    <h2>{info?.age}</h2>
                </div>
            </div>
            </div>
        </>
    )
};
export default AboutMe;