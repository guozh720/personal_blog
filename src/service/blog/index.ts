import Request from "../../utils/request/apiService";

export const listAllBlog = () => {
    return Request.get("blog/listAll");
}