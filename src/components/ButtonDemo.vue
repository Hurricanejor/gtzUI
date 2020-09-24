<template>
    <div>
        I am ButtonDemo.vue
        <Button @click="onClick"></Button>
    </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';

export default {
    components: { Button },
    setup() {
        const onClick = (() => {
            // 此时能输出，是因为VUE将事件直接传到了根元素上
            console.log("HI");
        });
        return {onClick}
    }
}
</script>
