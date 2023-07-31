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
let productImage2Infor   = document.querySelector('.product-detail-left > img:nth-child(3)')



let labelNameInfo       = document.querySelector('.product-info-left p:nth-child(1)')
let labelPriceInfo      = document.querySelector('.product-info-left p:nth-child(2)')
let labelInforInfo      = document.querySelector('.product-info-left p:nth-child(3)')
// productImageInfor.setAttribute('src', imagen)
// productImage2Infor.setAttribute('src', imagen2)
// labelPriceInfo.innerText = '$' + precio
// labelNameInfo.innerText = nombre
// labelInforInfo.innerText = descripcion
// productoACarrito = []
// productoACarrito.push({
//     name: nombre,
//     price: precio,
//     image: imagen


let buttonInfo          = document.querySelector('.add-to-cart-button')
let productosEnCarrito  = []
let productoACarrito    = []

let enlace;
let nombre;
let precio;
let descripsion;



  
//lazy

const observerOptions = {
    root: null, // The viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // The threshold at which to trigger the callback
  };

  let observer = new IntersectionObserver(function(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        // La imagen ahora es visible, así que cárgala
        entry.target.src = entry.target.dataset.src;
      }
    }
  }, observerOptions);
  

//lazy



function toggleMenuMobile(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
    
}




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

function openProductDetail2(){
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
    price:"320",
    image:"./Mcia/RB22.png",
    image2:"./Mcia/Lampara.png",
    desc: ' Coleccionable 2022 campeón F1,'
})
productList.push({
    name:"Camiseta Deportiva",
    price:"259",
    image:"./Mcia/PlayeraRB.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Camiseta deportiva de manga corta'
})
productList.push({
    name:"Mercedes Benz Escala",
    price:"420",
    image:"./Mcia/Mercedes.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Coleccionable Mercedes Benz'
})
productList.push({
    name:" Lampara 3D F1",
    price:"320",
    image:"./Mcia/Lampara.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Decoracion para la Havitacion'
})
productList.push({
    name:"Funda para Movil",
    price:"159",
    image:"./Mcia/Funda.png",
    image2:"./Mcia/Lampara.png",
    image2:"./Mcia/Lampara.png",
    desc: 'iPhone 14, 13, 12, 11 Pro Max, Cup'
})
productList.push({
    name:"Póster de arte de pared con efecto neón",
    price:"299",
    image:"./Mcia/Poster.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Decoracion para sala de estar y dormitorio'
})


//lazy
productList.push({
    name:"Red Bull Escala",
    price:"320",
    image:"./Mcia/RB22.png",
    image2:"./Mcia/Lampara.png",
    desc: ' Coleccionable 2022 campeón F1,'
})
productList.push({
    name:"Camiseta Deportiva",
    price:"259",
    image:"./Mcia/PlayeraRB.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Camiseta deportiva de manga corta'
})
productList.push({
    name:"Mercedes Benz Escala",
    price:"420",
    image:"./Mcia/Mercedes.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Coleccionable Mercedes Benz'
})
productList.push({
    name:" Lampara 3D F1",
    price:"320",
    image:"./Mcia/Lampara.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Decoracion para la Havitacion'
})
productList.push({
    name:"Funda para Movil",
    price:"159",
    image:"./Mcia/Funda.png",
    image2:"./Mcia/Lampara.png",
    desc: 'iPhone 14, 13, 12, 11 Pro Max, Cup'
})
productList.push({
    name:"Póster de arte de pared con efecto neón",
    price:"299",
    image:"./Mcia/Poster.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Decoracion para sala de estar y dormitorio'
})

productList.push({
    name:"Red Bull Escala",
    price:"320",
    image:"./Mcia/RB22.png",
    image2:"./Mcia/Lampara.png",
    desc: ' Coleccionable 2022 campeón F1,'
})
productList.push({
    name:"Camiseta Deportiva",
    price:"259",
    image:"./Mcia/PlayeraRB.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Camiseta deportiva de manga corta'
})
productList.push({
    name:"Mercedes Benz Escala",
    price:"420",
    image:"./Mcia/Mercedes.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Coleccionable Mercedes Benz'
})
productList.push({
    name:" Lampara 3D F1",
    price:"320",
    image:"./Mcia/Lampara.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Decoracion para la Havitacion'
})
productList.push({
    name:"Funda para Movil",
    price:"159",
    image:"./Mcia/Funda.png",
    image2:"./Mcia/Lampara.png",
    desc: 'iPhone 14, 13, 12, 11 Pro Max, Cup'
})
productList.push({
    name:"Póster de arte de pared con efecto neón",
    price:"299",
    image:"./Mcia/Poster.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Decoracion para sala de estar y dormitorio'
})

