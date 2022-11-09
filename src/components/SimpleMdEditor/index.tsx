import React, {useEffect, useMemo, useState} from "react";
import SimpleMDEReact from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';

const SimpleMdEditor = (props: { initValue: string, getValue: Function }) => {
    const {initValue, getValue} = props;
    const [content, setContent] = useState(initValue ?? 'init value')
    const delay = 1000;
    const anOptions = useMemo(() => {
        return {
            autosave: {
                enabled: true,
                uniqueId: "demo",
                delay,
            },
        };
    }, [delay]);

    useEffect(() => {
        //TODO onChange函数的时候需要做个防抖
        getValue(content);
    }, [content])
    return (
        <div>
            <h4>AutoSaving after refresh (wait 1000ms after change)</h4>
            <SimpleMDEReact id={"demo"} value={content} options={anOptions} onChange={setContent}/>
        </div>
    );
}
export {SimpleMdEditor}