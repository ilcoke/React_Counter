import React from 'react';
import reactDom from 'react-dom';
import CounterApp from './CounterApp ';
import PrimerApp from './PrimerApp';
import './style.css'


const divRoot = document.querySelector("#root");

reactDom.render( <CounterApp value={1} /> , divRoot)

