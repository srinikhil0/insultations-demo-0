//create small product cards
const createSmallCards = (data) => {
    return `
    <div class="sm-product">
        <img src="${data.image}" alt="" class="sm-product-img">
        <div class="sm-text">
            <p class="sm-product-name">${data.pname}</p>
            <p class="sm-des">${data.shortDes}</p>
        </div>
        <div class="item-counter">
            <button class="counter-btn decrement">-</button>
            <p class="item-count">${data.item}</p>
            <button class="counter-btn increment">+</button>
        </div>
        <p class="sm-price" data-price = "${data.sellPrice}">&#x20B9;${data.sellPrice * data.item}</p>
        <button class="sm-delete-btn"><img src="img/close.png" alt=""></button>
    </div>
    `;
}

let totalBill = 0;

const setProducts = (pname) => {
    const element = document.querySelector(`.${pname}`);
    let data = JSON.parse(localStorage.getItem(pname));
    if(data == null){
        element.innerHTML = `<img src="img/empty-cart.png" class="empty-img" alt="">`;
    } else{
        for(let i = 0; i < data.length; i++){
            element.innerHTML += createSmallCards(data[i]);
            if(pname == 'cart'){
                totalBill += Number(data[i].sellPrice * data[i].item);
            }
            updateBill();
        }
    }
    setupEvents(pname);
}

const updateBill = () => {
    let billPrice = document.querySelector('.bill');
    billPrice.innerHTML = `&#x20B9;${totalBill}`;
}

const setupEvents = (pname) => {
    //setup counter event
    const counterMinus = document.querySelectorAll(`.${pname} .decrement`);
    const counterPlus = document.querySelectorAll(`.${pname} .increment`);
    const counts = document.querySelectorAll(`.${pname} .item-count`);
    const price = document.querySelectorAll(`.${pname} .sm-price`);
    const deleteBtn = document.querySelectorAll(`.${pname} .sm-delete-btn`);

    let product = JSON.parse(localStorage.getItem(pname));

    counts.forEach((item, i) => {
        let cost = Number(price[i].getAttribute('data-price'));

        counterMinus[i].addEventListener('click', () => {
            if(item.innerHTML > 1){
                item.innerHTML--;
                totalBill -= cost;
                price[i].innerHTML = `&#x20B9;${item.innerHTML * cost}`;
                if(pname == 'cart'){updateBill()}
                product[i].item = item.innerHTML;
                localStorage.setItem(pname, JSON.stringify(product));
            }
        })
        counterPlus[i].addEventListener('click', () => {
            if(item.innerHTML < 9){
                item.innerHTML++;
                totalBill += cost;
                price[i].innerHTML = `&#x20B9;${item.innerHTML * cost}`;
                if(pname == 'cart'){updateBill()}
                product[i].item = item.innerHTML;
                localStorage.setItem(pname, JSON.stringify(product));
            }
        })
    })

    deleteBtn.forEach((item, i) => {
        item.addEventListener('click', () => {
            product = product.filter((data, index) => index != i);
            localStorage.setItem(pname, JSON.stringify(product));
            location.reload();
        })
    })
}

setProducts('cart');
setProducts('wishlist');