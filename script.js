const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

//сразу распакуем item на title и price - деструктуризация
//чтоб удобнее было потом вызывать эту функцию
//возвращать строку можно без return
const renderGoodsItem = ({ title = '', price = 0 }) => `
  <div class="goods-item">
    <h3>${title}</h3>
    <p>${price}</p>
  </div>
  `;

const renderGoodsList = (list = []) => {
  // возвращает массив строк
  // let goodsList = list.map((item) => renderGoodsItem(item));

  //поставится запятая после каждого элемента
  //document.querySelector('.goods-list').innerHTML = goodsList;

  //убираем запятую императивно в цикле и соединяем массив в строку
  // let strHtml = '';
  // for (let index = 0; index < goodsList.length; index++) {
  //   strHtml += goodsList[index];
  // }
  // document.querySelector('.goods-list').innerHTML = strHtml;

  //убираем запятую декларативно ф-ция join('') с пустым разделителем соединит все строки массива в одну строку
  // возвращает одну строку
  let goodsList = list.map((item) => renderGoodsItem(item)).join('');
  document.querySelector('.goods-list').innerHTML = goodsList;
};

const getTotalPrice = (list = []) => {
  return list.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
};

renderGoodsList(goods);

debugger;
