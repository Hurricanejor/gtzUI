<demo>
    按钮尺寸
</demo>
<template>
    <div>
        <Button size="big">大型按钮</Button>
        <Button>默认按钮</Button>
        <Button size="small">小型按钮</Button>
        <br />
        <Button theme="button" size="big">大型按钮</Button>
        <Button theme="button">默认按钮</Button>
        <Button theme="button" size="small">小型按钮</Button>
        <br />
        <Button theme="text" size="big">大型按钮</Button>
        <Button theme="text">默认按钮</Button>
        <Button theme="text" size="small">小型按钮</Button>
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