productList.push({
    name:"Red Bull Escala",
    price:"320",
    image:"./Mcia/RB22.png",
    image2:"./Mcia/Lampara.png",
    desc: ' Coleccionable 2022 campeón F1,'
})
productList.push({
    name:"Camiseta Deportiva",
    price:"259",
    image:"./Mcia/PlayeraRB.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Camiseta deportiva de manga corta'
})
productList.push({
    name:"Mercedes Benz Escala",
    price:"420",
    image:"./Mcia/Mercedes.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Coleccionable Mercedes Benz'
})
productList.push({
    name:" Lampara 3D F1",
    price:"320",
    image:"./Mcia/Lampara.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Decoracion para la Havitacion'
})
productList.push({
    name:"Funda para Movil",
    price:"159",
    image:"./Mcia/Funda.png",
    image2:"./Mcia/Lampara.png",
    desc: 'iPhone 14, 13, 12, 11 Pro Max, Cup'
})
productList.push({
    name:"Póster de arte de pared con efecto neón",
    price:"299",
    image:"./Mcia/Poster.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Decoracion para sala de estar y dormitorio'
})

productList.push({
    name:"Red Bull Escala",
    price:"320",
    image:"./Mcia/RB22.png",
    image2:"./Mcia/Lampara.png",
    desc: ' Coleccionable 2022 campeón F1,'
})
productList.push({
    name:"Camiseta Deportiva",
    price:"259",
    image:"./Mcia/PlayeraRB.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Camiseta deportiva de manga corta'
})
productList.push({
    name:"Mercedes Benz Escala",
    price:"420",
    image:"./Mcia/Mercedes.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Coleccionable Mercedes Benz'
})
productList.push({
    name:" Lampara 3D F1",
    price:"320",
    image:"./Mcia/Lampara.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Decoracion para la Havitacion'
})
productList.push({
    name:"Funda para Movil",
    price:"159",
    image:"./Mcia/Funda.png",
    image2:"./Mcia/Lampara.png",
    desc: 'iPhone 14, 13, 12, 11 Pro Max, Cup'
})
productList.push({
    name:"Póster de arte de pared con efecto neón",
    price:"299",
    image:"./Mcia/Ferrari.png",
    image2:"./Mcia/Lampara.png",
    desc: 'Decoracion para sala de estar y dormitorio'
})



//LAZY




