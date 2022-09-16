import React, {useEffect, useState} from "react";
import {getCodingArticleApi, CodingArticle} from "../../mockService/MockCodingArticleService";
import ReactMarkdown from 'react-markdown'
import {CodeBlock} from "../../components/CodeBlock";
const Coding = () => {
    const [codingArticle, setCodingArticle] = useState<CodingArticle[]>([]);
    const markDownInfo = '## hello'
    const fnGeCodingArticle = async () => {
        try {
            const data = await getCodingArticleApi;
            console.log('get CodingArticle success');
            setCodingArticle(data);
        } catch (e) {
            console.error(e);
        }
    };
    useEffect(() => {
        fnGeCodingArticle().then(() => [])
    }, [])
    return (
        <>
            这是coding界面
            <ReactMarkdown children={markDownInfo}/>
            {codingArticle.length > 0 ? codingArticle[0].title : ''}
            <hr/>
            <CodeBlock/>
        </>
    )
}

export default Coding;
