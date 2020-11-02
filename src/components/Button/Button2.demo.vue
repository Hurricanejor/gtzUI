<demo>
    按钮尺寸
</demo>
<template>
    <div>
        <div class="gtz-button-demo">
            <Button size="big">大型按钮</Button>
            <Button>默认按钮</Button>
            <Button size="small">小型按钮</Button>
        </div>
        <div class="gtz-button-demo">
            <Button theme="button" size="big">大型按钮</Button>
            <Button theme="button">默认按钮</Button>
            <Button theme="button" size="small">小型按钮</Button>
        </div>
        <div class="gtz-button-demo">
        <Button theme="text" size="big">大型按钮</Button>
        <Button theme="text">默认按钮</Button>
        <Button theme="text" size="small">小型按钮</Button>
        </div>
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