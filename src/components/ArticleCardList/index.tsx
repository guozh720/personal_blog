import {Article} from "@/service/article";
import React,{CSSProperties} from "react";
import ArticleCard from "@/components/ArticleCard";

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
};
export default ArticleList;