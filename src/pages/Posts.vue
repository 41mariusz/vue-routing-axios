<template>
  <main-layout>
    <div>
  <div v-if="posts && posts.length">
    <div id="ramka" v-for="post of posts" v-bind:key="post.id">
        <p><span id="id">[{{post.id}}]</span> <strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
        <p>author <span id="author"><i>{{users.find(e => e.id === post.userId).name}}</i></span></p>
    </div>
  </div>
</div>
  </main-layout>
</template>

<style>
div#ramka {
    border-width: 1px;
    border-style: dashed;
    border-color: yellowgreen;
    padding: 3px;
    margin: 3px;
  }
  span#author {
    color: #1100ff;
    font-weight: bold;
  }
  span#id {
    color: red;
    font-weight: bold;
  }
</style>

<script>
  import MainLayout from '../layouts/Main.vue'
  import axios from 'axios'

  export default {
    name: 'app',
  data () {
    return {
      id: null,
      postBody: null,
      postTitle: null,
      users: [],
      posts: []
    }
  },
  created() {
    this.$http.get('posts').then((response) => {
      this.posts = response.data
    }),
    this.$http.get('users').then((response) => {
      this.users = response.data
    })
    .catch((e) => {
      console.error(e)
    })
  },
    components: {
      MainLayout
    }
  }
</script>
