<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="app = 'app-blue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="app = 'app-green'" class="btn btn-success">Load Green Template</button>
                <button @click="app = 'app-red'" class="btn btn-danger">Load Red Template</button>
                <hr>
                <components :is="app">
                  <p>Active component is {{app}}</p>
                </components>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
          return {
            app: 'app-blue'
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
