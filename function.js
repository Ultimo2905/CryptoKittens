const cats = [
  {
    "id": 1,
    "name": "simon",
    "category": "fast",
    "price": 100,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495636.svg",
    "available": true,
    "created_at": "2018-02-06T23:08:49.179Z",
    "updated_at": "2018-02-06T23:08:49.179Z"
  },
  {
    "id": 2,
    "name": "felix",
    "category": "fast",
    "price": 10000,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495625.svg",
    "available": true,
    "created_at": "2018-02-06T23:08:49.186Z",
    "updated_at": "2018-02-06T23:08:49.186Z"
  },
  {
    "id": 3,
    "name": "luna",
    "category": "slow",
    "price": 2000,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495622.svg",
    "available": true,
    "created_at": "2018-02-06T23:08:49.190Z",
    "updated_at": "2018-02-06T23:08:49.190Z"
  },
  {
    "id": 4,
    "name": "oliver",
    "category": "fast",
    "price": 9000,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495619.svg",
    "available": true,
    "created_at": "2018-02-06T23:08:49.193Z",
    "updated_at": "2018-02-06T23:08:49.193Z"
  },
  {
    "id": 5,
    "name": "oreo",
    "category": "middle",
    "price": 100,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495616.svg",
    "available": true,
    "created_at": "2018-02-06T23:08:49.197Z",
    "updated_at": "2018-02-06T23:08:49.197Z"
  },
  {
    "id": 6,
    "name": "molly",
    "category": "slow",
    "price": 3000,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495613.svg",
    "available": true,
    "created_at": "2018-02-06T23:08:49.201Z",
    "updated_at": "2018-02-06T23:08:49.201Z"
  },
  {
    "id": 7,
    "name": "simba",
    "category": "fast",
    "price": 11000,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495592.svg",
    "available": true,
    "created_at": "2018-02-06T23:08:49.205Z",
    "updated_at": "2018-02-06T23:08:49.205Z"
  },
  {
    "id": 8,
    "name": "jack",
    "category": "middle",
    "price": 5000,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495579.svg",
    "available": true,
    "created_at": "2018-02-06T23:08:49.209Z",
    "updated_at": "2018-02-06T23:08:49.209Z"
  },
  {
    "id": 10,
    "name": "loki",
    "category": "fast",
    "price": 20000,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/336916.svg",
    "available": true,
    "created_at": "2018-02-06T23:08:49.216Z",
    "updated_at": "2018-02-06T23:08:49.216Z"
  },
  {
    "id": 11,
    "name": "milo",
    "category": "slow",
    "price": 3500,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/336916.svg",
    "available": true,
    "created_at": "2018-02-06T23:08:49.220Z",
    "updated_at": "2018-02-06T23:08:49.220Z"
  },
  {
    "id": 13,
    "name": "Homer",
    "category": "sub-zero",
    "price": 91233,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/117910.svg",
    "available": true,
    "created_at": "2018-02-10T10:40:52.425Z",
    "updated_at": "2018-02-10T10:40:52.425Z"
  },
  {
    "id": 14,
    "name": "Johnathon",
    "category": "sub-zero",
    "price": 55740,
    "img_url": "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/1000.svg",
    "available": true,
    "created_at": "2018-02-10T10:40:52.437Z",
    "updated_at": "2018-02-10T10:40:52.437Z"
  }
];


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.CatsCard').insertAdjacentHTML("afterbegin", renderKittens(cats));
});

// Функции вывода карточек котиков(Форма)
function renderKitten(cat) {
  return `
    <div class="information_card">
        <div class="kitten_card" style="background-color: ${getRandomColor()}">
          <div class="price">
            <span class="text_price">Price: ${cat.price + '  ua'}</span>
          </div>
            <img src="${cat.img_url}"class="kitten_img">
        </div>
        <div class="footer_cat">
              <div class="kitten_information">
                  <span>${cat.id}</span>
                  <span>${cat.name}</span>
              </div>
              <div class="line">
              </div>
             <div class="kitten_information_category">
               <span>${cat.category}</span> 
             </div>
        </div>
    </div>
`;
}

// Функции вывода карточек котиков(Вывод из бд)
function renderKittens(cats) {
  return cats.map(cat => renderKitten(cat))
    .join('');
}

fetch('https://ma-cats-api.herokuapp.com/api/cats?per_page=15')
  .then(
    function (response) {
      response.json().then(function (cats) {
        setTimeout(function () {
          document.querySelector('.CatsCard').insertAdjacentHTML("afterbegin", renderKittens(cats.cats));
          //                     loader.classList.remove('loader_opened');
        }, 2000);

      });
    }
  );



// Функция для рандомного цвета фона в табличках котиков
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let loader = document.getElementById('loader');
loader.classList.add('loader_opened');

// Dropdown 
document.addEventListener('click', (event) => {
  const target = event.target;

  if (target.matches('.dd-button')) {
    target.nextElementSibling.classList.toggle('visible');
  }

  const clickableDropdown = target.closest('.dropdown');

  [...document.querySelectorAll('.dropdown')].forEach((currentDropdown) => {
    if (currentDropdown !== clickableDropdown) {
      currentDropdown.querySelector('.dd-menu').classList.remove('visible');
    }
  });
  if (event.target.closest('.dd-menu')) {
    console.log(event.target.innerText);
  };
});

