import Request from "../../utils/request/apiService";

export const addArticle = (param: {
    author: string,
    title: string,
    content:string,
}) => {
    return Request.post("article/add", param);
};

export const listAllArticle = (param: {
    author: string,
    title: string,
    content:string,
}) => {
    return Request.get("article/listAll",param);
}