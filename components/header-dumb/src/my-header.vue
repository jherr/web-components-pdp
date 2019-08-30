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
  props: ['count'], 
  name: 'my-header',
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
