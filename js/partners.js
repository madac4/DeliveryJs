const cardsRestaurants = document.querySelector('.cards-restaurants');

const renderPartner = (items) => {
    const partnersItems = items.map(item => {
        return `<a href="restaurant.html" class="card card-restaurant" data-products="${item.products}">
            <img src="${item.image}" alt="${item.name}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${item.name}</h3>
                    <span class="card-tag tag">${item.time_of_delivery} мин</span>
                </div>
                <div class="card-info">
                    <div class="rating">
                        ${item.stars}
                    </div>
                    <div class="price">От ${item.price} ₽</div>
                    <div class="category">${item.kitchen}</div>
                </div>
            </div>
        </a>
        `
    })
    cardsRestaurants.insertAdjacentHTML('afterbegin', partnersItems);

    const restaurantsItems = document.querySelectorAll('.card-restaurant');
    restaurantsItems.forEach((restaurant, index) => {
        restaurant.addEventListener('click', (event) => {
            event.preventDefault();
            if (!localStorage.getItem('user')) {
                modalAuth.classList.add('is-open');
            } else {
                localStorage.setItem('restaurant', JSON.stringify(items[index]));
                window.location.href = '/restaurant.html';
            }
        })
    })
}



const partners = fetch('./db/partners.json').then(response => response.json()).then(data => renderPartner(data));