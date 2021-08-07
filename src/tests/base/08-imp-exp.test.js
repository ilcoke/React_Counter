import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('test 08-imp-exp-js', () => {
    test('debe entregar arreglo con heroes DC', () => {
        const dueno = 'DC';
        const DC = heroes.filter(h => h.owner === dueno);
        const dcHeroes = getHeroesByOwner(dueno);

        expect(DC).toEqual(dcHeroes)
    
    })
    test('debe entregar arreglo con heroes marvel', () => {
        
        const dueno = 'Marvel';
        const heroes = getHeroesByOwner(dueno);

        expect(heroes.length).toBe(2)
    
    })
})

