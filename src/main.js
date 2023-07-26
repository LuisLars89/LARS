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

let enlace;
let nombre;
let precio;

countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
totalCarrito.innerText = '$0.00'

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
    name:"Red Bull Escala",
    price:"350",
    image:"./Mcia/RB22.png",
    desc: ' Coleccionable 2022 campeón F1,'
})
productList.push({
    name:"Camiseta Deportiva",
    price:"10,000",
    image:"./Mcia/PlayeraRB.png",
    desc: 'Camiseta deportiva de manga corta'
})
productList.push({
    name:"Mercedes Benz Escala",
    price:"10,000",
    image:"./Mcia/Mercedes.png",
    desc: 'Coleccionable Mercedes Benz'
})
productList.push({
    name:"F1-75 Monza, 100 aniversario",
    price:"960.79",
    image:"./Mcia/Ferrari.png",
    desc: 'ERRARI 2017 Monza Circuit 100th Anniversary'
})
productList.push({
    name:"Funda para Movil",
    price:"2000",
    image:"./Mcia/Funda.png",
    desc: 'iPhone 14, 13, 12, 11 Pro Max, Cup'
})
productList.push({
    name:"Póster de arte de pared con efecto neón",
    price:"10,000",
    image:"./Mcia/Poster.png",
    desc: 'Decoracion para sala de estar y dormitorio'
})

function renderListProduct(productList){
    for (const product of productList) {
        let divproductCard = document.createElement('div')
        let imgproductcard = document.createElement('img')
        let divproductinfo = document.createElement('div')
        let divdivproductinfo = document.createElement('div')
        let pprice = document.createElement('p')
        let pname = document.createElement('p')
        let figureproductinfo = document.createElement('figure')
        let imgproductinfo = document.createElement('img')
        divproductCard.classList.add('product-card')
        imgproductcard.setAttribute('src', product.image)
        divproductinfo.classList.add('product-info')
        pprice.innerText ='$' + product.price
        pname.innerText = product.name
        imgproductinfo.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        figureproductinfo.appendChild(imgproductinfo)
        divdivproductinfo.appendChild(pprice)
        divdivproductinfo.appendChild(pname)

        divproductinfo.appendChild(divdivproductinfo)
        divproductinfo.appendChild(figureproductinfo)

        divproductCard.appendChild(imgproductcard)
        divproductCard.appendChild(divproductinfo)

        divcardscontainer.appendChild(divproductCard)

        imgproductcard.addEventListener('click', function(){
            mostrarInfoProduct(product.image, product.price, product.name, product.desc)
            openProductDetail()
        });


        imgproductinfo.addEventListener('click', function(){
            let productoAgregado = []
            productoAgregado.push({
                name: product.name,
                price: product.price,
                image: product.image
            })
            agregarCarrito(productoAgregado)
        })
    }
}

/* Funcion para agregar productos al carrito */
function agregarCarrito(producto){
    if(verificarProducto(producto[0].name)){
        productoACarrito= []
        return modal.style.display = 'grid'
    }

    /* Creacion de elemtentos HTML */
    let divShoppingCart = document.createElement('div')
    let figureShoppingCart = document.createElement('figure')
    let imgfigureShoppingCart = document.createElement('img')
    let pnameShoppingCart = document.createElement('p')
    let ppriceShoppingCart = document.createElement('p')
    let imgcloseShoppingCart = document.createElement('img')

    /* Se agrega contenido a cada uno de los elementos */
    divShoppingCart.classList.add('shopping-cart')
    imgfigureShoppingCart.setAttribute('src', producto[0].image)
    enlace=producto[0].image
    
    pnameShoppingCart.innerText = producto[0].name
    nombre=producto[0].name
    ppriceShoppingCart.innerText ='$' + producto[0].price
    precio = producto[0].price
    imgcloseShoppingCart.setAttribute('src','./icons/icon_close.png')
    imgcloseShoppingCart.classList.add('removeList')

    /* Se insertan los documentos */
    figureShoppingCart.appendChild(imgfigureShoppingCart)
    divShoppingCart.appendChild(figureShoppingCart)
    divShoppingCart.appendChild(pnameShoppingCart)
    divShoppingCart.appendChild(ppriceShoppingCart)
    divShoppingCart.appendChild(imgcloseShoppingCart)
    myordercontentContainer.appendChild (divShoppingCart)

    /* Se agregan la cantidad de productos ademas de la suma de precios */
    countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
    let totalCarritoValue = parseFloat(totalCarrito.innerText.substring(1));
    let productPrice = parseFloat(producto[0].price);
    let newTotal = totalCarritoValue + productPrice;
    totalCarrito.innerText = '$' + newTotal.toFixed(2); // toFixed(2) para mostrar el total con 2 decimales
    //totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price))
    productosEnCarrito.push(producto[0].name)
    
    /* Funcion para quitar productos del carrito */
    imgcloseShoppingCart.addEventListener('click', function(){
        divShoppingCart.remove()
        countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
        
        totalCarrito.innerText = '$' + (parseFloat(totalCarrito.innerText.substring(1)) - parseFloat(producto[0].price))
        productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name),1)
    }) 

 return enlace;

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




//PDF GENERATOR A PARTIR DE AQUI 

 // <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>

  
  function generatePDF1() {
  
  
    // Create a new PDF document
    var pdf = new jsPDF();
  
    // Add a page to the document
    //pdf.addPage();
  
    // Write the name to the page
    pdf.text("$s", 100, 100);
  
    // Save the PDF document
    pdf.save("my-pdf.pdf");
  }
  

  function generatePDF() {
    // Create a new PDF document
    var pdf = new jsPDF();
  
    // Load the image (assuming 'enlace' contains the URL of the image)
    var img = new Image();
    img.src = enlace; // 'enlace' should be the URL of the image you want to print
  
    var logo = new Image();
    logo.src = "./logos/BigLogo.png" // 'enlace' should be the URL of the image you want to print

    // Wait for the image to load
    img.onload = function () {
      // Set the position and size of the image on the page
      var x = 20; // X coordinate of the image
      var y = 50; // Y coordinate of the image
      var width = 80; // Width of the image
      var height = 80; // Height of the image
        
      var xLogo = 20; // X coordinate of the logo (adjust this to position the logo)
      var yLogo = 20; // Y coordinate of the logo (adjust this to position the logo)
      
        


      // Draw the image on the PDF document
      pdf.addImage(img, 'JPEG', x, y, width, height);
      pdf.addImage(logo, 'JPEG', xLogo, yLogo);
  
      // Write the name to the page
      pdf.text(nombre, 100, 80);
      pdf.text("$"+precio, 100, 100);
      pdf.text("CUENTA: ", 20, 150);
      pdf.text("PAGO OXXO: ", 20, 160);  

      pdf.text("Reenviar Comprobante de pago a : ", 20, 180);  

      // Save the PDF document
      pdf.save("my-pdf.pdf");
    };
  }