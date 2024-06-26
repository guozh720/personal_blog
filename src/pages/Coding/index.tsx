import React, {useEffect, useState} from "react";
import {getArticleListAll} from '@/mockService/MockGetArticleService'
import {baseUrl} from "@/utils/request/api";
import {listAllBlog} from "@/service/blog";
import type {Article} from "@/service/article";
import ArticleList from "@/components/ArticleCardList";
import { useNavigate } from 'react-router-dom';

interface BlogDetail {
    id: number,
    blogTitle:string,
    blogContent:string,
    coverImage:string,
    blogStatus:number,
    createTime:string,
    updateTime:string,
}

const Coding = () => {
    const [selectedBlog, setSelectedBlog] = useState<Article | null>(null);
    const [blogDetails, setBlogDetails] = useState<BlogDetail[]>([]);
    const navigate = useNavigate();
    const blogs: Article[] = [
        {id: 1, title: 'First Blog', description: 'This is the first blog', content: 'Content of the first blog'},
        // {id: 2, title: 'Second Blog', description: 'This is the second blog', content: 'Content of the second blog'},
        // {id: 3, title: 'Third Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        // {id: 4, title: '4 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        // {id: 5, title: '5 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        // {id: 6, title: '6 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        // {id: 7, title: '7 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        // {id: 8, title: '8 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        // {id: 9, title: '9 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
    ];
    const handleBlogClick = (id: number) => {
        const blog = blogs.find((b) => b.id === id) || null;
        setSelectedBlog(blog);
        navigate(`/blog/${id}`);
    };
    const getBlogData = async () => {
        try {
            // const data = await listAllBlog();
            // console.log(data)
            // setBlogDetails(data)
        }catch (e){
            console.error(e);
        }
    }
    // useEffect(()=>{
    //     console.log(123)
    // },[blogDetails])
    
    
    const getArticleData = async () => {
        const url = baseUrl + '/article/listAll';
        const params = {};
        try {
            const data = await getArticleListAll(url, params);
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        // getArticleData();
        getBlogData().then();
    }, [])
    return (
        <>
            <div style={{padding: 24}}>
                <ArticleList blogs={blogs} onArticleClick={handleBlogClick}/>
                {/*<BlogDetail blog={selectedBlog} />*/}
            </div>
        </>
    )
}

interface BlogDetailProps {
    blog: Article | null;
}

const BlogDetail: React.FC<BlogDetailProps> = ({blog}) => {
    if (!blog) return <div>Select a blog to read...</div>;

    return (
        <div style={{padding: 24}}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
};

export default Coding;
