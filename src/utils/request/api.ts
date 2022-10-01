import axios from "axios";

axios.interceptors.request.use(request => {
    console.log('init axios request interceptors')
    return request;
});
axios.interceptors.response.use(response => {
    if (response.status >= 200 && response.status <= 300) {
        const data = response.data;
        console.log(`parse response data: ${data}`)
        return response;
    }
}, error => {
    console.log('init response error')
});
const url = '';


class Request{

    constructor(public baseUrl:string ) {
    }
}
let request1 = new Request(url);