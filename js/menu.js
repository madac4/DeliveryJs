const cardsMenu = document.querySelector('.cards-menu');
const restaurant = JSON.parse(localStorage.getItem('restaurant'));
const sectionHeading = document.querySelector('.section-heading');
const restaurantTitle = sectionHeading.querySelector('.restaurant-title');
const rating = sectionHeading.querySelector('.rating');
const price = sectionHeading.querySelector('.price span');
const category = sectionHeading.querySelector('.category');

restaurantTitle.textContent = restaurant.name;
rating.textContent = restaurant.stars;
price.textContent = restaurant.price;
category.textContent = restaurant.kitchen;

const renderMenu = (items) => {
    const pageItems = items.map(item => {
        return `
          <div class="card">
            <img src="${item.image}" alt="${item.name}" class="card-image" />
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title card-title-reg">${item.name}</h3>
              </div>
              <div class="card-info">
                <div class="ingredients">${item.description}</div>
              </div>
              <div class="card-buttons">
                <button class="button button-primary button-add-cart">
                  <span class="button-card-text">В корзину</span>
                  <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">${item.price} ₽</strong>
              </div>
            </div>
          </div>
    `
    })

    cardsMenu.insertAdjacentHTML('afterbegin', pageItems);

}
if (restaurant) {
    fetch(`./db/${restaurant.products}`).then(response => response.json()).then(data => renderMenu(data)).catch(err => console.log(err));
} else {
    window.location.href = '/';
}