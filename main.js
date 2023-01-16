const URL_API_MUNICIPIOS = 'http://localhost:3000/municipios';
const URL_API_PRODUCTOS = 'http://localhost:3000/productos';
const ubication = document.getElementById('ubication');
const overLayMuni = document.getElementById('overLayMuni');
const overLayCard = document.getElementById('overLayCard');
const xImg = document.getElementById('xImg');
const xImgdos = document.getElementById('xImgdos');
const selectBoxMun = document.getElementById('selectBox');
const opcionesMuni = document.getElementById('opcionesMuni');
const municipioNew = document.getElementById('municipioNew');
const inputMuni = document.getElementById('inputMuni');
const buscarMuniButton = document.getElementById('buscarMuniButton');
const pVerifi = document.getElementById('pVerifi');
//CAROUSEL OFERTAS
const contenedorCarrusel = document.getElementById('contenedorCarrusel');
const cardProducts = document.getElementById('cardProducts');
const flechaIzquierda = document.getElementById('flechaIzquierda');
const flechaDerecha = document.getElementById('flechaDerecha');
const carousel = document.getElementById('carousel');
//CAROUSEL ALL PRODUCTS
const contenedorCarruselAllProducts = document.getElementById('contenedorCarruselAllProducts');
const cardProductsAll = document.getElementById('cardProductsAll');
const flechaIzquierdaDos = document.getElementById('flechaIzquierdaDos');
const flechaDerechaDos = document.getElementById('flechaDerechaDos');
const carouselAllProducts = document.getElementById('carouselAllProducts');
//CAROUSEL PRODUCTOS RELACIONADOS
const contenedorCarruselProductosRela = document.getElementById('contenedorCarruselProductosRela');
const flechaIzquierdaTres = document.getElementById('flechaIzquierdaTres');
const flechaDerechaTres = document.getElementById('flechaDerechaTres');
const carouselProductsRelacionados = document.getElementById('carouselProductsRelacionados');
//
const productosNav = document.getElementById('productosNav');
const principal = document.getElementById('principal');
const productosTitleHeader = document.getElementById('productosTitleHeader');
const tiendita = document.getElementById('tiendita');
let porductosFavoritos = [];
let productosTotales = [];
const favoritosTittleHeader = document.getElementById('favoritosTittleHeader');
const productosFav = document.getElementById('productosFav');
// POP UP CARD BIG PRODUCT
const tittlePopUpCard = document.getElementById('tittlePopUpCard');
const pricePUP = document.getElementById('pricePUP');
const chao = document.getElementById ('chao');
const formPopUp = document.getElementById('formPopUp');
const eliminarDelPopUp = document.getElementById('eliminarDelPopUp');
const imgPBigB = document.getElementById('imgPBigB');
const unityCardUp = document.getElementById('unityCardUp');
const borrarCardUp = document.getElementById('borrarCardUp');


// Active pop up select ubication
ubication.addEventListener('click', () => {
    overLayMuni.classList.add('activeMuni');
});

//Desactive pop up select ubication
xImg.addEventListener('click', () => {
    overLayMuni.classList.remove('activeMuni');
    opcionesMuni.classList.remove('activeMuniOpcion');
});

//Desactive pop up Card
xImgdos.addEventListener('click', () => {
    overLayCard.classList.add('hidden');
    carouselProductsRelacionados.textContent='';
});

//Active menu desplegable municipios
selectBoxMun.addEventListener('click', () => {
    opcionesMuni.classList.toggle('activeMuniOpcion');
});


//Render Municipios
const renderMunicipios = (municipios) => {
    municipios.forEach(municipio => {
        const municipioFinal = municipio.municipio.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
        opcionesMuni.innerHTML += `
        <a href="#" class="opcionMuni">
            <div class="selectdos">
                <i>
                    <img src="./img/ubicationIconByN.svg" alt="ubicationIcon" class="uIByN">
                </i>
                <div class="contentSelect">
                    <p class="inputMunidos" id="municipioNew">${municipioFinal}</p>
                </div>
            </div>
        </a>`
    });
};

//Select municipio de Ubicación
opcionesMuni.addEventListener('click', (e) => {
    if (e.target.classList.contains('inputMunidos')) {
        inputMuni.textContent = e.target.textContent;
        inputMuni.classList.add('inputMunidos');
        opcionesMuni.classList.remove('activeMuniOpcion');
        buscarMuniButton.classList.add('buscarMuniButtonActive');
        pVerifi.classList.remove('pVerifiActive');
    };
});



