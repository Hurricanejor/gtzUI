<demo>
    按钮圆角
</demo>
<template>
    <Button @click="onClick" circle>默认按钮</Button>
    <Button theme="button" circle>主要按钮</Button>
    <Button theme="text" circle>文字按钮</Button>
    <Button disabled theme="button" circle>禁用按钮</Button>
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