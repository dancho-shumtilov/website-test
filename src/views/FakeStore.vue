<template>
    <h1>{{ title }}</h1>
    <div 
        v-for="product in products"
        class="test"
        v-bind:key = 'product.id'    
    >
            <h3>{{product.id}}</h3>
            <h4>{{product.category}}</h4>
            <img class='product-img' v-bind:src="product.image" alt="">
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FakeStore',
    data() {
        return {
            title: 'Fake Store',
            products: [],
        }
    },   
    
    //Getting Data using Axios library
    async created() {
        const result = await axios.get('https://fakestoreapi.com/products');
        const products = result.data;
        this.products = products;
        console.log(products[0]);
    },

    //Getting Data with fetch (without axios library)
    // beforeMount(){
    //     this.getName();
    // },
    // methods: {
    //     async getName() {
    //         const apiData = await fetch('https://fakestoreapi.com/products');
    //         const data = await apiData.json();
    //         this.products = data;
    //         console.log(data);
    //     }
    // },
}
</script>

<style scoped>
.product-img {
    display: block;
    width: 300px;
    max-width: 100%;;
}
</style>