<template>
    <div class="markdown-body" v-html="markText"></div>
</template>
<script lang="ts">
export default {
    props: {
        markText: {
            type: String
        }
    }
}
</script>