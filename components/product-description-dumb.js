class ProductDescription extends HTMLElement {
  static get observedAttributes() {
    return ['description'];
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});

    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    .product-image {
      background: lightgrey;
      padding: 1em;
    }
    </style>
    <div class="product-description">
    </div>`;
        
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('.product-description').innerText = this.getAttribute('description');
  }

  get description() {
    return this.getAttribute('description');
  }
  
  set description(val) {
    this.setAttribute('description', val);
  }

  attributeChangedCallback(description, oldvalue, newvalue) {
    if (description === 'description') {
      this.shadowRoot.querySelector('.product-description').innerText = this.getAttribute('description');
    }
  }
}

window.customElements.define('my-product-description', ProductDescription);