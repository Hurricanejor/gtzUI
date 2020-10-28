<template>
    <button class="gtz-button" :class="{'gtz-checked': checked}" @click="toggle">
        <span></span>
    </button>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
    name: "Switch",
    props: {
        value: Boolean
    },
    setup(props, content) {
        const checked = ref(false);
        const toggle = (() => {
            checked.value = !checked.value;
            // 相当于Vue2中的this.$emit()方法
            content.emit("update:value", !props.value);
            
        })
        return {checked,toggle}
    }
}
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$disbc:  #bfbfbf;
$combc: #31588a;
.gtz-button {
  height: $h; width: $h * 2; border: none; background: $disbc; border-radius: $h/2; position: relative;
  > span {
    position: absolute; top: 2px; left: 2px; height: $h2; width: $h2; background: white; border-radius: $h2 / 2; transition: all 250ms;
  }
  &.gtz-checked { background: $combc;
    > span { left: calc(100% - #{$h2} - 2px); }
  }
  &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.gtz-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
</style>