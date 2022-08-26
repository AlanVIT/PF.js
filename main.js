// Definiciones
let total = 0
let productos = []
const day =  new Date().getUTCDate()+"-"+new Date().getMonth()+"-"+ new Date().getUTCFullYear()
const nombrePersona = prompt("Como te llamas?")
class compras{
    constructor(nombre ,precio, fecha){
    this.nombre = nombre
    this.precio = precio
    this.fecha = fecha
    }
  }
// ---------

// Funciones
function sumarValor(valor, producto){
    total = total + valor
    productos.push(producto)
}

function carro(){
    if(total >= 10000){
        let totalcd = total - (total*0.10)
        if(total !=0){
        console.log("En total deberia pagar:", totalcd,"el descuento es ", total*0.10 , " y va a llevar:", productos)
        let comprar = confirm("Lo quiere comprar?")
        if(comprar == true){
                totalcd = 0
                productos = []
                alert("Comprando...")
                alert("espere un segundo...")
                alert("Comprado!")
                // new compras(nombrePersona, total, new Date().getDate())
                }
                else{
                    alert("Usted no compro nada, toque algun articulo para añadirlo al")
                }
                let recipt = confirm("quiere recivo?")
                if (recipt = true) {
                    const compra = new compras(nombrePersona, total, day)
                    console.log('info compra ',compra)
                }
            total = 0
        }
    }
    else{
        if(total !=0){
        console.log("En total deberia pagar:", total, " y va a llevar:", productos)
        let comprar = confirm("Lo quiere comprar?")
        if(comprar == true){
                productos = []
                alert("Comprando...")
                alert("espere un segundo...")
                alert("Comprado!")
            }
            }
            else{
                alert("Usted no compro nada, toque algun articulo para añadirlo al carro")
            }
            let recipt = confirm("quiere recivo?")
            if (recipt = true) {
                const compra = new compras(nombrePersona, total, day)
                console.log('info compra ',compra)
            }
            total = 0

    }
}

// ---------