//Select button buscar pop up ubicación
buscarMuniButton.addEventListener('click', (e) => {
    // e.preventDefault();
    if (inputMuni.textContent=='Ingresa tu dirección') {
        pVerifi.classList.add('pVerifiActive');
    } else {
        buscarMuniButton.classList.add('buscarMuniButtonActive');
        overLayMuni.classList.remove('activeMuni');
        pVerifi.classList.remove('pVerifiActive');
        ubication.textContent = inputMuni.textContent;
    }
});

inputMuni.textContent == 'Ingresa tu dirección' ? buscarMuniButton.classList.remove('buscarMuniButtonActive') : buscarMuniButton.classList.add('buscarMuniButtonActive');

//CARRUSEL OFERTAS
flechaDerecha.addEventListener('click', () => {
    contenedorCarrusel.scrollLeft += contenedorCarrusel.offsetWidth;
});

flechaIzquierda.addEventListener('click', () => {
    contenedorCarrusel.scrollLeft -= contenedorCarrusel.offsetWidth;
});

//CAROUSEL ALL PRODUCTS
flechaDerechaDos.addEventListener('click', () => {
    contenedorCarruselAllProducts.scrollLeft += contenedorCarruselAllProducts.offsetWidth;
});

flechaIzquierdaDos.addEventListener('click', () => {
    contenedorCarruselAllProducts.scrollLeft -= contenedorCarruselAllProducts.offsetWidth;
});

//CAROUSEL PRODUCTOS RELACIONADOS
flechaDerechaTres.addEventListener('click', () => {
    contenedorCarruselProductosRela.scrollLeft += contenedorCarruselProductosRela.offsetWidth;
});

flechaIzquierdaTres.addEventListener('click', () => {
    contenedorCarruselProductosRela.scrollLeft -= contenedorCarruselProductosRela.offsetWidth;
});

//Select Productos en el Nav Bar
productosTitleHeader.addEventListener('click', (e) => {
    principal.classList.add('hidden');
    productosNav.classList.remove('hidden');
    productosFav.innerHTML = '';
});

//Logo Tiendita
tiendita.addEventListener('click', (e) => {
    principal.classList.remove('hidden');
    productosNav.classList.add('hidden');
    productosFav.innerHTML = '';
});

// RENDER PRODUCTS GENERAL
const renderProducts = (producto, insertar) => {
    if (producto.descuento !== '' && (producto.categoria=='frutas' || producto.categoria=='verduras')) {
            insertar.innerHTML += `
            <div class="cardProducts" id="cardProducts">
                <div class="divTop">
                    <p class="descuento">${producto.descuento}% dto</p>
                    <div class="estrellaContainer"><p class="estrella" id="${producto.id}">★</p></div>
                </div>
                <img src="${producto.fotoProducto}" alt="imgProducto" class="productImg">
                <div class="priceYtitleP">
                    <div>
                        <p class="priceDescuento">$${producto.precioConDescuento}/Kg <span class="priceBefore">$${producto.precio}/Kg</span></p>
                        <h2 class="tittleProduct ${producto.fotoProducto} ${producto.descuento} ${producto.categoria}" id="${producto.precioConDescuento}">${producto.nombre}</h2>
                    </div>
                </div>
                <button type="button" class="agregarButton">Agregar</button>
            </div>`
        } else if (producto.descuento == '' && (producto.categoria == 'frutas' || producto.categoria == 'verduras')) {
            insertar.innerHTML += `
            <div class="cardProducts" id="cardProducts">
                <div class="divTop">
                    <p></p>
                    <div class="estrellaContainer"><p class="estrella" id="${producto.id}">★</p></div>
                </div>
                <img src="${producto.fotoProducto}" alt="imgProducto" class="productImg">
                <div class="priceYtitleP">
                    <div>
                        <p class="priceDescuento">$${producto.precio}/Kg</p>
                        <h2 class="tittleProduct ${producto.fotoProducto} vacio ${producto.categoria}" id="${producto.precio}">${producto.nombre}</h2>
                    </div>
                </div>
                <button type="button" class="agregarButton">Agregar</button>
            </div>`
        } else if (producto.descuento !== '' && (producto.categoria !== 'frutas' && producto.categoria !== 'verduras')) {
            insertar.innerHTML += `
            <div class="cardProducts" id="cardProducts">
                <div class="divTop">
                    <p class="descuento">${producto.descuento}% dto</p>
                    <div class="estrellaContainer"><p class="estrella" id="${producto.id}">★</p></div>
                </div>
                <img src="${producto.fotoProducto}" alt="imgProducto" class="productImg">
                <div class="priceYtitleP">
                    <div>
                        <p class="priceDescuento">$${producto.precioConDescuento} <span class="priceBefore">$${producto.precio}</span></p>
                        <h2 class="tittleProduct ${producto.fotoProducto} ${producto.descuento} ${producto.categoria} ${producto.precioConDescuento}" id="${producto.categoria}">${producto.nombre}</h2>
                    </div>
                    <p class="priceperUnit">${producto.contenido}${producto.unidadContenido} (${(producto.contenido/producto.precioConDescuento).toFixed(2)}/${producto.unidadContenido})</p>
                </div>
                <button type="button" class="agregarButton">Agregar</button>
            </div>`
        } else if (producto.descuento == '' && (producto.categoria !== 'frutas' && producto.categoria !== 'verduras')) {
            insertar.innerHTML += `
            <div class="cardProducts" id="cardProducts">
                <div class="divTop">
                    <p></p>
                    <div class="estrellaContainer"><p class="estrella" id="${producto.id}">★</p></div>
                </div>
                <img src="${producto.fotoProducto}" alt="imgProducto" class="productImg">
                <div class="priceYtitleP">
                    <div>
                        <p class="priceDescuento">$${producto.precio}</p>
                        <h2 class="tittleProduct ${producto.fotoProducto} vacio ${producto.categoria} ${producto.precio}" id="${producto.categoria}">${producto.nombre}</h2>
                    </div>
                    <p class="priceperUnit">${producto.contenido}${producto.unidadContenido} (${(producto.contenido/producto.precio).toFixed(2)}/${producto.unidadContenido})</p>
                </div>
                <button type="button" class="agregarButton">Agregar</button>
            </div>`
        }

}

