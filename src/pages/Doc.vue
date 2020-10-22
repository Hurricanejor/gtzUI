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
        <main>
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
    padding-top: 30px;
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
    margin: 4px 0 4px 10px;
  }
  > ol {
    > li {
      padding: 4px 0;

      > a {
        display: inline-block;
        box-sizing: border-box;
        height: 30px;
        width: 100%;
        line-height: 30px;
        padding-left: 20px;
        &:hover {
          &::after{
            content: " ⬅";
          }
        }
      }
      
      > .router-link-active {
        border-left: 4px solid #000;
        // font-weight: bold;
        padding-left: 16px;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>