<demo>
Attributes
</demo>
<template>
    <div class="markdown-body" v-html="buttonAttr"></div>
</template>
<script lang="ts">
import {
  ref
} from 'vue'
import buttonAttr from "./buttonAttr.md";
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(props) {
      return {
          buttonAttr
      }
  }
}
</script>