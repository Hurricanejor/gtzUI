<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import {
  ref
} from 'vue'

import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

const Prism = (window as any).Prism;
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const content = ref < string > (null);
    // 异步引入markdown文档
    import(props.path).then(result => {
      // console.log(result.default)
      content.value = result.default
      // 有什么办法能让markdown文档中的代码高亮
      // console.log(Prism.highlight(result.default, Prism.languages.html, 'html'))
    })
    return {
      content
    }
  }
}
</script>
