<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 10, duration:10})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
          ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
          ])
        }
    }
</script>
