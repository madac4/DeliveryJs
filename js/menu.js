const restaurant = 'tanuki'

const renderPartner = (item) => {
    console.log(item);
}

const partners = fetch(`./db/${restaurant}.json`).then(response => response.json()).then(data => renderPartner(data)).catch(err => console.log(err));