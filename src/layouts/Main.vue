<template>
  <div class="container">
    <div>
        <v-link href="/">Home</v-link> | 
        <v-link href="/posts">Posts</v-link> |
        <v-link href="/users">Users</v-link>
    </div>

    <slot></slot>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
