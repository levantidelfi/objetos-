let productoUno = {
    nombre: "Batidora Kitchenaid",
    precio: 19000,
    disponibilidad: true,
}

console.log(productoUno.nombre)
console.log(productoUno.precio)
console.log(productoUno.disponibilidad)

function Producto(nombre, precio, disponibilidad){
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;

    this.stock = function stock(){
         
        switch(prompt("Ingrese producto")){
           case "Producto 1":
            alert("Producto disponible")
            break;
           case "Producto 2":
            alert("Producto sin stock")
            break;
        
    }
     
}
}


let Producto1 = new Producto("Batidora Kitchenaid", 40000, true);
let Producto2 = new Producto("Olla Essen", 19000, false);

console.log(Producto1)
console.log(Producto2)

Producto1.stock();
Producto2.stock();
