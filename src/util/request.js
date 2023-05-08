import axios from 'axios'

//创建一个axios
let server = axios.create({
    // 请求公共地址
    baseURL: '/api',
    // 超时时间
    timeout: 5000,
})
// 添加请求拦截器
axios.interceptors.request.use((config)=>{
    // 在发送请求之前做些什么
    // 比如判断是否有token
    if (localStorage.getItem('token')) {
        // 在请求头中添加token
        config.headers.token = localStorage.getItem('token');
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response)=>{
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    console.log(error)
    return Promise.reject(error);
});

export default server
