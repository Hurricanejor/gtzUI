<template>
  <div class="markdown-body">
    <h2>Button按钮</h2>
    <p>基础组件，触发业务逻辑时使用。</p>
    <Demo :componentName="Button1Demo"></Demo>
    <Demo :componentName="Button2Demo"></Demo>
    <Demo :componentName="Button3Demo"></Demo>
    <Demo :componentName="Button4Demo"></Demo>
    <Demo :componentName="Button5Demo"></Demo>
    <Demo :componentName="ButtonAttr" :isTable="true"></Demo>
    <Demo :componentName="ButtonEvent" :isTable="true"></Demo>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'
import Demo from "./Demo.vue";
import Button1Demo from "./Button/Button1.demo.vue";
import Button2Demo from "./Button/Button2.demo.vue";
import Button3Demo from "./Button/Button3.demo.vue";
import Button4Demo from "./Button/Button4.demo.vue";
import Button5Demo from "./Button/Button5.demo.vue";
import ButtonAttr from "./Button/ButtonAttr.md.vue";
import ButtonEvent from "./Button/ButtonEvent.md.vue";
export default {
  components: { Demo },
  setup() {
    return { Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo,ButtonAttr,ButtonEvent }
  },
};
</script>