//Render Ofertas en el carousel
const renderOfertas = (productos) => {
    productos.forEach(producto => {
        if (producto.descuento !== '') {
            renderProducts(producto, carousel)  
        }
    });
}

//Render all Product en el carousel
const renderProductosCarousel = (productos) => {
    productos.forEach(producto => {
        renderProducts(producto, carouselAllProducts);
    });
    
};



//Render Products en el Products del navbar
const renderProductos = (productos) => {
    productos.forEach(producto => {
        renderProducts(producto, productosNav); 
    });
    
};


// Select favorito
carousel.addEventListener('click', (e) => {
    if (e.target.classList.contains('estrella')) {
        console.log(e.target.id);
        console.log('hice click');
        if ( !e.target.classList.contains('estrellaActiva')) {
            porductosFavoritos.push(productosTotales.find(p => p.id == e.target.id))
            console.log(e.target.id)
            // const favPromise = async (e) => {
            //     const newFavorito = {
            //         favorito: true
            //     }
            //     const addFavorito = await fetch(URL_API_PRODUCTOS + "/" + e.target.id, {
            //         method: 'PUT',
            //         body: JSON.stringify(newFavorito),
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     });
            //     console.log(addFavorito)
                
            //     // const holi = fetch(URL_API_PRODUCTOS + "/" + e.target.id)
            //     // console.log(holi)
            // };
            
            // favPromise(e);
            
        } else {
            porductosFavoritos = porductosFavoritos.filter(p => p.id != e.target.id)
        }
        // console.log(porductosFavoritos);
        // console.log(productosTotales);
        e.target.classList.toggle('estrellaActiva');
    }
});

