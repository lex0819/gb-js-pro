const BASE_URL =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const GET_GOODS_ITEMS = `${BASE_URL}catalogData.json`;
const GET_BASKET_GOODS_ITEMS = `${BASE_URL}getBasket.json`;

function init() {
  const app = new Vue({
    el: '#app',
    data: {
      items: [],
      search: '',
    },
    mounted() {
      fetch(GET_GOODS_ITEMS)
        .then((res) => res.json())
        .then((data) => {
          this.items = data;
        });
    },
    methods: {},

    computed: {
      calculatePrice() {
        return this.searchItems.reduce((prev, { price }) => {
          return prev + price;
        }, 0);
      },
      searchItems() {
        return this.items.filter((item) => {
          const regExp = new RegExp(this.search, 'gi');
          return regExp.test(item.product_name);
        });
      },
    },
  });
}

window.onload = init();
