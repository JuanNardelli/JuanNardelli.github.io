  //PROYECTO DE PAGINA DE VENTA DE PRODUCTOS DECORATIVOS



  //mensaje de bienvenida (utilize sweet alerts linkeado al css)

/*function saludar(usuario){


  Swal.fire("ඞ Bienvenido!! No olvides seguirnos en nuestras redes! ඞ ");

}
saludar(" ");
*/

//barra de desplazamiento/ click
 


const hamburguer = document.querySelector('.hamburger');

const menu = document.querySelector('.menu-navegacion');


console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener('click', ()=>{
   menu.classList.toggle("spread")
  
})

window.addEventListener('click', e=>{
   if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer  ){
          menu.classList.toggle("spread")
   }
})





















/*
 //CARRITO DE COMPRAS (AGREGAR Y QUITAR OBJETOS EN EL ARRAY DEL CARRITO)

function agregarAlCarrito(carrito, objeto){
        carrito.push(objeto);
    }
     
    var carro = [] 
    
    agregarAlCarrito(carro, "peluche")
    agregarAlCarrito(carro, "llavero")
    
    
  // alert(carro)
    //cambiar
    
    function eliminarDelCarrito(carrito, objeto){
          let i = carrito.indexOf(objeto);
          carrito.splice(i,1)
    
    }
    function duplicarObjetoDelCarrito(carrito, objeto){

      carrito.push(objeto);


      }

*/

  //Seleccion de tipo de pago


//cambiar el alert y los prompts
  //alert(`Tu compra sera: ${carro}`)
  //let = prompt("Elije metodo de pago: ||Efectivo(1)|| ||Tarjeta(2)||  ||Monedero Virtual(3)||  ")
  
  /*
  switch(metodoPago){
   case '1':
       console.log('Pagaras con efectivo');
       break;
   case '2':
       console.log('Pagaras con tarjeta');
       break;
   case '3':
       console.log('Pagaras con monedero virtual');
       break;
       default:
       console.log('Selecciona un metodo de pago disponible');
       break;   

    }
   
   
    //confirmacion de compra tras elegir metodo de pago


    let entrada    = prompt("INGRESAR SUSPECT PARA CONFIRMAR COMPRA");
    let ingresados = '';
while (entrada != 'SUSPECT') {
    ingresados += entrada +"\n";
    entrada     = prompt("ERROR DE TIPEO, INGRESE SUSPECT PARA CONFIRMAR");
}


function Producto(nombre, precio, NMS){

  this.nombre = nombre
  this.precio = precio
  this.NMS = NMS

}
 

let nombreProducto = prompt("Nombre del producto");
let precioProducto = prompt("Precio del producto");
let Llavero = new prompt(nombreProducto, precioProducto);

console.log(Llavero)


arr4[0] = null;

console.log(arr4 [0])

for(let i=0; i < arr4.length; i += 1){
    if(arr4[i]===null)
    console.log("Salto")
    continue
    document.write(arr4[i] + '<br>');
}
*/
