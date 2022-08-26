
import axios from "axios";
import store from "@/store";
import nprogress from 'nprogress';
import "nprogress/nprogress.css";


let requests = axios.create({
    baseURL: "/api",
    timeout: 5000
});

requests.interceptors.request.use(config => {
    nprogress.start();

    if (store.state.shopcart.USER_ID) {
        config.headers.userTempId = store.state.shopcart.USER_ID;
    }
    if(store.state.user.token){
        config.headers.token = store.state.user.token;
    }
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




