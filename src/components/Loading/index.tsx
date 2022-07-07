import React from "react";
import { LoadingOutlined } from '@ant-design/icons';

 const Loading = () => {
    return (
        <div className="loading" style={
            {
                width: '100%',
                height: '100%',
                lineHeight: '100%',
                position: "fixed",
                left: 0,
                top: 0,
                background: "#fff",
                textAlign: "center",
            }
        }>
            <LoadingOutlined style={{ color: '#40a9ff', fontSize: '80px' }} />
        </div>
    )
}
export default Loading;