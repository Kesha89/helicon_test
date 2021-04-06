import '../css/main.css'

let shopItems = {
    product_1: {
        'name': 'Продукт 1',
        'price': '1200'
    },
    product_2: {
        'name': 'Продукт 2',
        'price': '1400'
 
    },
    product_3: {
        'name': 'Продукт 3',
        'price': '1600'
    },
    product_4: {
        'name': 'Продукт 4',
        'price': '1800'
    },
    product_5: {
        'name': 'Продукт 5',
        'price': '1300'
    },
    product_6: {
        'name': 'Продукт 6',
        'price': '2600'
    },
}

init();

const cart = {
    products: {},
    countProduct: 0,
    totalPrice:0,
    addProduct:function(key, product) {
        this.products[key] = product;
        this.renderTotalPrice();
        this.renderProductsList();
    },
    computeTotaPrice:function(){
        this.totalPrice = 0; 
        this.countProduct = 0; 
        for (let product in this.products) {
            this.countProduct += 1
            this.totalPrice += Number(this.products[product].price);
        }
    },
    renderTotalPrice: function () {
        this.computeTotaPrice();
        document.querySelector('.total-price').innerHTML = this.totalPrice;
        document.querySelector('.nav-item .badge').innerHTML = this.countProduct;
    },
    renderProductsList: function () {
        const productsList = document.querySelector('.cart__products-list');
        let productsTemplate = '';

        for (let product in this.products){
            productsTemplate += `<li>${this.products[product].name}</li>`;      
        }

        productsList.innerHTML = productsTemplate;
    },
}

const buttons = document.querySelectorAll('.card-body .btn-primary');
buttons.forEach(function(element){
    element.addEventListener('click',function(event){
        event.preventDefault();
        const productKey = event.path[1].getAttribute('data-key');
        event.target.disabled = true;
        cart.addProduct(productKey, shopItems[productKey]);
    })
});

function init() {
    let catalogContainer=document.querySelector("#catalog");
    let cardsTemplate = "";

    for (let product in shopItems)
        cardsTemplate += createCard(product,shopItems[product].name,shopItems[product].price);

    catalogContainer.innerHTML = cardsTemplate;
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function createCard(key,name,price) { 
return `
<div class="card" style="width: 18rem;">
          <img src="css/img/1.jpg" class="card-img-top" alt="...">
          <div class="card-body" data-key="${key}">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button href="#" class="btn btn-primary">В Корзину</button>
            <button type="button" class="btn btn-secondary">${numberWithSpaces(price)} руб</button>
          </div>
        </div>
`;
}


    

   
    

//увеличение количества товаров ДЭН

