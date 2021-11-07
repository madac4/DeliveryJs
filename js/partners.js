const cardsRestaurants = document.querySelector('.cards-restaurants');
const renderPartner = (items) => {
    const pageItems = items.map(item => {
        return `
          <a href="restaurant.html" class="card card-restaurant">
            <img src="${item.image}" alt="image" class="card-image" />
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

    cardsRestaurants.insertAdjacentHTML('afterbegin', pageItems);

}

const partners = fetch('./db/partners.json').then(response => response.json()).then(data => renderPartner(data));