<template>
<div class="topnav">
    <span class="toggleAside" @click="toggleMenu"></span>
    <div class="logo"><h2>GtzUI</h2></div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
</div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    setup() {
      const menuVisible = inject<Ref<boolean>>("menuVisible")  //get
      const isClick = inject<Ref<boolean>>("isClick")  //get
      const toggleMenu = () => {
        isClick.value = !isClick.value;
      console.log(isClick.value)
      }
      return {toggleMenu}
    }
}
</script>

<style lang="scss" scoped>
$mainColor: #31588a;
.topnav {
  background-color: #ffffff;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      color: $mainColor;
    }
  }
  > .toggleAside {
    width: 35px;
    height: 35px;
    background: url("../assets/gtz-logo-blue.png") no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
