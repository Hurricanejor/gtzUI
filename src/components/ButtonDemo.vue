<template>
  <article class="markdown-body">
  <h2>Button按钮</h2>
   
  <p>基础组件，触发业务逻辑时使用。</p>
  <h2>代码示例</h2>
  <Demo :componentName="Button1Demo"></Demo>
  <Demo :componentName="Button2Demo"></Demo>
  <Demo :componentName="Button3Demo"></Demo>
  <Demo :componentName="Button4Demo"></Demo>
  <Demo :componentName="Button5Demo"></Demo>
  </article>
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button/Button1.demo.vue";
import Button2Demo from "./Button/Button2.demo.vue";
import Button3Demo from "./Button/Button3.demo.vue";
import Button4Demo from "./Button/Button4.demo.vue";
import Button5Demo from "./Button/Button5.demo.vue";
export default {
  components: { Demo },
  setup() {
    return { Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo }
  },
};
</script>
