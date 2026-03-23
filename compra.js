// compra.js
function comprar(btn) {
    const numero = "59173053670"; // Tu número de WhatsApp
    const nombre = btn.getAttribute("data-nombre");
    const precio = btn.getAttribute("data-precio");
    const imagen = btn.getAttribute("data-imagen");

    const mensaje = `Hola, quiero comprar:
🌸 Producto: ${nombre}
💰 Precio: ${precio}

📸 Imagen:
${imagen}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}