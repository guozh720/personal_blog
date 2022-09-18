import axios from "axios";



// export  const getArticleListAll = () => {
//
//     axios.get(' http://localhost:8081/article/listAll ', {}).then(data => {
//         console.log(data)
//     }).catch(error => {
//         console.error(error);
//     })
// }
export const getArticleListAll = (url: string, params?: {}) => new Promise<{}>((resolve, reject) => {
    axios.get(url, params)
        .then(response => resolve(response.data))
        .catch(error => reject(error))
});
