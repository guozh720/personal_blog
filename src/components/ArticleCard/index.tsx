import React from "react";

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
export  default ArticleCard;