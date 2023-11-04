// setTimeout(() => {
//   fn();
// }, 3000);

// function fn() {
//   console.log('Test');
// }
// let x = 10;
// let y = x + 5;
// console.log(y);

// fn();

// const asyncFunc = function (callback) {
//   setTimeout(() => {
//     callback([{ name: 'lex' }, { name: 'bob' }]);
//   });
// };

// asyncFunc((data) => {});

// const prom = new Promise((resolve, reject) => {
//   resolve();
//   reject();
// });

const myElement = document.querySelector('#id');

function parsArrString({ product_name = '', price = 0 }) {
  return `<ul>
    <li>${product_name}</li>
    <li>${price}</li>
  </ul>`;
}

function putToHtml(arr = []) {
  const strHtml = arr.map((item) => parsArrString(item)).join('');
  myElement.innerHTML = strHtml;
}

function putErrorHtml(err = '') {
  myElement.innerHTML = err;
}

fetch(
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData01.json'
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    putToHtml(data);
  })
  .catch((er) => putErrorHtml(er));

alert('OK!');
