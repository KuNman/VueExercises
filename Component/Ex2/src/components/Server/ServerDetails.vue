<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select server</p>
        <div v-if="server">
          <p>Id: {{ server.id }}, status: {{ server.status }}</p>
          <button @click="resetStatus">Back to normal status</button>
        </div>
    </div>

</template>

<script>
import {eventBus} from '../../main'
export default {
  data: function() {
    return {
      server: null
    }
  },
  methods: {
    resetStatus() {
      this.server.status = 'Normal';
    }
  },
  created() {
    eventBus.$on('serverChoosed', (server) => {
      this.server = server;
    })
  }
}

</script>

<style>

</style>
