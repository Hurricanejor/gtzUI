<template>
<div class="layout">
    <Topnav class="nav" />
    <div class="content">
        <aside v-if="phoneMenuVisible">
            <h3>开始</h3>
            <ol>
                <li>
                    <router-link @click="phoneToggleMenu" to="/doc/intro">介绍</router-link>
                </li>
                <li>
                    <router-link @click="phoneToggleMenu" to="/doc/install">安装</router-link>
                </li>
            </ol>
            <h3>组件列表</h3>
            <ol>
                <li>
                    <router-link @click="phoneToggleMenu" to="/doc/switch">Switch组件</router-link>
                </li>
                <li>
                    <router-link @click="phoneToggleMenu" to="/doc/button">Button组件</router-link>
                </li>
            </ol>
            <h3>文档</h3>
            <ol>
                <li>
                    <router-link @click="phoneToggleMenu" to="/doc/note1">项目搭建</router-link>
                </li>
            </ol>
        </aside>
        <main class="markdown-body">
          <router-view></router-view>
        </main>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/TopNav.vue'
import { computed, inject, ref, Ref } from 'vue'

import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export default {
    name: 'Doc',
    components: {
        Topnav
    },
    setup() {
      const menuVisible = inject<Ref<boolean>>("menuVisible")  //get
      const isClick = inject<Ref<boolean>>("isClick")  //get
      /* 
        1.PC端：永久显示 menuVisible
        2.移动端：初始 不显示，点击logo触发显示  isClick
                 点击li 不显示
                 点击除了aside外的都 不显示
       */
        
       let phoneMenuVisible = computed(() => {
         return menuVisible.value ? menuVisible.value : isClick.value;
       })
       const phoneToggleMenu = () => {
         isClick.value = !isClick.value;
       }
      return { menuVisible, isClick, phoneMenuVisible, phoneToggleMenu }
    }
}
</script>
<style lang="scss" scoped>
$mainColor: #31588a;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    z-index: 9;
    padding-left: 0;
    padding-right: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    padding-top: 15px;
    >h3 {
      height: 60px;
      line-height: 60px;
    }
  }
}
aside {
  background: #ffffff;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  border-right: 1px solid #dcdcdc;
  
  > h3 {
    margin: 5px 0 0 10px;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
  }
  > ol {
    > li {

      > a {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        line-height: 40px;
        padding-left: 20px;
        font-size: 14px;
        transition: background 250ms ease 0s;
        &:hover {
          
        background: rgba(236, 242, 252, .5);
          &::after{
          }
        }
      }
      
      > a.router-link-active {
        color: $mainColor;
        background: rgba(236, 242, 252, .5);
        // padding-left: 16px;
        position: relative;
        transition: background 250ms ease 0s;
        &::after{
            box-shadow: 1px 0 12px 0$mainColor;
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background:$mainColor;
            -moz-border-radius-topright: 4px;
            border-top-right-radius: 4px;
            -moz-border-radius-bottomright: 4px;
            border-bottom-right-radius: 4px;
            -webkit-box-shadow: 1px 0 12px 0 $mainColor;
            -moz-box-shadow: 1px 0 12px 0 $mainColor;
          }
      }
    }
  }
}
main {
  overflow: auto;
  
}
</style>