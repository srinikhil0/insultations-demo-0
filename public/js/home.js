const setupSlidingEffect = () => {
    const productContainers = [...document.querySelectorAll('.product-container')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];

    productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
}

// fetch product cards
const getProducts = (tag) => {
    return fetch('/get-products', {
        method: "post",
        headers: new Headers ({ "Content-Type" : "application/json" }),
        body: JSON.stringify({tag: tag})
    })
    .then(res => res.json())
    .then(data => {
        return data;
    })
}

//create product slider
const createProductSlider = (data, parent, title) => {
    let slideContainer = document.querySelector(`${parent}`);

    slideContainer.innerHTML += `
    <section class="product">
        <h2 class="product-category">${title}</h2>
        <button class="pre-btn"><i class="fa-solid fa-circle-arrow-right"></i></button>
        <button class="nxt-btn"><i class="fa-solid fa-circle-arrow-right"></i></button>
        ${createProductCards(data)}
    </section>
    `
    setupSlidingEffect();
}

const createProductCards = (data, parent) => {
    //here parent is for search product
    let start = '<div class="product-container">';
    let middle = ''; //this will contain card HTML
    let end = '</div>';

    for(let i = 0; i < data.length; i++ ){
       if(data[i].id != decodeURI(location.pathname.split('/').pop())){
        middle += `
        <div class="product-card" onclick="location.href = '/products/${data[i].id}'">
            <div class="product-image">
                <span class="discount-tag">${data[i].discount}% off</span>
                <img src="${data[i].images[0]}" class="product-thumb" alt="">
            </div>
            <div class="product-info" onclick="location.href = '/products/${data[i].id}'">
                <h2 class="product-brand">${data[i].pname}</h2>
                <p class="product-short-des">${data[i].shortDes}</p>
                <span class="price">&#x20B9;${data[i].sellPrice}</span><span class="actual-price">&#x20B9;${data[i].actualPrice}</span>
            </div>
        </div>
        `
       }
    }

    if(parent){
        let cardContainer = document.querySelector(parent);
        cardContainer.innerHTML = start + middle + end;
    } else{
        return start + middle + end;

    }
}

const add_product_to_cart_or_wishlist = (type, product) => {
    let data = JSON.parse(localStorage.getItem(type));
    if(data == null){
        data = [];
    }

    product = {
        item: 1,
        pname: product.pname,
        sellPrice: product.sellPrice,
        size: size || null,
        shortDes: product.shortDes,
        image: product.images[0]
    }

    data.push(product);
    localStorage.setItem(type, JSON.stringify(data));
    return 'added';
}