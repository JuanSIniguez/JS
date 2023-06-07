//        VARIABLES

let categorias = []
let marca = []

let carrito = []
if(localStorage.getItem('lsCarrito')) {
 carrito = JSON.parse(localStorage.getItem('lsCarrito'))
}
let productos = []
if(localStorage.getItem('lsProductos')) {
  productos = JSON.parse(localStorage.getItem('lsProductos'))
}

let prodFiltrados = productos

//        DOM

const fragment = document.createDocumentFragment();

const cardproductos = document.querySelector('.dinamicproduct');
const cardtemplate = document.querySelector('.cardtemplate').content

const divCarrito = document.querySelector('.carritoCompra');
const templatecarrito = document.querySelector('.carritotemplate').content

const navfilters = document.querySelector('.dinamicFilters')
const listCategorias = document.querySelector('.templateFilters').content

const imgpath = cardtemplate.querySelector('.img-product').getAttribute('src')

const eOrdernar = document.querySelector('.ordenes')





//         CARGA DE PAGINA

document.addEventListener('DOMContentLoaded', e => { fetchData() });

const fetchData = async () => {

  try {
    const res = await fetch("../arts.JSON")
    const productos = await res.json()
    const lsProductos = localStorage.setItem("lsProductos", JSON.stringify(productos))
    pintarCards(productos)
    pintarFiltros(productos)
    pintarMenu(productos)
    if (localStorage.getItem('lsCarrito')) {
        const carrito = JSON.parse(localStorage.getItem('lsCarrito'))
        pintarcarrito(carrito)
      }
  } catch (error) {
    console.log(error)
  }
}


//
//       FUNCIONES
//

//                 Cards de productos

  const pintarCards = productos => {

      //const fragment = document.createDocumentFragment();
      cardproductos.innerHTML=''
      productos.forEach( (e) => { 
      /* cardtemplate.querySelector(".card-body .card-text").textContent = e.descripcion; */
      cardtemplate.querySelector(".img-product").src= `${imgpath}${e.sku}.webp`
      cardtemplate.querySelector('.card-footer .card-text').textContent = `${e.nombre}`
      cardtemplate.querySelector('.card-footer h6').textContent = `$ ${e.precio}   -   3 y 6 Cuotas sin interes.`
      cardtemplate.querySelector('.card-footer .card-text').setAttribute('data-value', e.sku)
      cardtemplate.querySelector('.card').setAttribute('alt', e.nombre)
      cardtemplate.querySelector('.card-footer h6').setAttribute('data-value', e.precio)
      const clone = cardtemplate.cloneNode(true);
      
      fragment.appendChild(clone);
    });
    
    cardproductos.prepend(fragment)
    
  }


//                CARRITO DE COMPRA        

//                DISEÑO DEL CARRITO 

const pintarcarrito = obj =>{
 

  Object.values(obj).forEach(producto => {    
    templatecarrito.querySelector('.carritoArticulo').setAttribute('data-value', producto.codigo)
    templatecarrito.querySelector('.carritoArticulo').textContent = `(${producto.codigo}) ${producto.nombre}`
    templatecarrito.querySelector('.carritoCantidad').textContent = producto.cantidad
    templatecarrito.querySelector('.carritoCantidad').setAttribute('data-value', producto.cantidad)
    templatecarrito.querySelector('.carritoPrecio').textContent = `$  ${(producto.precio*1).toLocaleString('es-ES')}`
    // el * 1 es porque sino no tomaba el toLocaleString y no se porque
    templatecarrito.querySelector('.carritoPrecio').setAttribute('data-value', producto.precio)
    let ntotal = producto.cantidad*producto.precio
    templatecarrito.querySelector('.carritoTotalArt').textContent = `$  ${(producto.cantidad*producto.precio).toLocaleString('es-ES')}`
    const clone = templatecarrito.cloneNode(true);
    fragment.appendChild(clone);
    templatecarrito.querySelector('.sumar').setAttribute('data-value', producto.codigo)
  })
  const nCantidad = Object.values(obj).reduce((acc, {cantidad}) => acc + cantidad, 0)
  const nTotal   = Object.values(obj).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
  divCarrito.innerHTML = `<h5 class="h4 text-white border text-end py-0 px-2 m-0 ">Cantidad total: ${nCantidad} <br>Total de la compra: $${nTotal.toLocaleString('es-ES')}</h5>`
  divCarrito.prepend(fragment)
  const lsCarrito = localStorage.setItem("lsCarrito", JSON.stringify(obj))
  
}

