<template>
    <div class="markdown-body">
        
    </div>
</template>
<script lang="ts">
// import md from "../markdown/intro.md"
import 'prismjs'
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism;
export default {
    data() {
        return {
            // md
        }
    },
    setup() {
        return {
            Prism
        }
    }
}
</script>