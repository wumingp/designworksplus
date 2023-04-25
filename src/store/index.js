import { createStore } from 'vuex'

export default createStore({
  state: {
    pathName: "",
    tagType:"小说",
    currDbSource: {},
    currJobData: {},
    DbSource: [],
    userInfo:{},
    token:localStorage.getItem('token'),
  },
  getters: {
  },
  mutations: {
    // 修改登录信息
    changeUserInfo(state,userInfo){
      state.userInfo = userInfo
    },

    // 同步操作token
    changeToken(state,token){
      state.token = token
    },
    // 保存当前菜单栏的路径
    savePath(state,pathName){
      state.pathName = pathName;
    },
    // 保存当前点击的数据源
    saveCurrDbSource(state,currDbSource){
      state.currDbSource = currDbSource;
    },
    // 保存当前点击的元数据
    saveCurrJobData(state,currJobData){
      state.currJobData = currJobData;
    },
    // 保存所有数据源
    saveDbSource(state,DbSource){
      state.DbSource = DbSource;
    }
  },
  actions: {
    recordUser(context,userInfo){
      context.commit('changeUserInfo',userInfo);
    },
    // 设置token
    setToken(context,token){
      context.commit('changeToken',token)
    },
    // 清除token
    clearToken(context){
      context.commit('changeToken')
    }
  },
  modules: {
  }
})
