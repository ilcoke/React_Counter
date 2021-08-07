import "@testing-library/jest-dom"
import { getSaludo } from "../../base/02-template-string"


//Primeros test

describe('Pruebas a 02-template-string-js', () => {
    test('getSaludo deve entregar Hola Usuario ', () => {
        const nombre = "usuario";
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre)
    })
    test('getSaludo deve entregar Hola Carlos ', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos')
    })
})