import React from 'react';
import "@testing-library/jest-dom"
import {shallow} from 'enzyme'
import PrimerApp from '../PrimerApp'


describe('Revisa componente primer app', () => {
    test('should show <primerApp />', () => {
        const saludo = 'Hola Terricola';
        const wrapper = shallow(<PrimerApp saludo ={saludo}/>);
        expect( wrapper ).toMatchSnapshot()
    })
    
})
