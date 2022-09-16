import React, {useRef, useState} from 'react';
import ReactMarkdown from 'react-markdown';
// import CodeBlock from "../CodeBlock";

const Editor = () => {
    const [content, setContent] = useState<string>('');
    const textChange = () => {
        // setContent(textAreaValue.current?.value);
    }
    const textAreaValue = useRef(null);

    return (
        <div>
            <textarea ref={textAreaValue} onChange={() => textChange()}/>
            {/*<ReactMarkdown className='contentResult' children={content} renderers={{code:CodeBlock}}/>*/}
            <ReactMarkdown className='contentResult' children={content} />
        </div>
    );
}

export default Editor;
