<template>
  <div>
    <h3>Some User Details</h3>
    <p>
      Loaded user : {{ $route.params.id }}
    </p>
    <router-link
    tag="button"
    class="btn btn-primary"
    :to="link"
    >Edit</router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        link: {
            name: 'edit',
            params: { id: this.$route.params.id },
            query: {a: 'b', c: 10},
            hash: '#someId'
        }
      }
    }
  }
</script>
