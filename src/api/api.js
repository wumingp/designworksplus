import server from "/src/util/request.js"; //路劲自己修改
//登录
export const login = (params) => {
    return server({
        url: "/NCHURead/Login",
        method: "post" ,   //后端给什么写什么
        // headers: { 'Content-Type' : 'application/json;charset=utf-8'},
        data: params
    })
}
//上传头像
export const upload = (params) =>{
    return server({
        url:"/NCHURead/GetImg",
        method:"post",
        data:params
    })
}
//上传背景图片
export const GetBackgroundImg = (params) =>{
    return server({
        url:"/NCHURead/GetBackgroundImg",
        method:"post",
        data:params
    })
}
//请求获取首页资源
export const GetResources = (params)=>{
    return server({
        url:"/NCHURead/GetResources",
        method:"post",
        data:params
    })
}
//请求获取个人信息资源
export const GetPersonMsgResources = (params)=>{
    return server({
        url:"/NCHURead/GetPersonMsgResources",
        method:"post",
        data:params
    })
}
//请求获取huo

