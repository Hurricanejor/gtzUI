<template>
    <div>
        Modal组件
        <Button @click="toggleModal">Toggle</Button>
        <Modal :visiable="x" @update:visiable="x = $event"></Modal>
    </div>
</template>
<script lang="ts">
import Modal from "../lib/Modal.vue";
import Button from "../lib/Button.vue";
import { ref } from 'vue';
export default {
    components: {
        Modal,
        Button
    },
    setup(props) {
        let x = ref(false);
        const toggleModal = () => {
            x.value =!x.value;
        }
        return {
            x,toggleModal
        }
    }
}
</script>