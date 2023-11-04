const url =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

function getData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {
    const res = JSON.parse(xhr.response);
    callback(res);
  };
  xhr.send();
}

var goods = [];

function fetchGoods(callback) {
  getData(url, (data) => {
    const goods = data;
    callback(goods);
  });
}

const renderGoodsItem = ({ product_name = '', price = 0 }) => `
  <div class="goods-item">
    <h3>${product_name}</h3>
    <p>${price}</p>
  </div>
  `;

function renderGoodsList(list = []) {
  const goodsList = list.map((item) => renderGoodsItem(item)).join('');
  document.querySelector('.goods-list').innerHTML = goodsList;
}

const getTotalPrice = (list = []) => {
  return list.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
};

fetchGoods(renderGoodsList);
