<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
import Home from './pages/Home.vue'
import Doc from './pages/Doc.vue'

export default {
    name: 'App',
    components: {
        Home,
        Doc
    }
}
</script>
