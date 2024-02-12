import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './components/HelloWorld';
class WebComponent extends HTMLElement {
    connectedCallback() {

        const date = new Date().toLocaleString();

        const mountPoint = document.createElement('span');
        this.attachShadow({ mode: 'open' }).append(mountPoint);
    
        const name = this.getAttribute('name');
        const root = ReactDOM.createRoot(mountPoint);
        root.render(
            <>
                {/* <p>{name}</p> */}
                <span>{date}</span>
                <p>This is a web component</p>
                <HelloWorld />
            </>
        );
    }
}

customElements.define('current-date', WebComponent);