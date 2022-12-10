import React, {useRef, useState} from "react";

import {SimpleMdEditor} from "../../components/SimpleMdEditor";
import {addArticle, listAllArticle} from '../../service/article'
import set = Reflect.set;

const Coding = () => {
    const [editorValue, setEditorValue] = useState('start write your own article');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const getEditValue = (data: string) => {
        setEditorValue(data);
    }
    const fnSubmit = async () => {
        console.log('fnSubmit')
        try {
            const content = editorValue;
            // const data = await addArticle({author, title, content});
            const data = await listAllArticle({author,title,content});
            console.log(data)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <p>这是coding界面</p>
            <input placeholder={'请输入作者'}
                   value={author}
                   onChange={e => setAuthor(e.target.value)}
                   style={{width: '30%', display: 'inline'}}/>
            <input value={title}
                   onChange={e => setTitle(e.target.value)}
                   placeholder={'主题'}
                   style={{width: '30%', display: 'inline', marginLeft: '10px'}}/>

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
        </div>
    )
}

export default Coding;
