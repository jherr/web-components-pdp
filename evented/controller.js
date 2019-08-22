const bt = document.querySelector('my-buy-tools');
bt.onAddToCart = () => window.pdp.cart.addToCart();
bt.onSelectDog = (desc, img) => window.pdp.product.setProduct(desc, img);

document.querySelector('my-product-image').src = window.pdp.product.image;
window.addEventListener('productChange', () => {
  document.querySelector('my-product-image').src = window.pdp.product.image;
});

document.querySelector('my-header').count = window.pdp.cart.count;
window.addEventListener('cartChange', () => {
  document.querySelector('my-header').count = window.pdp.cart.count;
});
