<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
import { ref, provide } from 'vue'
import { router } from './router'
export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth;
        const flag = width <= 500 ? true : false;
        const menuVisible = ref(flag);
        provide("menuVisible", menuVisible); // set
        // 跳转之后判断
        router.afterEach(() => {
            if(!flag)
                menuVisible.value = false;
        })
    }
}
</script>
