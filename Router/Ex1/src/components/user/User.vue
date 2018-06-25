<template>
  <div>
    <h1>The User Page</h1>
    <button @click="backToHome" class="btn btn-primary">Go to home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    methods: {
      backToHome() {
        this.$router.push('/');
      }
    }
  }
</script>
