<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <input type="text" v-model="input"/>
                <p>
                  {{ input | reverse }}
                </p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>
                  {{ input | count }}
                </p>
                <hr />

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <input type="text" v-model="computed"/>
                <p>
                  {{ reversed }}
                </p>
                <p>
                  {{ counted }}
                </p>
                <hr />

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <input type="text" v-model="computedMixin"/>
                <p>
                  {{ reversedMixin }}
                </p>
                <p>
                  {{ countedMixin }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    import { mixin } from './mixin';
    export default {
      mixins: [mixin],
      data() {
        return {
          input : '',
          computed : '',
          computedMixin : ''
        }
      },
      filters: {
        reverse(value) {
          return value.split("").reverse().join("");
        }
      },
      computed: {
          reversed() {
            return this.computed.split("").reverse().join("");
          },
          counted() {
            return this.computed + ' (' + this.computed.length + ')';
          }
      }
    }
</script>

<style>
</style>
