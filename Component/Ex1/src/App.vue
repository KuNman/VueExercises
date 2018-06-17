<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <app-list></app-list>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-details></app-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import List from './List.vue';
import Details from './Details.vue';

export default {
  components: {
    'app-header' : Header,
    'app-footer' : Footer,
    'app-list'   : List,
    'app-details' : Details
  }
}
</script>

<style>

</style>
