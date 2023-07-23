let emailMenu           = document.querySelector('.navbar-email');
let desktopMenu         = document.querySelector('.desktop-menu');
let iconMenuMobile      = document.querySelector('.menu');
let mobileMenu          = document.querySelector('.mobile-menu');
let iconShopping        = document.querySelector('.navbar-shopping-cart');
let asideShopping       = document.querySelector('.product-detail');
let divcardscontainer   = document.querySelector('.cards-container')
let productDetailLeft   = document.querySelector('.product-detail-left')
let productDetailClose  = document.querySelector('.product-detail-close')
let myordercontentContainer = document.querySelector('.my-order-content')
let countCarrito        = document.querySelector('.navbar-shopping-cart div')
let totalCarrito        = document.querySelector('.total')
let modal               = document.querySelector('.modal')
let cerrarModal         = document.querySelector('.boton-modal')
let productImageInfor   = document.querySelector('.product-detail-left > img:nth-child(2)')
let labelPriceInfo      = document.querySelector('.product-info-left p:nth-child(1)')
let labelNameInfo       = document.querySelector('.product-info-left p:nth-child(2)')
let labelInforInfo      = document.querySelector('.product-info-left p:nth-child(3)')
let buttonInfo          = document.querySelector('.add-to-cart-button')
let productosEnCarrito  = []
let productoACarrito    = []

//countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
totalCarrito.innerText = '$10,890.00'

emailMenu.addEventListener('click', toggleMenu);
iconMenuMobile.addEventListener('click', toggleMenuMobile);
iconShopping.addEventListener('click', toggleAsideShopping)
productDetailClose.addEventListener('click',closeProductDetail)
buttonInfo.addEventListener('click', butonClick)
cerrarModal.addEventListener('click', closeModal)


function butonClick(){
    agregarCarrito(productoACarrito)
}
function toggleMenu(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
    
}

function toggleAsideShopping(){
    productDetailLeft.classList.add('inactive')
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
    asideShopping.classList.toggle('inactive')
}

function openProductDetail(){
    asideShopping.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailLeft.classList.remove('inactive')
}

function closeProductDetail(){
    productoACarrito = []
    asideShopping.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailLeft.classList.add('inactive')
}

function verificarProducto(nameProduct){
    return productosEnCarrito.some(function(articulo){
        return articulo === nameProduct
    })
}

function closeModal(){
    modal.style.display = 'none'
}

let productList = []
productList.push({
    name:"ERICK",
    price:"10,000",
    image:"./icons/Pick.jpeg",
    desc: 'Leagues Cup'
})
productList.push({
    name:"CORONADO",
    price:"10,000",
    image:"./icons/Pick.jpeg",
    desc: 'Leagues Cup'
})
productList.push({
    name:"GERA",
    price:"10,000",
    image:"./icons/Pick.jpeg",
    desc: 'Leagues Cup'
})
productList.push({
    name:"JL",
    price:"10,000",
    image:"./icons/Pick.jpeg",
    desc: 'Leagues Cup'
})
productList.push({
    name:"MAGUA",
    price:"10,000",
    image:"./icons/Pick.jpeg",
    desc: 'Leagues Cup'
})
productList.push({
    name:"COMANDANTE",
    price:"10,000",
    image:"./icons/Pick.jpeg",
    desc: 'Leagues Cup'
})
productList.push({
    name:"CHOCO",
    price:"10,000",
    image:"./icons/Pick.jpeg",
    desc: 'Leagues Cup'
})

function renderListProduct(productList) {
    for (const product of productList) {
        let divproductCard = document.createElement('div');
        let imgproductcard = document.createElement('img');
        let divproductinfo = document.createElement('div');
        let divdivproductinfo = document.createElement('div');
        let pprice = document.createElement('p');
        let pname = document.createElement('p');
        let figureproductinfo = document.createElement('figure');

        // Creamos el enlace y lo envolvemos alrededor de la imagen imgproductinfo
        let anchor = document.createElement('a');
        anchor.setAttribute('href', 'https://sports.caliente.mx/es_MX/Leagues-Cup/2023-07-22/CF-Montreal-vs-Pumas-UNAM'); // Reemplaza 'URL_DEL_ENLACE' con la URL deseada
        let imgproductinfo = document.createElement('img');
        imgproductinfo.setAttribute('src', './icons/caliente2.svg');
        anchor.appendChild(imgproductinfo);

        divproductCard.classList.add('product-card');
        imgproductcard.setAttribute('src', product.image);
        divproductinfo.classList.add('product-info');
        pprice.innerText = '$' + product.price;
        pname.innerText = product.name;

        figureproductinfo.appendChild(anchor); // Usamos el enlace con la imagen dentro de la figura
        divdivproductinfo.appendChild(pprice);
        divdivproductinfo.appendChild(pname);

        divproductinfo.appendChild(divdivproductinfo);
        divproductinfo.appendChild(figureproductinfo);

        divproductCard.appendChild(imgproductcard);
        divproductCard.appendChild(divproductinfo);

        divcardscontainer.appendChild(divproductCard);

        imgproductcard.addEventListener('click', function() {
            mostrarInfoProduct(product.image, product.price, product.name, product.desc);
            openProductDetail();
        });
    }
}


function mostrarInfoProduct(imagen, precio, nombre, descripcion){
    productImageInfor.setAttribute('src', imagen)
    labelPriceInfo.innerText = '$' + precio
    labelNameInfo.innerText = nombre
    labelInforInfo.innerText = descripcion
    productoACarrito = []
    productoACarrito.push({
        name: nombre,
        price: precio,
        image: imagen
    })
}

renderListProduct(productList);