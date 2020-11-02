<template>
    <div>
        Modal组件
        <Button @click="toggleModal">Toggle</Button>
        <Modal v-model:visiable="x" :ok="fn1" :no="fn2" :closeOnOverlay="false"></Modal>
    </div>
</template>
<script lang="ts">
import Modal from "../lib/Modal.vue";
import Button from "../lib/Button.vue";
import ModalDemo1 from "../components/Modal/Modal1.demo.vue";
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
        const fn1 = () => {
            console.log("确定事件")
        }
        const fn2 = () => {
            console.log("取消事件")
        }
        return {
            x,toggleModal,fn1,fn2
        }
    }
}
</script>