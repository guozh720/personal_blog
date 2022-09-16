import React, {useState} from "react";

const ComponentA = (props: { num: number }) => {
    const {num} = props;
    console.log(num)
    return <div>
        我是组件A
        <br/>
        num: {num}
    </div>
}
const ComponentB = (props: { fn: Function }) => {
    const {fn} = props;
    console.log(fn)
    let count = 0;
    return <div>
        我是组件B
        <button style={{width: '100px', height: '100px'}} onClick={() => {
            console.log('touch');
            fn();
            count++;
        }}/>
        <hr/>
        <ComponentA num={count}/>
    </div>
}
export const ComponentParent = () => {
    const [num, setNumAdd] = useState<number>(0);
    let numAdd = num;
    return (
        <div>
            我是父组件
            <hr/>
            <ComponentB fn={()=>setNumAdd(numAdd++)}/>
        </div>
    )
}

