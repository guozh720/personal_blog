import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";

const showMarkdown = (props: { content: string }) => {
    const {content} = props;
    return (
        <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
            {content || ''}
        </ReactMarkdown>
    )
}
export default showMarkdown;