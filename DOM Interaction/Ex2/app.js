new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
          alert: function() {
            return alert('alert');
          },
          changeValue: function() {
            return this.value = event.target.value;
          }
        }
    });
