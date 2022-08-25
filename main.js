// Variables
let total = 0
let productos = []
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
                total = 0
                totalcd = 0
                productos = []
                alert("Comprando...")
                alert("espere un segundo...")
                alert("Comprado!")
                }
                else{
                    alert("Usted no compro nada, toque algun articulo para añadirlo al")
                }
        }
    }
    else{
        if(total !=0){
        console.log("En total deberia pagar:", total, " y va a llevar:", productos)
        let comprar = confirm("Lo quiere comprar?")
        if(comprar == true){
                total = 0
                productos = []
                alert("Comprando...")
                alert("espere un segundo...")
                alert("Comprado!")
            }
            }
            else{
                alert("Usted no compro nada, toque algun articulo para añadirlo al carro")
            }
    }
}
// ---------