class procesadores{
    constructor(modelo,core, ghz, precio, imagen){
    this.modelo = modelo
    this.core = core,
    this.ghz = ghz,
    this.precio = precio,
    this.imagen = imagen   
    }
    mostrarData (){
        console.log(`el procesador ${this.modelo} esta compuesto por ${this.core} nucleos e logra llegar a una velocidad media de ${this.ghz} y costa unos ${this.precio}`)
    }
}


// amd
    const procesador1 = new procesadores("ryzen 3350",4, "3.6 GHz","150€", "ryzen-3.jpg")
    const procesador2 = new procesadores("ryzen 5500",6, "4.0 GHZ","200€", "ryzen-5.jpg")
    const procesador3 = new procesadores("ryzen 5700g",8, "4,2 GHz","300€", "ryzen-7.jpg")
    const procesador4 = new procesadores("ryzen 5900x",16, "4,4","400€","ryzen-9.jpg")

    const amd = []
    amd.push(procesador1, procesador2, procesador3, procesador4)

    let divProductos = document.getElementById("productos")
    function mostrarCatalogo(array){
        divProductos.innerHTML = ""
        array.forEach((procesador)=>{
            let nuevoProducto = document.createElement("div")
            nuevoProducto.innerHTML = `<div id="${procesador.modelo}" class="card" style="width: 18rem;">
                                        <img class="card-img-top" style="height: 250px;" src="Amd//${procesador.imagen}" alt="${procesador.modelo}">
                                        <div class="card-body">
                                            <h4 class="card-title">${procesador.modelo}</h4>
                                            <p>core: ${procesador.core}</p>
                                            <p>core: ${procesador.ghz}</p>
                                            <p class="">Precio: ${procesador.precio}</p>
                                            <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                        </div></div>`
            divProductos.append(nuevoProducto)
        })
        let btnCompra = document.getElementsByClassName("btnComprar")
        for(let compra of btnCompra){
        compra.addEventListener("click", ()=>{
            alert("El producto ha sido comprado")
        })
    }
    }
    let btnMostrarCatalogo = document.getElementById("verAmd")
    btnMostrarCatalogo.addEventListener("click", ()=>{
        mostrarCatalogo(amd)
    })


// intel

class intel{
    constructor(modelo,core, ghz, precio, imagen){
    this.modelo1 = modelo
    this.core1 = core,
    this.ghz1 = ghz,
    this.precio1 = precio,
    this.imagen1 = imagen   
    }
    mostrarData (){
        console.log(`el procesador ${this.modelo} esta compuesto por ${this.core} nucleos e logra llegar a una velocidad media de ${this.ghz} y costa unos ${this.precio}`)
    }
}




const IntelProcesador1I = new intel("intel i9 11900" ,"8 nucleos y 16 hilos", "5ghz","521€" ,"i9.jpg")
const IntelProcesador2I = new intel("intel i7 11700f" ,8 ,"4,8ghz" ,"324€" ,"i7.jpg")
const IntelProcesador3I = new intel("intel i5 11400f",6 ,"4,4ghz" ,"174€" ,"i5.jpg")
const IntelProcesador4I = new intel("intel i3 12100", 4 ,"3,3", "160€" ,"i3.jpg")

const intel1 = []
intel1.push(IntelProcesador1I, IntelProcesador2I, IntelProcesador3I, IntelProcesador4I)


let divIntel = document.getElementById("div")
function mostrarIntel(array1){
    divIntel.innerHTML = ""
    array1.forEach((IntelProcesador)=>{
        let nuevoProducto1 = document.createElement("div")
        nuevoProducto1.innerHTML = `<div id="${IntelProcesador.modelo1}" class="card" style="width: 18rem;">
                                    <img class="card-img-top" style="height: 250px;" src="intel//${IntelProcesador.imagen1}" alt="${IntelProcesador.modelo1}">
                                    <div class="card-body">
                                        <h4 class="card-title">${IntelProcesador.modelo1}</h4>
                                        <p>core: ${IntelProcesador.core1}</p>
                                        <p>core: ${IntelProcesador.ghz1}</p>
                                        <p class="">Precio: ${IntelProcesador.precio1}</p>
                                        <button class="btn btn-outline-success btnComprar">Agregar al carrito</button>
                                    </div>`
        divIntel.append(nuevoProducto1)
    })


}

let btnMostrarCatalogoI = document.getElementById("verIntel")
btnMostrarCatalogoI.addEventListener("click", ()=>{
    mostrarIntel(intel1)
})


