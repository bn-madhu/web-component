import React from 'react';
import ReactDOM from 'react-dom';
import createWebComponent from 'react-web-component';
import HelloWorld from './components/HelloWorld';

// const HelloWorldWebComponent = createWebComponent(HelloWorld, React, ReactDOM);
const HelloWorldWebComponent = createWebComponent(HelloWorld);

customElements.define('hello-world-web-component', HelloWorldWebComponent);