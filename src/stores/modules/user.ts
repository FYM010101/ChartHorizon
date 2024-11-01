//创建用户相关的小仓库
import { defineStore } from 'pinia'

//引入路由(常量路由)
import { constantRoute } from '@/router/routes'
import type { UserState } from './types/type'
//创建用户小仓库
const useUserStore = defineStore('User', {
  //小仓库存储数据地方
  state: (): UserState => {
    return {
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组(路由)
    }
  },
  getters: {},
})
//对外暴露获取小仓库方法
export default useUserStore
