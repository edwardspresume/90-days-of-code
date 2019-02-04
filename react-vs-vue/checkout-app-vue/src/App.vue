<template>
  <div id="app">
    <div class="products-list">
      <Product
        class="products"
        v-for="(product,index) in products"
        :key="index"
        v-bind:product="product"
        @addedToCart="handleCartAdd"
        :showAddButton="true"
      ></Product>
    </div>

    <hr>
    <p>Cart Items</p>
    <p>Total price: ${{calculateTotalPrice ()}}</p>
    <!-- Cart GOes here -->
    <div class="cart-list">
      <Product
        class="products"
        v-for="(product,index) in cart"
        :key="index"
        v-bind:product="product"
        :showAddButton="false"
      ></Product>
    </div>
  </div>
</template>

<script>
import Product from "./components/Product";

export default {
  name: "App",
  components: {
    Product
  },
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
    handleCartAdd(name) {
      const index = this.products.findIndex(product => product.name === name);
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
