<template>
  <div class="markdown-body">
    <h2>Switch 组件示例</h2>
    <Demo :componentName="Switch1Demo"></Demo>
    <Demo :componentName="Switch2Demo"></Demo>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch1Demo from "./Switch/Switch1.demo.vue";
import Switch2Demo from "./Switch/Switch2.demo.vue";
import Demo from "./Demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Switch1Demo,Switch2Demo };
  }
};
</script>