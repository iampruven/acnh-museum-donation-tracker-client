import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import { MemoryRouter } from 'react-router-dom';
//smoke test
describe('renders without crashing',()=>{
    it('it renders without crashing',()=>{
        const div = document.createElement('div');

        ReactDOM.render(<MemoryRouter><LoginPage history={{}}/></MemoryRouter>,div);
        ReactDOM.unmountComponentAtNode(div);
    })



})