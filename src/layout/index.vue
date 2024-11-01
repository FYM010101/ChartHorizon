<template>
  <div class="layout_container">
    <!-- 菜单 -->
    <div class="layout_menu">
      <!-- 展示菜单 -->
      <!-- Logo Section -->
      <Logo></Logo>
      <!-- 菜单组件-->
      <!--根据路由动态生成菜单-->
      <el-menu class="tech-menu" :default-active="$route.path" mode="horizontal" background-color="#1f1f2e"
        text-color="#ffffff" active-text-color="#4caf50">
        <Menu :menuList="userStore.menuRoutes"></Menu>
      </el-menu>
    </div>
    <!-- 内容展示区域 -->
    <div class="layout_main">
      <!-- <Main></Main> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
//获取路由对象
import { useRoute } from 'vue-router'
//引入LOGO组件
import Logo from './logo/index.vue'
//引入菜单组件
import Menu from './menu/index.vue'
//内容展示区域
import Main from './main/index.vue';
//获取用户相关的小仓库
import useUserStore from '@/stores/modules/user';
let userStore = useUserStore();
//获取路由对象
let $route = useRoute();
</script>

<script lang="ts">
export default {
  name: "Layout"
}
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  // .layout_menu {
  //   display: flex;
  //   color: white;
  //   width: 100%;
  //   // height: $base-menu-height;
  //   background: $base-menu-background;
  // }
  .layout_menu {
    display: flex;
    align-items: center;
    background-color: #1f1f2e;
    padding: 0 20px;
    height: $base-menu-height;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    /* 整体菜单样式 */
      // .tech-menu {
      //   border-right: 1px solid rgba(255, 255, 255, 0.1);
      // }
  }

  .layout_main {
    position: absolute;
    width: 100%;
    height: calc(100vh - $base-menu-height);
    padding: 20px;
    overflow: auto;
    top: $base-menu-height;
  }
}
</style>
