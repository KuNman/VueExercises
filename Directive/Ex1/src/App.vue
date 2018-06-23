<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <div v-leaved:mouseleave="leaved">Sunt ea irure ad Lorem voluptate quis Lorem sint nostrud qui ut. Voluptate fugiat tempor consectetur sunt ex minim cupidatat voluptate officia et tempor do dolore sint elit cupidatat. Dolore anim proident ad eu dolore mollit reprehenderit sunt excepteur elit in id aliquip. Sint ipsum eu deserunt in id in laboris mollit proident ipsum esse ipsum est duis id tempor veniam.</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
          leaved: {
              bind(el, binding) {
                  el.addEventListener(binding.arg, binding.value);
              }
          }
      },
      methods: {
          leaved() {
              alert('Dont leave me!');
          }
      }
    }
</script>

<style>
</style>
