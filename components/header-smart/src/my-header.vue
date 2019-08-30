<template>
  <header>
    <div>
      Header
    </div>
    <div>
      {{ count }} dogs to adopt
    </div>
  </header>
</template>

<script>
export default {
  name: 'my-header',
  data: () => ({
    count: 0,
  }),
  mounted() {
    window.addEventListener('cartChange', () => {
      this.count = window.pdp.cart.count;
    });
  }
}
</script>

<style>
header {
  background: lightsalmon;
  padding: 1em;
  display: grid;
  grid-template-columns: 80% 20%;
}
</style>
