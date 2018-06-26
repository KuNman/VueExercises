<template>
  <div>
    <h3>Edit the User</h3>
      A: {{ $route.query.a }}
      C: {{ $route.query.c }}
      <hr />
      <button class="btn btn-primary" @click="confirmed = !confirmed">Confirm</button>
      <div style="height: 700px"></div>
      <p id="someId">
        Some text
      </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next) {
      if(this.confirmed){
        next();
      } else {
        if(confirm('U sure?')) {
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>
