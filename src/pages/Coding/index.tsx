import React, {useEffect, useState} from "react";
import {getCodingArticleApi, CodingArticle} from "../../mockService/MockCodingArticleService";
import ReactMarkdown from 'react-markdown'
import {CodeBlock} from "../../components/CodeBlock";
import {getArticleListAll} from '../../mockService/MockGetArticleService'

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
    const getArticleData = async () => {
        const url = 'http://localhost:8081/article/listAll';
        const params = {};
        try {
            const data = await getArticleListAll(url, params);
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        fnGeCodingArticle().then(() => [])
        getArticleData()
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
