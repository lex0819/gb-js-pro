var app = new Vue({
  el: '#app',
  data: {
    message01: 'Привет, Vue!',
    message02: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
    seen: true,
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' },
    ],
    message03: 'Rotate me, please!',
    message04: 'Enter your name',
    price: 300,
    count: 0,
  },
  methods: {
    reverseMessage: function () {
      this.message03 = this.message03.split('').reverse().join('');
    },
  },
  computed: {
    total: function () {
      return (this.total = this.price * this.count);
    },
  },
});
