import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class BuyTools extends HTMLElement {
  connectedCallback() {
    this.root = this.attachShadow({mode: 'open'});
    this.render();
  }

  disconnectedCallback() {
     ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    ReactDOM.render(
      <App
        parentElement={this}
      />,
      this.root
    );
  }
}

customElements.define('my-buy-tools', BuyTools);
