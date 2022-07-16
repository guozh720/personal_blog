import react from 'react'
import { useEffect, useState, useMemo } from 'react';
import { getUserInfoMockApi } from '../../mockService/MockUserInfoService'

interface IuserInfo {
    name: string,
    age: number,
}
const AboutMe = () => {
    const [info, setInfo] = useState<IuserInfo>();
    const [age, setAge] = useState(1)

    const fnGetUserInfo = async () => {
        try {
            const userInfoData = await getUserInfoMockApi()
            setInfo(userInfoData)
        } catch (error) {
            setInfo(error as IuserInfo)
        }

    }
    useEffect(() => {
        console.log('userEffect')
        fnGetUserInfo()
    }, [])
    return (
        <>
            <div>
                <h2>有关于我的内容</h2>
            </div>
            <div>
                <h2 >{info?.age}</h2>
            </div>
            <div>
                <h2>有关于我的内容</h2>
            </div>
        </>
    )
};
export default AboutMe;