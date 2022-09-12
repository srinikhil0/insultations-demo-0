const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="../"><img src="../img/insultations-logo-sample-0.png" class="brand-logo" alt=""></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                    <img src="../img/user.png" id="user-img" alt="">
                    <div class = "login-logout-popup hide">
                        <p class="account-info">Login as, name</p>
                        <button class="btn" id="user-btn">Log Out</button>
                    </div>
                </a>
                <a href="/cart"><img src="../img/shopping-cart-empty-side-view.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="../" class="link">home</a></li>
            <li class="link-item"><a href="../birthday_section.html" class="link">birthday</a></li>
            <li class="link-item"><a href="../a.html" class="link">Students arena</a></li>
            <li class="link-item"><a href="../working_people.html" class="link">working people</a></li>
            <li class="link-item"><a href="../accessories.html" class="link">accessories</a></li>
        </ul>    
    `;
}

createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        //means user is logged in
        popuptext.innerHTML = `log in as, ${user.pname}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        //user is logged out
        popuptext.innerHTML = 'login to place order';
        actionBtn.innerHTML = 'login';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}

// search box

const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = `/search/${searchBox.value}`
    }
})