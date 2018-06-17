<template>
    <div class="col-xs-12 col-sm-6">
      <p v-if="!server">Please select a Server</p>
      <p v-else>Server : {{server.id}}, status {{server.status}}</p>
      <button @click="resetStatus">Reset status</button>
    </div>

</template>

<script>
import { serverBus } from '../../main.js'

export default {
  data: function() {
    return {
      server: false
    }
  },
  created() {
    serverBus.$on('serverSelected', (server) => {
      this.server = server;
    });
  },
  methods: {
    resetStatus() {
        this.server.status = 'Normal';
    }
  }
}
</script>

<style>

</style>
