const BASE_URL =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const GET_GOODS_ITEMS = `${BASE_URL}catalogData.json`;
const GET_BASKET_GOODS_ITEMS = `${BASE_URL}getBasket.json`;

function init() {
  Vue.component('cart-box', {
    props: {
      cartitems: Array,
    },
    template: `<div class="cart-box">
                  <div class="cadr-title">
                    <h3>Корзина</h3>
                    <button v-on:click="$emit('close-cart')">x</button>
                  </div>
                  <div class="cart-items">
                    <div class="cart-item"
                    v-for="item in cartitems" :key="item.id_product">
                      <div>{{ item.product_name }} </div>
                      <div>{{ item.price }}руб. </div>
                      <div>{{ item.count }} </div>
                      <div>{{ item.price * item.count }}руб.</div>
                    </div>
                    <div class="cart-total">Итого:  {{totalSumCart}}руб.</div>
                  </div>
                </div>`,

    computed: {
      totalSumCart() {
        return this.cartitems.reduce((accum, { price, count }) => {
          return accum + price * count;
        }, 0);
      },
    },
  });

  Vue.component('good', {
    props: {
      good: Object,
    },
    template: `<div class="goods-item">
                <h3>{{ good.product_name }}</h3>
                <p>{{ good.price }}руб.</p>
              </div>`,
  });

  const app = new Vue({
    el: '#app',
    data: {
      items: [],
      cartItems: [
        {
          id_product: 123,
          product_name: 'Ноутбук',
          price: 45600,
          count: 2,
        },
      ],
      search: '',
      isVisibleCard: false,
    },
    mounted() {
      setTimeout(() => {
        fetch(GET_GOODS_ITEMS)
          .then((res) => res.json())
          .then((data) => {
            this.items = data;
          }),
          5000;
      });
    },
    methods: {
      setVisibleCard() {
        this.isVisibleCard = !this.isVisibleCard;
      },
    },

    computed: {
      calculatePrice() {
        return this.searchItems.reduce((accum, { price }) => {
          return accum + price;
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
