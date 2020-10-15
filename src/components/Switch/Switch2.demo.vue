<template>
    <div class="demo">
        <Switch v-model:value="isOn" disabled />
    </div>
</template>
<script lang="ts">
import { ref } from "vue"
import Switch from "../../lib/Switch.vue";
export default {
    components: {
        Switch
    },
    setup(props) {
        const isOn = ref(false);
        return { isOn };
    }
}
</script>