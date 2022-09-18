import axios from "axios";

export  const getArticleListAll = () => {

    axios.get(' http://localhost:8081/article/listAll ', {}).then(data => {
        console.log(data)
    }).catch(error => {
        console.error(error);
    })
}
