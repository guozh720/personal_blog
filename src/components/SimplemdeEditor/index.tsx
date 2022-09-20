import React, {useMemo, useState} from "react";
import SimpleMDEReact from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';

const SimplemdeEditor = () => {
    // const [content, setContent] = useState('');
    //
    // const onchange = (data: string) => {
    //     console.log(data);
    //     setContent(data);
    // }
    //
    // return (
    //     <SimpleMdeReact value={content} onChange={onchange}/>
    // );
    const delay = 1000;
    const autosavedValue = 'init value'
    const anOptions = useMemo(() => {
        return {
            autosave: {
                enabled: true,
                uniqueId: "demo",
                delay,
            },
        };
    }, [delay]);

    return (
        <div>
            <h4>Autosaving after refresh (wait 1000ms after change)</h4>
            <SimpleMDEReact id={"demo"} value={autosavedValue} options={anOptions} />
        </div>
    );
}
export { SimplemdeEditor }