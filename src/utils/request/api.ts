import axios from "axios";
// @ts-ignore
import Fingerprint from "fingerprintjs";

axios.interceptors.request.use(request => {
    console.log('init axios request interceptors')
    //这个是发送前的过滤，可用作session检验之类的
    return request;
});
axios.interceptors.response.use(response => {
    if (response.status >= 200 && response.status <= 300) {
        const data = response.data;
        console.log(`parse response data: ${data}`)
        return response;
    }
}, error => {
    console.log(`init response error: ${error}`)
});

class ApiRequest {

    private readonly baseUrl: string;
    private path: string;
    private httpMethod: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.path = "/";
        this.httpMethod = 'post';
    }

    get(path: string, data?: any) {
        this.httpMethod = "get";
        this.path = path;
        return this.callApi(data);
    }

    post(path: string, data: any) {
        this.httpMethod = 'post';
        this.path = path;
        return this.callApi(data);
    }

    callApi(obj: any, httpDefaultOpts: any = undefined) {
        if (!httpDefaultOpts) {
            httpDefaultOpts = this.getOptions(obj);
        }
        return axios(httpDefaultOpts).then(function (response) {
            if (!response) {
                const errorCode = 'axios request error';
                return Promise.reject(errorCode);
            }
            if (response.data.hasOwnProperty('success') && response.data.success) {
                return Promise.resolve(response.data.data);
            } else if (response.data.hasOwnProperty('errorCode') && response.data.errorCode) {
                let errorCode = response.data.errorCode;
                let errorMessage = response.data.errorMessage;
                return Promise.reject({errorCode, errorMessage});
            } else {
                // 服务端响应内容不符合 api 协议规范
                return Promise.reject('protocol error');
            }
        })
    }

    getOptions(data: any) {
        const paramsJson = data;
        const deviceId = new Fingerprint({
            canvas: true,
        }).get();
        let timestamp = Date.now() * 1000 + new Date().getMilliseconds();
        //配置
        return {
            method: this.httpMethod,
            url: this.baseUrl + this.path,
            params: {
                ...paramsJson,
            },
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                timestamp: String(timestamp),
                "deviceId": String(deviceId),
            },
            transformRequest: function (requestData: any) {
                return JSON.stringify(requestData);
            },
            timeout: 5000,
        }
    }
}

export default ApiRequest