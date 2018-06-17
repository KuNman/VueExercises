<template>
    <div class="container">
        <bar :quotesAmount="quotes.length" :maxQuotes="maxQuotes"></bar>
        <newQuote @quoteAdded="newQuote"></newQuote>
        <quotesGrid :quotes="quotes" @deleteQuote="deleteQuote"></quotesGrid>
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="alert alert-info">
              Click on Quote to delete it!
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import QuotesGrid from './components/QuotesGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Bar from './components/Bar.vue';

    export default {
        data: function () {
          return {
            quotes: ['Demo quote'],
            maxQuotes: 10,
          }
        },
        methods: {
          newQuote(quote) {
            if(this.quotes.length >= this.maxQuotes) {
              return alert('Maximum amount of quotes!')
            }
            this.quotes.push(quote)
          },
          deleteQuote(i) {
            this.quotes.splice(i, 1)
          }
        },
        components: {
          'quotesGrid': QuotesGrid,
          'newQuote' : NewQuote,
          'bar' : Bar
        }
    }
</script>

<style>
</style>
