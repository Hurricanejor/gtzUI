<demo>
    按钮类型
</demo>
<template>
    <div>
        <Button @click="onClick">默认按钮</Button>
        <Button theme="button">主要按钮</Button>
        <Button theme="text">文字按钮</Button>
        <Button disabled theme="button">禁用按钮</Button>
    </div>
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