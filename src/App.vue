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
        const flag = (width < 501 ? false : true);
        const menuVisible = ref(flag);
        const isClick = ref(false);
        provide("menuVisible", menuVisible); // set
        provide("isClick", isClick);
        // 跳转之后判断
        router.afterEach(() => {
            if(!flag)
                menuVisible.value = false;
        })
    }
}
</script>
