<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data() {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 100},
          { id: 2, name: 'Apple', price: 150},
          { id: 3, name: 'Google', price: 180},
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>
