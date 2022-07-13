import react from 'react'
import { useEffect, useState, useMemo } from 'react';
import { getUserInfo } from '../../service/UserService';

interface IuserInfo{
    name:string,
    age:number,
    sex:string,
    goal:string
}
const AboutMe = () => {
    // const data = {};
    const [info, setInfo] = useState<string|IuserInfo>('这是获取数据之前的值');

    useEffect(()=>{
    const data= getUserInfo()
    console.log(data)
    },[])
    return (
        <>
            <div>
                <h2>有关于我的内容</h2>
            </div>
            <div>
                <h2 >{info.toString()}</h2>
            </div>
            <div>
                <h2>有关于我的内容</h2>
            </div>
        </>
    )
};
export default AboutMe;