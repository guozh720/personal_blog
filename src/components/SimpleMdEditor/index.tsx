import React, {useEffect, useMemo, useState} from "react";
import SimpleMDEReact from "react-simplemde-editor";
import 'easymde/dist/easymde.min.css';

const SimpleMdEditor = ({inputValue, getValue}: { inputValue: string | null | undefined, getValue: Function }) => {
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
    const saveEditorValue = (value: string) => {
        getValue(value);
    }
    return (
        <div>
            <h4>AutoSaving after refresh (wait 1000ms after change)</h4>
            <SimpleMDEReact id={"demo"} value={inputValue ?? 'init value'} options={anOptions}
                            onChange={saveEditorValue}/>
        </div>
    );
}
export {SimpleMdEditor}