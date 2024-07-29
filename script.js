/*-------1-------*/

let diccionario=[{
    palabra:"peregrino",
    definicion:"Persona que anda o viaja por tierras extrañas que presentan dificultades.",
    },{
    palabra:"berenjena",
    definicion:"Planta de fruto comestible, generalmente anual, del género Solanum dentro de la familia de las solanáceas",
    },{
    palabra:"bucle",
    definicion:"Secuencia de instrucciones de código que se ejecuta repetidas veces.Curva en forma de rizo que se forma en determinadas cosas. ",
    },{
    palabra:"estetoscopio",
    definicion:"Instrumento médico que sirve para explorar los sonidos producidos por los órganos de las cavidades del pecho y del abdomen.",
    },{
    palabra:"recoleccion",
    definicion:"Acción o actividad de recolectar los frutos de la tierra. Conjunto de frutos recolectados.",
    }]

    function mostrarDefinicion() {
        let palabraIngresada = document.getElementById("palabra").value.toLowerCase();
        let recuadroCeleste = document.getElementById("recuadroCeleste");
        let definicionEncontrada = false;

        for (palabra of diccionario) {
            if (palabra.palabra.toLowerCase() === palabraIngresada) {
                recuadroCeleste.innerHTML = `<p>${palabra.definicion}</p>`;
                definicionEncontrada = true;
                break; 
            }
        }

        if (!definicionEncontrada) {
            recuadroCeleste.innerHTML = "<p>Palabra no encontrada en el diccionario.</p>";
        }
    }

/*------2------*/

// let comprar=0;


// let subTotal=0;
// const listaPrevia=()=>{
//     console.dir(document.querySelectort("#input"))
// }

// let cantidadProductos = 0;

// function sumarTotal() {
//   cantidadProductos++;
//   actualizarCantidadProductos();


let contador = 0;
let total = 0;

function comprarProducto() {
    contador++;
    total += 2500; 

    actualizarContadorYTotal();
}

function sacarProducto() {
    if (contador > 0) {
        contador--;
        total -= 2500; 

        actualizarContadorYTotal();
    }
}

function actualizarContadorYTotal() {
    let contadorElement = document.getElementById("contador");
    let totalElement = document.getElementById("total");

    contadorElement.textContent = contador;
    totalElement.textContent = total;
}


/*------3-----*/

let usuarioAdministrador = "Cosme Fulanito";
let password = "Admin123";
let productos = [
  {
    nombre: "remera",
    precio: 2500,
    stock: 40,
  },
  {
    nombre: "buzo",
    precio: 5750,
    stock: 32,
  },
];

let ingresoUsuario = prompt("Ingrese su nombre de usuario:");
let ingresoPassword = prompt("Ingrese su contraseña:");


if (ingresoUsuario === usuarioAdministrador && ingresoPassword === password) {
  while (true) {
    
    let nombreProducto = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let stock = parseInt(prompt("Ingrese la cantidad en stock del producto:"));

    
    let nuevoProducto = {
      nombre: nombreProducto,
      precio: precio,
      stock: stock,
    };

    
    productos.push(nuevoProducto);

    let continuar = confirmar("¿Desea agregar otro producto?");
    if (!continuar) {
      break; 
    }
  }

  
  console.log("Lista de productos actualizada:");
  for (let producto of productos) {
    console.log(`Nombre: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${producto.stock}`);
  }
} else {
  alert("Usuario o contraseña incorrectos. No tiene permiso para agregar productos.");
}


/*-------4------*/

// let sacar=0;
// let cancion=["mi","barba","tiene","tres","pelos"]

// let boton=document.getElementsByTagName("button")[0];


// let sacarPalabra=()=>{
// console.dir(document.querySelector())

// } 

let cancion = ["mi", "barba", "tiene", "tres", "pelos"];


function mostrarFrase() {
    let fraseElement = document.getElementById("frase");
    fraseElement.textContent = cancion.join(" ");
}


function sacarPalabra() {
    let palabraInput = document.getElementById("input").value.toLowerCase(); 

    
    let indicePalabra = cancion.indexOf(palabraInput);

    if (indicePalabra !== -1) { 
        cancion.splice(indicePalabra, 1); 
        mostrarFrase(); 
    }
}

mostrarFrase();


/*------5---------*/    

// let h3=document.querySelector('.h3')
// let tema=document.querySelector('.tema')
// let fondo=document.querySelector('.fondo')

// h3.onmouseover=function(){
//     tema.style.backgroundImage='url(./imagenes/murcielago.png)';
//     fondo.style.backgroundColor= 'darkblue';
// };


let tituloNoche = document.getElementById("tituloNoche");
let murcielagoImg = document.getElementById("murcielago");

tituloNoche.addEventListener("mouseover", function() {
    
    document.querySelector(".tema").style.backgroundColor = "darkblue";
  
    murcielagoImg.style.display = "block";
});

tituloNoche.addEventListener("mouseout", function() {
    
    document.querySelector(".tema").style.backgroundColor = "";

    
    murcielagoImg.style.display = "none";
});


// lo que no se es porque se agranda tanto la imagen y depende como toque el boton pareciera que se tilda




