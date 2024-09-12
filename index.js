
let precio = 400000;


const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;


let cantidad = parseInt(document.querySelector(".cantidad").innerHTML);
const totalElement = document.querySelector(".valor-total");

function actualizarTotal() {
    const total = precio * cantidad;
    totalElement.innerHTML = total.toFixed(2);
}


actualizarTotal();

document.querySelector("#aumentar").addEventListener("click", () => {
    cantidad++;
    document.querySelector(".cantidad").innerHTML = cantidad;
    actualizarTotal();
});

document.querySelector("#disminuir").addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        document.querySelector(".cantidad").innerHTML = cantidad;
        actualizarTotal();
    }
});
