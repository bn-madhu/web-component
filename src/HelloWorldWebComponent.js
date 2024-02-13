import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createWebComponent from 'react-web-component';
import HelloWorld from './components/HelloWorld';
import ButtonComponent from './components/ButtonComponent';

// const HelloWorldWebComponent = createWebComponent(HelloWorld);
class WebComponent extends HTMLElement {
    // constructor(){
    //     super();
    //     this.shadowRoot = this.attachShadow({mode: 'open'});
    // }
    connectedCallback() {
        const mountPoint = document.createElement('custom-web-component', this.className="madhu clearfix d-block p-6 ");
        this.attachShadow({ mode: 'open' }).append(mountPoint);
        const root = ReactDOM.createRoot(mountPoint);
        // this.shadowRoot.innerHTML = '';
        root.render(
            <>
                <p>This is a web component</p>
                <HelloWorld />
                <ButtonComponent />
                <span style={{float: 'right'}}>{new Date().toLocaleString()}</span>
            </>
        );
    }
}

customElements.define('hello-world-web-component', WebComponent);