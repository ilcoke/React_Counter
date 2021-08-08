import React from 'react';
import "@testing-library/jest-dom"
import {shallow} from 'enzyme'
import CounterApp from '../CounterApp ';


describe('Revisa componente primer app', () => {
    test('should show <primerApp /> whith 0 defoult', () => {
        const wrapper = shallow(<CounterApp />);
        expect( wrapper ).toMatchSnapshot()
    })
    test('should show <PrimerApp /> with 100 ', () => {
        const wrapper = shallow(<CounterApp value = {100}/>);
        const findValue = wrapper.find('h2').text().trim();
        expect(findValue).toBe('100')
    })
    
})
