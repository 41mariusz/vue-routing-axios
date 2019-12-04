<template>
  <main-layout>
    <div>
    <div v-if="users && users.length">
    <div id="ramka" v-for="user of users" v-bind:key="user.id">
        <p><span id="id">[{{user.id}}]</span> {{user.name}}</p>
        <p><a :href="'/user/posts/' + user.id">@{{user.username}}</a></p>
        <p>{{user.email}}</p>
        <p>Address: <strong>{{user.address.street}}</strong></p>
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
