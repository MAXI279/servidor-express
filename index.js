const express = require('express')
require('dotenv').config()
const { getProductos, getProductoRandom, iniciar } = require('./controllers/productos')

const app = express()
const PORT = process.env.PORT || 8080

app.get('/productos', getProductos)

app.get('/productoRandom', getProductoRandom)

iniciar()

app.listen(PORT, () => {
    console.log('Servidor Online')
})