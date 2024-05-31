import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './index.css';
import {mockArticleList} from "@/service/article";
import ShowMarkdown from "@/components/ShowMarkdown";

const blogContents: { [key: number]: string } = {
    1: 'This is the content of Blog 1',
    2: 'This is the content of Blog 2',
    3: 'This is the content of Blog 3',
};

function BlogContent() {
    
    const { id } = useParams<{ id: string }>();
    const content = mockArticleList.find(blog => blog.id === Number(id))?.data||'';
    // const content = blogContents[Number(id)];
    const navigate = useNavigate();
    return (
        <div className="blog-content" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/*<button className="back-button" onClick={() => navigate(-1)}>Go Back</button>*/}
            {/*<h1>Blog Content</h1>*/}
            {/*<p>{content}</p>*/}
            <div>
                <ShowMarkdown content={content}/>
            </div>
        </div>
    );
}

export default BlogContent;
