import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
    state: () => ({
        groups: [],
        promotions: [],
        categories: [],
        products: [],
    }),
    actions: {
        async fetchGroups() {
            try {
            const response = await axios.get('http://localhost:3000/api/groups');
            this.groups = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchPromotions() {
            try {
            const response = await axios.get('http://localhost:3000/api/promotions');
            this.promotions = response.data;
            } catch (error) {
                console.error(error);
            }   
        },
        async fetchCategories() {
            try {
            const response = await axios.get('http://localhost:3000/api/categories');  
            this.categories = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async fetchProducts() {
            try {
            const response = await axios.get('http://localhost:3000/api/products');
            this.products = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async initializeData() {
            try {
                await Promise.all([
                    this.fetchGroups(),
                    this.fetchPromotions(),
                    this.fetchCategories(),
                    this.fetchProducts(),
                ]);
            } catch (error) {
                console.error(error);
            }
        },
    },
});