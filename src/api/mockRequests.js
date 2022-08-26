
import axios from "axios";

//引入进度条
import nprogress from 'nprogress';
//引入相关进度条的样式
import "nprogress/nprogress.css";

let requests = axios.create({
    baseURL: "/mock",
    timeout: 5000
});

requests.interceptors.request.use(config => {
    nprogress.start();
    return config;
});



requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (err) => {
    alert(err.message);
    return new Promise();
});

export default requests;




