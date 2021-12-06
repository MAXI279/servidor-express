let prod1 = {
    title: "Pelota de Futbol",
    price: 310,
    thumbnail: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/1404.png",
}
let prod2 = {
    title: "Pelota de Tenis",
    price: 20,
    thumbnail: "https://d3ugyf2ht6aenh.cloudfront.net/stores/966/664/products/t08091-53a7ef085bc9ae28d315688088530529-1024-1024.jpg",
}

const iniciarDatos = async (contenedor) => {
    await contenedor.save(prod1) 
    await contenedor.save(prod2)
    await contenedor.save(prod2)
}

module.exports = iniciarDatos