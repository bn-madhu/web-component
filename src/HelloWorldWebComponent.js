import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import createWebComponent from 'react-web-component';
import HelloWorld from './components/HelloWorld';
import ButtonComponent from './components/ButtonComponent';

class WebComponent extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(
            <>
                <HelloWorld />
                <ButtonComponent />
            </>,
            this
        );
    }
    // connectedCallback() {
    //     const mountPoint = document.createElement('div');
    //     // this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    //     const root = ReactDOM.createRoot(mountPoint);

    //     root.render(
    //         <>
    //             <p className='px-4 paragraph'>This is a web component</p>
    //             <HelloWorld />
    //             <ButtonComponent />
    //         </>
    //     );
    // }
}

window.customElements.define('hello-world-web-component', WebComponent);