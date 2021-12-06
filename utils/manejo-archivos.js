const fs = require('fs')

class Contenedor {
    constructor(url) {
        this.url = url
    }
    async getAll() {
        try {
            const data = await fs.promises.readFile(this.url, 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            throw console.log(`Hubo un error: ${error}`);
        }
    }

    async getById(id) {
        const prod = await this.getAll()
        try {
            let element = prod.find(it => it.id == id)
            if (element == undefined) {
                return null
            } else {
                return console.log(element);
            }
        } catch (error) {
            console.log(`No se encontro el elemento`);
        }

    }

    async deleteAll() {
        let empty = ''
        await fs.promises.writeFile(this.url, empty, 'utf-8')
    }

    async deleteById(id) {
        const prod = await this.getAll();
        const prodSelec = prod.find(it => it.id == id)
        let indexProdSelecc = prod.indexOf(prodSelec)
        const remove = prod.splice(indexProdSelecc, 1)
        let newJSON = JSON.stringify(prod)
        fs.writeFile(this.url, newJSON, error => {
            if (error) {
                console.log(`No se pudo eliminar el elemento`)
            } else {
                console.log(`Elemento con id:${prodSelec.id} fue eliminado, Archivo modificado`);
            }
        })
    }

    async save(obj) {
        const prod = await this.getAll();
        let newId
        if (prod.length === 0) {
            newId = 1
        } else {
            newId = prod.length + 1
        }
        const newObj = {
            ...obj,
            id: newId
        }
        prod.push(newObj)
        let newJSON = JSON.stringify(prod)
        try {
            await fs.promises.writeFile(this.url, newJSON)
            return console.log(newId);
        } catch (error) {
            console.log(`No se pudo eliminar el elemento`, error)
        }
    }
}

module.exports = Contenedor
