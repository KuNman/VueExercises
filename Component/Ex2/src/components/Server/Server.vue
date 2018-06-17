<template>
  <li class="list-group-item"
      style="cursor: pointer"
      @click="serverChoosed">
        Server #{{ server.id }}
  </li>
</template>
<script>
import {eventBus} from '../../main'

export default {
  props: ['server'],
  methods: {
    serverChoosed() {
      eventBus.$emit('serverChoosed', this.server)
    }
  }
}
</script>
<style>
</style>
