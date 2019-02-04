<template>
  <div class="products">
    <h2>{{product.name}}: ${{product.price}}</h2>
    <button @click="addToCart(product.name)" v-if="showAddButton">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
    showAddButton: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    addToCart(name) {
      this.$emit("addedToCart", name);
    }
  }
};
</script>

<style>
</style>