//POP UP CARD PRODUCT BIG
const popUpCardBig = (cite, ) => {
    cite.addEventListener(('click'), (e) => {
    if(e.target.classList.contains('tittleProduct')){
        overLayCard.classList.remove('hidden');
        if (e.target.classList.item(3)=='frutas' || e.target.classList.item(3)=='verduras'){
            tittlePopUpCard.innerText = e.target.textContent;
            pricePUP.innerText= '$' + e.target.id + '/Kg';
            imgPBigB.innerHTML=`<img src="${e.target.classList.item(1)}" alt="imgBigProduct" class="imgPBigB" >`
            eliminarDelPopUp.classList.remove('hidden');
            chao.classList.remove('hidden');
            borrarCardUp.innerText = 'Peso aproximado por pieza, puede variar de acuerdo al peso real';
            formPopUp.innerHTML=`
            <span id="eliminarDelPopUp">
                    <div>
                        <div class="selectMadurez" id="selectMadurez">
                            <div>
                                <p class="inputMadurez" id="inputMadurez">Por elegir</p>
                            </div>
                            <i>
                                <img src="./img/rowDown.svg" alt="downArrow">
                            </i>
                        </div>
                                        <!-- Opciones... -->
                        <div class="opcionesMadurez" id="opcionesMadurez">
                            <a href="#" class="opcionMuni">
                                <div class="selectAH">
                                    <p class="inputMadurezDos" id="inputMadurezDos">Maduro (Para hoy)</p>
                                </div>
                            </a>
                            <a href="#" class="opcionMuni">
                                <div class="selectAH">
                                    <p class="inputMadurezDos" id="inputMadurezDos">Normal (3-5 días)</p>
                                </div>
                            </a>
                            <a href="#" class="opcionMuni">
                                <div class="selectAH">
                                    <p class="inputMadurezDos" id="inputMadurezDos">Verde (7 días)</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <p class="pVerifiM hidden" id="pVerifiM">Elige la Madurez</p>
                        <div class="divcuatroP">
                            <div class="selectPeso">
                                <img src="./img/menos.svg" alt="menos">
                                <p class="peso">250g</p>
                                <img src="./img/mas.svg" alt="mas">
                            </div>
                            <button type="submit" class="AgregarMuniButton" id="AgregarMuniButton">Agregar</button>
                        </div>
                        </span>`
        } else if ( e.target.classList.item(3) !== 'frutas' && e.target.classList.item(3) !== 'verduras'){
            tittlePopUpCard.innerText = e.target.textContent;
            imgPBigB.innerHTML=`<img src="${e.target.classList.item(1)}" alt="imgBigProduct" class="imgPBigB" >`;
            pricePUP.innerText = '$'+ e.target.classList.item(4);
            borrarCardUp.innerText = '';
            eliminarDelPopUp.classList.add('hidden');
            chao.classList.add('hidden');
            formPopUp.innerHTML = `
                <div class="divcuatroP">
                    <div class="selectPeso">
                        <img src="./img/menos.svg" alt="menos" class="menos">
                        <p class="peso" id="cantidadP">1</p>
                        <img src="./img/mas.svg" alt="mas" class="menos">
                    </div>
                    <button type="submit" class="AgregarMuniButton AgregarMuniButtonActive" id="AgregarMuniButton">Agregar</button>
                </div>`
        }
        // //Render Productos Relacionados
        const renderProductosRelacionados = (productos) => {
            productos.forEach(producto => {
                if(producto.categoria == e.target.classList.item(3) && producto.nombre !== e.target.textContent ){
                    renderProducts(producto, carouselProductsRelacionados)  
                }
            
        });
        
        }
        const getProducts = async () => {
        const getAPI_Products = await fetch(URL_API_PRODUCTOS);
        const productos = await getAPI_Products.json();
        renderProductosRelacionados(productos);
        }
        getProducts();

    }
});
}

popUpCardBig(carousel);
popUpCardBig(carouselAllProducts);
popUpCardBig(productosNav);

//Active menu desplegable madurez
formPopUp.addEventListener('click', (e) => {
    if(e.target.classList.contains('inputMadurez')){
        opcionesMadurez.classList.toggle('activeMuniOpcion');
    }
});

//Select madurez de frutas y verduras
formPopUp.addEventListener( 'click', (e) =>{
    if (e.target.classList.contains('inputMadurezDos')) {
        inputMadurez.textContent = e.target.textContent;
        opcionesMadurez.classList.remove('activeMuniOpcion');
        chao.classList.add('hidden');
        AgregarMuniButton.classList.add('AgregarMuniButtonActive')
    }
    if (e.target.classList.contains('AgregarMuniButton')){
        if (inputMadurez.textContent !== 'Por elegir'){
        AgregarMuniButton.classList.add('AgregarMuniButtonActive')
        console.log('hice click')
        } else{
            chao.classList.remove('hidden')
        }
    } 
})

//Button agregar fruta y verduras
formPopUp.addEventListener( 'click', (e) =>{
    if (e.target.classList.contains('AgregarMuniButton')){
        if (inputMadurez.textContent !== 'Por elegir'){
        AgregarMuniButton.classList.add('AgregarMuniButtonActive')
        console.log('hice click')
        } else{
            chao.classList.remove('hidden')
            console.log('no')
        }
    }
})

//Elegir cantidad productos diferentes a frutas y verduras
formPopUp.addEventListener( 'click', (e) =>{
    if (e.target.classList.contains('masu')){
        console.log('hice Click')
    }
})

// Favoritos Navbar
favoritosTittleHeader.addEventListener('click', () => {
    principal.classList.add('hidden');
    productosNav.classList.add('hidden');
    productosFav.classList.remove('hidden')
    console.log(porductosFavoritos)
    productosFav.innerHTML =''
    porductosFavoritos.forEach(producto => {
        renderProducts(producto, productosFav)
    });
})


//Extraer data API municipios
const getMunicipios = async () => {
    const getAPI_Mun = await fetch(URL_API_MUNICIPIOS);
    const municipios = await getAPI_Mun.json();
    renderMunicipios(municipios)
}

getMunicipios();


//Extraer data API prdoductos
const getProducts = async () => {
    const getAPI_Products = await fetch(URL_API_PRODUCTOS);
    const productos = await getAPI_Products.json();
    renderProductos(productos);
    renderOfertas(productos);
    renderProductosCarousel(productos);
    productosTotales = productos;
}
getProducts();

