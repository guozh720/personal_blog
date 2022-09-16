import React, {useState} from "react";
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'
//代码块样式
import 'highlight.js/styles/androidstudio.css'

export const CodeBlock = () => {
    const [text, setText] = useState('');
    const [showText, setShowText] = useState('');
    // hljs.configure({
    //     tabReplace: '',
    //     classPrefix: 'hljs-',
    //     languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript', 'Markdown'],
    // });
    const changeHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
        console.log(text)
        setText(e.target.value);
    }
    return (
        <div style={{display: "flex", flexDirection: 'row'}}>
            <textarea style={{width: '200px', height: '100px'}} value={text} onChange={e => changeHandle(e)}/>
            <div style={{width: '200px', height: '100px', backgroundColor: 'cyan'}}>
                <ReactMarkdown children={text}/>
            </div>

        </div>
    );
}