//               AGREGA ELEMENTOS DEL CARRITO A LAS CARDS Y VUELVE A PINTAR EL CARRITO(SIEMRPE SE PISA)
  const addCarrito = e => {
    if (e.target.classList.contains('comprar')){
      setCarrito(e.target.parentElement.parentElement)
      pintarcarrito(carrito)
    }
    e.stopPropagation()
  } 
  
//               AGREGAR EL PRODUCTO SELECCIONADO AL CARRITO (CREO QUE ESTO EM GENERA UN OBJETO NO INDEXADO)
  const setCarrito = objeto => {
  
    const producto = {
      codigo: objeto.querySelector('.card-footer .card-text').getAttribute('data-value'),
      nombre: objeto.querySelector('.card-footer .card-text').textContent,
      precio: objeto.querySelector('.card-footer h6').getAttribute('data-value'),
      cantidad : 1
    }
    
    if(carrito.length < 1){
      carrito.push(producto)
    }else{
  
        let existeproducto = carrito.find((car, i) => {
        if (car.codigo === producto.codigo) {
          car.cantidad += producto.cantidad
          return true
        
        }else{
          return false
        }
        })   
        if(existeproducto){
            

        }else{
          carrito.push(producto)
        }
    }
  }

//                BOTONES DEL CARRITO

  const sumarCarrito = objeto => {
    let  carProducto = objeto.querySelectorAll('.carritoProductos')
    carProducto.forEach( (btn) => {
      btn.addEventListener("click", (e) => {
        const productoid = btn.querySelector('.carritoArticulo').getAttribute('data-value')
        carrito.find((car, i) => {
          if (car.codigo === productoid) {
            car.cantidad ++
            pintarcarrito(carrito)
          }
        })

      pintarcarrito(carrito)
      })
      btn.stopPropagation
    })    
  }

  const restarCarrito = objeto => {
    let carProducto = objeto.querySelectorAll('.carritoProductos')
    carProducto.forEach( (btn) => {
      btn.addEventListener("click", (e) => {
        const productoid = btn.querySelector('.carritoArticulo').getAttribute('data-value')
       
        carrito.find((car, i) => {
        if (car.codigo === productoid) {

          if (car.cantidad <= 1) {
            carrito.splice(i,1)
            }else{
              car.cantidad--
              pintarcarrito(carrito)
            }
          }

        })
        
      pintarcarrito(carrito)
    })
	  	btn.stopPropagation
      
    })    
  }

  //			Lista las categorias de los productos
	const listarCategorias = productos =>{
		productos.forEach( (e) => {
			if (!categorias.includes(e.categoria) ){
        categorias.push(e.categoria)
		  }
		})
	} 

///		PINTA LOS FILTROS DE LA NAVBAR SEGUN LISTA DE CATEGORIAS (SE PUEDE OPTIMIZAR PARA TENER MAS FILTROS)		

	const pintarFiltros = productos => {

	  categorias.push(listarCategorias(productos))
	  categorias.pop()
	  categorias.forEach( e => {
	  listCategorias.querySelector('.categoria .form-check-label').textContent = [e];
	  listCategorias.querySelector('.form-check-input').setAttribute('value', e )
	  const clone = listCategorias.cloneNode(true);
	  fragment.appendChild(clone);
	});
  
	navfilters.appendChild(fragment)
	
  } 

  //                  Order By

 const ordenarAsc = arr => { 
  arr.sort( (a,b) => {
  const nameA = a.nombre.toUpperCase()
  const nameB = b.nombre.toUpperCase()
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
})
} 

const ordenarDesc = arr => { 
  arr.sort( (a,b) => {
  const nameA = a.nombre.toUpperCase()
  const nameB = b.nombre.toUpperCase()
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }
  return 0;
}) 
} 

