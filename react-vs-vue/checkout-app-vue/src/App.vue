<template>
  <div id="app">
    <div class="products-list">
      <div class="products" v-for="(product,index) in products" :key="index">
        <h2>{{product.name}}: ${{product.price}}</h2>
        <button @click="addToCart(index);">Add to cart</button>
      </div>
    </div>

    <hr>
    <p>Cart Items</p>
    <p>Total price: ${{calculateTotalPrice()}}</p>
    <!-- Cart GOes here -->
    <div class="cart-list">
      <div class="products" v-for="(product,index) in cart" :key="index">
        <h2>{{product.name}}: ${{product.price}}</h2>
        <button @click="addToCart(index);">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: "Shirt", price: 20 },
        { name: "Pants", price: 40 },
        { name: "Shoes", price: 60 },
        { name: "Hat", price: 20 }
      ],
      cart: []
    };
  },
  methods: {
    addToCart(index) {
      this.cart = this.cart.concat(this.products[index]);
    },
    calculateTotalPrice() {
      return this.cart.reduce((price, product) => price + product.price, 0);
    }
  }
};
</script>


<style scoped>
.products {
  padding: 20px;
  max-width: 300px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ddd;
}
</style>
