const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="../img/insultations-logo-sample-0.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Birthday</li>
                    <li><a href="#" class="footer-link">cakes</a></li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">cards</a></li>
                    <li><a href="#" class="footer-link">pens</a></li>
                    <li><a href="#" class="footer-link">frames</a></li>
                    <li><a href="#" class="footer-link">clothes</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">students</li>
                    <li><a href="#" class="footer-link">cakes</a></li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">cards</a></li>
                    <li><a href="#" class="footer-link">pens</a></li>
                    <li><a href="#" class="footer-link">frames</a></li>
                    <li><a href="#" class="footer-link">clothes</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Insultations is a new way to greet our beloved one. With our gifts you made can create a moment, 
        which will be remembered forever and you can laugh by remembering these insults in any dimensional future<br><br>
        Insultations never meant to hurt someone, it is to bring the new way of making memories with the sweet little insults.
        
        </p>
        <p class="info">support emails - help@insultations.com, customersupport@insultations.com</p>
        <p class="info">telephone - +91 9876543210</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">insultations, best way to greet one</p>
    `;
}

createFooter();