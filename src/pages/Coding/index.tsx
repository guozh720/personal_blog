import React, {CSSProperties, useEffect, useState} from "react";
import {getArticleListAll} from '@/mockService/MockGetArticleService'
import {baseUrl} from "@/utils/request/api";
import {listAllBlog} from "@/service/blog";


interface ArticleCardProps {
    title: string,
    description: string,
    onClick: () => void,
    children: never[];
}

const ArticleCard = (props: ArticleCardProps) => {
    const {title, description, onClick,} = props;
    const cardStyle = {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
        minWidth:'300px',
        minHeight:'168.75px',
        marginRight: '20px',
        cursor: 'pointer',
    };

    const titleStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
        borderBottom: '2px solid #ddd', // 只设置下边框颜色
        minHeight: '24px'
    };

    const descriptionStyle = {
        fontSize: '14px',
        color: '#666',
    };

    return (
        <div style={cardStyle} onClick={onClick}>
            <div style={titleStyle}>{title}</div>
            <div style={descriptionStyle}>{description}</div>
        </div>
    )
}

interface Article {
    id: number,
    title: string,
    description: string,
    content: string,
}

interface ArticleListProps {
    blogs: Article[],
    onArticleClick: (id: number) => void
}

const ArticleList: React.FC<ArticleListProps> = (props: ArticleListProps) => {
    const {blogs, onArticleClick} = props;
    const containerStyle: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // 水平居中
        padding: '0 20px', // 左右留白
    };
    const articleList = blogs.map((blog: Article) => (
        <div key={blog.id} style={containerStyle}>
            <ArticleCard
                key={blog.id}
                title={blog.title}
                description={blog.description}
                onClick={() => onArticleClick(blog.id)}
            >
            </ArticleCard>
        </div>
    ))
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: "row-reverse",
                flexWrap: 'wrap-reverse',
                justifyContent: 'center'
            }}>
            {articleList}
        </div>
    )
}
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
    const blogs: Article[] = [
        {id: 1, title: 'First Blog', description: 'This is the first blog', content: 'Content of the first blog'},
        {id: 2, title: 'Second Blog', description: 'This is the second blog', content: 'Content of the second blog'},
        {id: 3, title: 'Third Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        {id: 4, title: '4 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        {id: 5, title: '5 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        {id: 6, title: '6 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        {id: 7, title: '7 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        {id: 8, title: '8 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
        {id: 9, title: '9 Blog', description: 'This is the third blog', content: 'Content of the third blog'},
    ];
    const handleBlogClick = (id: number) => {
        const blog = blogs.find((b) => b.id === id) || null;
        setSelectedBlog(blog);
    };
    const getBlogData = async () => {
        try {
            const data = await listAllBlog();
            console.log(data)
            setBlogDetails(data)
        }catch (e){
            console.error(e);
        }
    }
    useEffect(()=>{
        console.log(123)
    },[blogDetails])
    
    
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
