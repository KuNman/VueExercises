<template>
  <div>
    <p>Counter is: {{ divideCounter }}</p>
    <p>Clicks is: {{ stringCounter }}</p>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
          ...mapGetters([
          'divideCounter',
          'stringCounter'
        ]),
      }
    }
</script>
