<demo>
常规用法
</demo>
<template>
    <Switch v-model:value="isOn" />
</template>
<script lang="ts">
import { ref } from "vue"
import Switch from "../../lib/Switch.vue";

export default {
    name: "Switch1Demo",
    components: {
        Switch
    },
    setup(props) {
        const isOn = ref(false);
        return { isOn };
    }
}
</script>