import Request from "../../utils/request/apiService";

export const addArticle = () => {
    return Request.post("article/add", {});
};

export const listAllArticle = () => {
    return Request.get("article/listAll", {});
}