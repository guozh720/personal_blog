import React from "react";
import { Result, Button } from "antd";

const NoFoundPage = () => {
    return (
        <Result
            status='404'
            title='404'
            subTitle='访问页面不存在'
            extra={
                <Button >
                    返回主页
                </Button>
            }
        />
    )
}
export default NoFoundPage;