const menoramayor = () => {prodFiltrados.sort((a,b) => a.precio - b.precio)}
const mayoramenor = () => {prodFiltrados.sort((a,b) => b.precio - a.precio)}

//                      Filtrar Productos

const filtrarArticulos = ( () => {

  const categoriasexistentes = document.querySelectorAll('.checkbox')
  
  let contador = 0
  
  categoriasexistentes.forEach( (e) => {
      let tempCategoria = (e.getAttribute('value') )
      if(e.checked){

          productos.forEach( (e) => {
            if(e.categoria === tempCategoria){
                  if(!prodFiltrados.find(({sku}) => sku == e.sku )  ){
                    prodFiltrados.push(e)
                  }
              }
          });
      }else{

          contador++
          prodFiltrados = prodFiltrados.filter(function(e) {
            if(e.categoria != tempCategoria){
            return (e)
          }
          });
          if(categoriasexistentes.length === contador){
            prodFiltrados = productos
          };
      }
  })
})

//               Buscar productos

const buscarArticulo = ((buscado) => {
  
  prodFiltrados = productos.filter(function(e) {
    if(e.nombre.toUpperCase().includes(buscado.value.toUpperCase())){
      return (e)
    }
  })
    
  })



//
//         EVENTOS
//

//                Escucha los productos para agregar al carrito    
  cardproductos.addEventListener('click',(e) => {
    addCarrito(e)
  })

  divCarrito.addEventListener('click',(e) => {
    if(e.target.classList.contains('sumar'))
    {
     
      sumarCarrito(e.currentTarget.parentElement.parentElement.parentElement)
	e.stopPropagation
      
}else if(e.target.classList.contains('restar')){
  restarCarrito(e.currentTarget.parentElement.parentElement.parentElement)
	e.stopPropagation
}
e.stopPropagation
})

//                Escucha los botones sumar y restar

  eOrdernar.addEventListener('click',(e) =>{
    if(e.target.classList.contains('ascendente')){
      ordenarAsc(prodFiltrados)
      pintarCards(prodFiltrados)
      
    }else if(e.target.classList.contains('descendete')){
      ordenarDesc(prodFiltrados)
      pintarCards(prodFiltrados)
    }else if(e.target.classList.contains('mayor')){
      mayoramenor()
      pintarCards(prodFiltrados)
    }else if(e.target.classList.contains('menor')){
      menoramayor()
      pintarCards(prodFiltrados)
    }
    e.stopPropagation
  })
  
  //    Escucha los botones de Filtros

  navfilters.addEventListener('change',(e) => {


    if (e.target.checked){
      filtrarArticulos()
      pintarCards(prodFiltrados)
      e.stopPropagation
    }else{
          filtrarArticulos()
          e.stopPropagation
      
   pintarCards(prodFiltrados)
      
    }
    e.stopPropagation()
    
    })


    const tSearch = document.querySelector('.search')
    tSearch.addEventListener('input', function () {
      buscarArticulo(this)
      pintarCards(prodFiltrados)
      e.stopPropagation()
    } )
/* HASTA ACA """""ORDERNADO"""""  */


  

	const pintarMenu = productos => {

	  categorias.push(listarCategorias(productos))
	  categorias.pop()
	  categorias.forEach( e => {
      let x = document.createElement('li')
      x.textContent = [e]
      x.setAttribute('value',[e])
      x.setAttribute('class', 'dropdown-item text-style item-menu')
	    fragment.appendChild(x);
	});
  
	navMenu.appendChild(fragment)
	
  } 

const navMenu = document.querySelector('.menuProductos')
navMenu.addEventListener('click',(e) => {
  filtrarMenu(e.target.getAttribute('value'))
})

const filtrarMenu = ((categoria) => {
  
    let tempCategoria = categoria
    pintarCards(prodFiltrados.filter(function(e) {
        if(e.categoria === tempCategoria){
            return (e)
          }
      }))
      
    })
  

// Usar para optimizar
/* const filtrarProductos = ((arr, categoria) => {
  arr.filter(function(e) {
    if(e.categoria === tempCategoria){
        return (e)
      }
  })
}) */



  












