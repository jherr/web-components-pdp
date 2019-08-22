import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class BuyTools extends HTMLElement {
  constructor() {
     super();
     this._onAddToCart = () => {};
     this._onSelectDog = () => {};
  }
  connectedCallback() {
    this.root = this.attachShadow({mode: 'open'});
    this.render();
  }

  get onAddToCart() {
    return this._onAddToCart;
  }
  set onAddToCart(f) {
    this._onAddToCart = f;
    this.render();
  }

  get onSelectDog() {
    return this._onSelectDog;
  }
  set onSelectDog(f) {
    this._onSelectDog = f;
    this.render();
  }

  disconnectedCallback(){
     ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    ReactDOM.render(
      <App
        onAddToCart={this.onAddToCart}
        onSelectDog={this.onSelectDog}
      />,
      this.root
    );
  }
}

customElements.define('my-buy-tools', BuyTools);
