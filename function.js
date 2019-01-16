
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
        .join('');}

fetch('https://ma-cats-api.herokuapp.com/api/cats?per_page=12')
    .then(
        function(response) {
            response.json().then(function(cats) {
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
let loader= document.getElementById('loader');
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
   if(event.target.closest('.dd-menu')){
  console.log(event.target.innerText); 
   };
});

