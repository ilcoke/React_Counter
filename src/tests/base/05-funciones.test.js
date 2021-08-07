import { getUsuarioActivo } from "../../base/05-funciones";
import "@testing-library/jest-dom"

describe('revision 05-funciones.js', () => {
    test('getUsuarioActivo Debe entregar una clase ', () => {
        const nombre = 'Pedro';
        const usuario = {
            uid: 'ABC567',
            username: nombre
        }
        const usuarioActivo = getUsuarioActivo(nombre);
        
        expect(usuario).toEqual(usuarioActivo)
    })
    
})
