import { Link } from "react-router-dom";
import './index.css';
import React from "react";

const item = [
    {
        name: '首页',
        label: 'home',
        component: '/home',
    },
    {
        name: '关于',
        label: 'aboutMe',
        component: '/aboutMe',
    },
    {
        name:'编程',
        label:'coding',
        component:'/coding'
    },
]

const MyHeader = () => {

    return (
        <div className="header">
            {item.map((item, index) => (
                <div key={index}>

                    <Link
                        className="link"
                        to={item.component}
                    >
                        {item.label}

                    </Link>
                </div>

            ))}

        </div >
    )
};

export default MyHeader