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