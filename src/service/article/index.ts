import Request from "../../utils/request/apiService";

export const addArticle = (param: {
    author: string,
    title: string,
}) => {
    return Request.post("article/add", param);
};

export const listAllArticle = () => {
    return Request.get("article/listAll", {});
}