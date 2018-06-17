<template>
  <div class="row">
    <quote v-for="(quote, i) in quotes" @click.native="deleteQuote(i)">{{ quote }}</quote>
  </div>
</template>
<script>
import Quote from './Quote.vue';

export default {
  props: ['quotes'],
  methods: {
    deleteQuote(i) {
      this.$emit('deleteQuote', i);
    }
  },
  components: {
    Quote
  }
}
</script>
<style></style>
