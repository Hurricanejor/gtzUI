<demo>
Attributes
</demo>
<template>
    <div class="markdown-body" v-html="buttonEvent"></div>
</template>
<script lang="ts">
import {
  ref
} from 'vue'
import buttonEvent from "./buttonEvent.md";
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(props) {
      return {
          buttonEvent
      }
  }
}
</script>