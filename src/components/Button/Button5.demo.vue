<demo>
    按钮图标
</demo>
<template>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '../../lib/Button.vue';
export default ({
    components: {
        Button
    },
    setup(props) {
        const onClick = () => {
            console.log(`HI`);
        }
        return {
            onClick
        }
    }
})
</script>

