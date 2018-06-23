export const mixin = {
  computed: {
      reversedMixin() {
        return this.computedMixin.split("").reverse().join("");
      },
      countedMixin() {
        return this.computedMixin + ' (' + this.computedMixin.length + ')';
      }
  }
}
