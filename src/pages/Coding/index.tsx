import React, {useState} from "react";

import {SimpleMdEditor} from "../../components/SimpleMdEditor";
import {addArticle} from '../../service/article'

const Coding = () => {
    const [editorValue, setEditorValue] = useState('start write your own article');
    const getEditValue = (data: string) => {
        setEditorValue(data);
    }
    const fnSubmit = async () => {
        console.log('fnSubmit')
        try {
            // const author = "郭1234";
            // const title = "标题";
            // const data = await addArticle({author,title});
            // console.log(data)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            这是coding界面
            <div style={{display: 'flex'}}>
                <div style={{width: '500px', height: '500px', display: 'inline-block'}}>
                    <SimpleMdEditor inputValue={editorValue} getValue={getEditValue}/>
                </div>
                <button style={{
                    height: "50px",
                    width: '100px',
                    backgroundColor: '#4CAF50',
                    border: 'none',
                    color: "white",
                    padding: '15px 32px',
                    textAlign: "center",
                    textDecoration: "none",
                    display: 'inline-block',
                    fontSize: '16px',
                }} onClick={() => fnSubmit()}>提交
                </button>
            </div>
        </>
    )
}

export default Coding;