function renderListProduct(productList){
    for (const product of productList) {

        //carrusel
        let btnNext = document.createElement('button')
        let btnPrev= document.createElement('button')
        
        
        //carrusel
        
        


        let divproductCard = document.createElement('div')
        let  imgproductcard = document.createElement('img')
        let  imgproductcard2 = document.createElement('img')
        let divproductinfo = document.createElement('div')
        let divdivproductinfo = document.createElement('div')
        let pprice = document.createElement('p')
        let pname = document.createElement('p')
        let figureproductinfo = document.createElement('figure')
        let imgproductinfo = document.createElement('img')
        divproductCard.classList.add('product-card')
        imgproductcard.setAttribute('src', product.image)
        imgproductcard2.setAttribute('src', product.image2)
        divproductinfo.classList.add('product-info')
        pprice.innerText ='$' + product.price
        pname.innerText = product.name
        imgproductinfo.setAttribute('src', './icons/bt_add_to_cart.svg')
        
       //LAZY
        imgproductcard.classList.add('lazy-loading-image');
        
        //carrusel
        divproductCard.classList.add('image-container')
        
        //carrusel


        //imgproductcard.classList.add('bloqueo'); 
       imgproductcard2.classList.add('bloqueo')

        imgproductcard2.classList.add('lazy-loading-image'); // Agregar clase para identificar las imágenes para "lazy loading"
        imgproductcard.setAttribute('data-src', product.image); // Agregar el atributo "data-src" con la URL de la imagen
        imgproductcard2.setAttribute('data-src', product.image2); // Agregar el atributo "data-src" con la URL de la imagen
        //LAZY

        figureproductinfo.appendChild(imgproductinfo)
        divdivproductinfo.appendChild(pprice)
        divdivproductinfo.appendChild(pname)

        divproductinfo.appendChild(divdivproductinfo)
        divproductinfo.appendChild(figureproductinfo)

        //Carrusel
        btnPrev.textContent ="<" // Reemplaza 'Anterior' con el texto que desees mostrar en el botón
        btnNext.textContent =">" // Reemplaza 'Anterior' con el texto que desees mostrar en el botón
        divproductCard.appendChild(btnNext)
        divproductCard.appendChild(btnPrev)
        
        btnPrev.classList.add('buttonsSlide');
        btnPrev.classList.add('prev-button'); // Agregar clase para identificar las imágenes para "lazy loading"
        btnNext.classList.add('buttonsSlide');
        btnNext.classList.add('next-button');
        //Carrusel


        divproductCard.appendChild(imgproductcard)
        divproductCard.appendChild(imgproductcard2)
        divproductCard.appendChild(divproductinfo)

        divcardscontainer.appendChild(divproductCard)

        btnNext.addEventListener('click', function(){
            
            imgproductcard.classList.add('bloqueo') ;
            imgproductcard2.classList.remove('bloqueo');
           

        });

        btnPrev.addEventListener('click', function(){
            
            imgproductcard2.classList.add('bloqueo') ;
            imgproductcard.classList.remove('bloqueo');
           

        });

        imgproductcard.addEventListener('click', function(){
            mostrarInfoProduct(product.image, product.image2, product.price, product.name, product.desc)
            productImage2Infor.classList.add('bloqueo');
            productImageInfor.classList.remove('bloqueo');
            openProductDetail()

            

        });

        imgproductcard2.addEventListener('click', function(){
            productImageInfor.classList.add('bloqueo');
            productImage2Infor.classList.remove('bloqueo');

            mostrarInfoProduct(product.image, product.image2, product.price, product.name, product.desc)
            openProductDetail()

        

        });





        imgproductinfo.addEventListener('click', function(){
            let productoAgregado = []
            productoAgregado.push({
                name: product.name,
                price: product.price,
                image: product.image,
                desc: product.desc
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
    descripsion = producto[0].desc
    console.log (descripsion)


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

 




}


function mostrarInfoProduct(imagen, imagen2, precio, nombre, descripsion){
    
   

    productImageInfor.setAttribute('src', imagen)
    productImage2Infor.setAttribute('src', imagen2)
    labelPriceInfo.innerText = "$" +  precio 
    labelNameInfo.innerText = nombre
    labelInforInfo.innerText = descripsion
    productoACarrito = []
    productoACarrito.push({
        
        price: precio,
        name: nombre,
        image: imagen,
        desc: descripsion

        
       
    })
}



// function mostrarInfoProduct
// (imagen, imagen2, precio, nombre, descripcion){
//     productImageInfor.setAttribute('src', imagen)
// //    productImage2Infor.setAttribute('src', imagen2)
//     labelPriceInfo.innerText = '$' + precio
//     labelNameInfo.innerText = nombre
//     labelInforInfo.innerText = descripcion
//     productoACarrito = []
//     productoACarrito.push({
//         name: nombre,
//         price: precio,
//         image: imagen,
//         image2: imagen2,
//         desc: nombre
//     })

//     // name:" Lampara 3D F1",
//     // price:"320",
//     // image:"./Mcia/Lampara.png",
//     // image2:"./Mcia/Lampara.png",
//     // desc: 'Decoracion para la Havitacion'
// }

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

    var pagos = new Image();
    pagos.src = "./icons/Pagos.png" // 'enlace' should be the URL of the image you want to print

    
    // Wait for the image to load
    img.onload = function () {
      // Set the position and size of the image on the page
      var x = 30; // X coordinate of the image
      var y = 60; // Y coordinate of the image
      var width = 80; // Width of the image
      var height = 80; // Height of the image
        
      var xLogo = 1; // X coordinate of the logo (adjust this to position the logo)
      var yLogo = 10; // Y coordinate of the logo (adjust this to position the logo)
      
        


      // Draw the image on the PDF document
      pdf.text("GRACIAS POR SU COMPRA: ", 30, 40);  
      pdf.text("(Datos para realizar pago de su compra) ", 30, 50);    

      pdf.addImage(logo, 'JPEG', xLogo, yLogo);
      pdf.addImage(img, 'JPEG', x, y, width, height);
      pdf.addImage(pagos, 'JPEG', 10, 180);


      // Write the name to the page
      pdf.text(nombre+ ":$ "+precio, 14, 150);
      //pdf.text("$"+precio, 64, 145);
       pdf.text(descripsion, 14, 160);   
      
      
      //pdf.text("CUENTA: ", 10, 180);
      //pdf.text("PAGO OXXO: ", 10, 189);  
      pdf.text("Reenviar Comprobante de pago a : ", 10, 235);  
      pdf.text("Incluir Datos Para envio:(Nombre, direccion, telefono)", 10, 245);  
     

      // Save the PDF document
      pdf.save("my-pdf.pdf");
    };
  }


  //LAZY
  const accion = (entry) => {
    const nodo = entry.target;
    observer.unobserve(nodo);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('.lazy-loading-image');
    lazyImages.forEach((img) => observer.observe(img));
  });


  //LAZY