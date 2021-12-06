const Contenedor = require('../utils/manejo-archivos')
const randomKeyFromLength = require('../utils/random-key-from-length')
const iniciarDatos = require('../utils/iniciar-datos')

const ruta = './productos.txt'

const contenedor = new Contenedor(ruta)


const getProductos = async (req, res) => {
    let productos = await contenedor.getAll()
    res.json({
        status: 200,
        productos
    })
}

const getProductoRandom = async (req, res) => {
    let productos = await contenedor.getAll()
    let productoRandom = productos[randomKeyFromLength(productos.length)]

    res.json({
        status: 200,
        productoRandom
    })
}

const iniciar = () => {
    iniciarDatos(contenedor)
}

module.exports = {
    getProductos,
    getProductoRandom,
    iniciar
}