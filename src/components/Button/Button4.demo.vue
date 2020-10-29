<demo>
    按钮铺满
</demo>
<template>
    <Button @click="onClick" full>默认按钮</Button>
    <Button theme="button" full>主要按钮</Button>
    <Button theme="text" full>文字按钮</Button>
    <Button disabled theme="button" full>禁用按钮</Button>
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