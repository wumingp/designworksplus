import server from "/src/util/request.js"; //路劲自己修改
//登录
export const login = (params) => {
    return server({
        url: "/NCHURead/Login",
        method: "post" ,   //后端给什么写什么
        headers: { 'Content-Type' : 'application/json;charset=utf-8'},
        data: params
    })
}
//注册
export const registered = (params) => {
    return server({
        url: "/NCHURead/registered",
        method: "post" ,   //后端给什么写什么
        // headers: { 'Content-Type' : 'application/json;charset=utf-8'},
        data: params
    })
}
//上传头像
export const upload = (params,token) =>{
    return server({
        url:"/NCHURead/upUserImg",
        method:"post",
        headers:
        { "content-type": "application/x-www-form-urlencoded",
           "token": token
        },
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
//请求获取首页资源通过小类别
export const getAllArticlesBySubcategory = (Lager_clazz,subcategory)=>{
    return server({
        url:"/NCHURead/getArticleList",
        method:"get",
        params:{
            largeClazz:Lager_clazz,
            subcategory:subcategory
        }
    })
}

//请求获取首页资源通过大类别
export const getAllArticlesByLager_clazz = (params)=>{
    return server({
        url:"/NCHURead/getArticleList",
        method:"GET",
        params:{
            largeClazz:params
        }
    })
}
//请求获取首页资源
export const getArticleList = ()=>{
    return server({
        url:"/NCHURead/getArticleList",
        method:"GET",
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
//上传文章
export const putEssay = (params,token)=>{
    return server({
        url:"/NCHURead/upArticle",
        headers:
        { "content-type": "application/json",
          "token": token
        },
        method:"post",
        data:params
    })
}
//上传文章图片
export const putEssayImg = (params)=>{
    return server({
        url:"/NCHURead/putEssayImg",
        headers:{ "content-type": "multipart/form-data"},
        method:"post",
        data:params
    })
}
//获取障碍物
export const GetBarrier = (params)=>{
    return server({
        url:'',
        method:"post",
        data:params
    })
}

export const InquireHash = (params)=>{
    return server({
        url:'/app/file/inquire',
        headers: { "content-type": "application/json"},
        method:"post",
        data:params,
    })
}


