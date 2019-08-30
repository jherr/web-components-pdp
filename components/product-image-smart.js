const template = document.createElement('template');
template.innerHTML = `
<style>
.product-image {
  background: lightgrey;
  padding: 1em;
}
</style>
<div class="product-image">
  <img style="height: 300px"></img>
</div>`;

class ProductImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('img').src = window.pdp.product.image;
    window.addEventListener('productChange', () => {
      this.shadowRoot.querySelector('img').src = window.pdp.product.image;
    });
  }
}

window.customElements.define('my-product-image', ProductImage);