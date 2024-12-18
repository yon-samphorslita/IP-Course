<template>
    <div class="products">
        <div class="product" v-for="product in products" :key="product.name">
            <div v-if="getPromotionLabel(product).label" class="promo" :style="{ backgroundColor: getPromotionLabel(product).color }">
                {{ getPromotionLabel(product).label }}</div>
                <router-link :to="{name: 'productPage',
                params: {name:product.name}
}" >
                  <img class="product-image" :src="getImagePath(product.image)" :alt="product.name">
                  <p class="brand">Hodo Foods</p>
                  <p class="description">{{ product.name }}</p>
                </router-link>
                <div class="rate">
                <svg width="72" height="12" viewBox="0 0 72 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_5980_4)">
                  <path d="M11.4485 4.58588C11.3734 4.35346 11.1672 4.18838 10.9233 4.16639L7.61036 3.86557L6.30032 0.799294C6.20373 0.574575 5.98374 0.429112 5.73932 0.429112C5.49489 0.429112 5.2749 0.574575 5.17831 0.799819L3.86827 3.86557L0.554762 4.16639C0.311303 4.1889 0.105676 4.35346 0.030098 4.58588C-0.0454796 4.81831 0.024318 5.07324 0.208489 5.23394L2.71271 7.43016L1.97427 10.683C1.92024 10.9221 2.01307 11.1694 2.21151 11.3128C2.31818 11.3899 2.44298 11.4291 2.56882 11.4291C2.67733 11.4291 2.78496 11.3999 2.88155 11.3421L5.73932 9.63408L8.59603 11.3421C8.80507 11.4678 9.06858 11.4563 9.26659 11.3128C9.46513 11.1689 9.55787 10.9216 9.50383 10.683L8.7654 7.43016L11.2696 5.23438C11.4538 5.07324 11.5241 4.81874 11.4485 4.58588Z" fill="#FDC040"/>
                  </g>
                  <g clip-path="url(#clip1_5980_4)">
                  <path d="M26.4485 4.58588C26.3734 4.35346 26.1672 4.18838 25.9233 4.16639L22.6104 3.86557L21.3003 0.799294C21.2037 0.574575 20.9837 0.429112 20.7393 0.429112C20.4949 0.429112 20.2749 0.574575 20.1783 0.799819L18.8683 3.86557L15.5548 4.16639C15.3113 4.1889 15.1057 4.35346 15.0301 4.58588C14.9545 4.81831 15.0243 5.07324 15.2085 5.23394L17.7127 7.43016L16.9743 10.683C16.9202 10.9221 17.0131 11.1694 17.2115 11.3128C17.3182 11.3899 17.443 11.4291 17.5688 11.4291C17.6773 11.4291 17.785 11.3999 17.8816 11.3421L20.7393 9.63408L23.596 11.3421C23.8051 11.4678 24.0686 11.4563 24.2666 11.3128C24.4651 11.1689 24.5579 10.9216 24.5038 10.683L23.7654 7.43016L26.2696 5.23438C26.4538 5.07324 26.5241 4.81874 26.4485 4.58588Z" fill="#FDC040"/>
                  </g>
                  <g clip-path="url(#clip2_5980_4)">
                  <path d="M41.4485 4.58588C41.3734 4.35346 41.1672 4.18838 40.9233 4.16639L37.6104 3.86557L36.3003 0.799294C36.2037 0.574575 35.9837 0.429112 35.7393 0.429112C35.4949 0.429112 35.2749 0.574575 35.1783 0.799819L33.8683 3.86557L30.5548 4.16639C30.3113 4.1889 30.1057 4.35346 30.0301 4.58588C29.9545 4.81831 30.0243 5.07324 30.2085 5.23394L32.7127 7.43016L31.9743 10.683C31.9202 10.9221 32.0131 11.1694 32.2115 11.3128C32.3182 11.3899 32.443 11.4291 32.5688 11.4291C32.6773 11.4291 32.785 11.3999 32.8816 11.3421L35.7393 9.63408L38.596 11.3421C38.8051 11.4678 39.0686 11.4563 39.2666 11.3128C39.4651 11.1689 39.5579 10.9216 39.5038 10.683L38.7654 7.43016L41.2696 5.23438C41.4538 5.07324 41.5241 4.81874 41.4485 4.58588Z" fill="#FDC040"/>
                  </g>
                  <g clip-path="url(#clip3_5980_4)">
                  <path d="M56.4485 4.58588C56.3734 4.35346 56.1672 4.18838 55.9233 4.16639L52.6104 3.86557L51.3003 0.799294C51.2037 0.574575 50.9837 0.429112 50.7393 0.429112C50.4949 0.429112 50.2749 0.574575 50.1783 0.799819L48.8683 3.86557L45.5548 4.16639C45.3113 4.1889 45.1057 4.35346 45.0301 4.58588C44.9545 4.81831 45.0243 5.07324 45.2085 5.23394L47.7127 7.43016L46.9743 10.683C46.9202 10.9221 47.0131 11.1694 47.2115 11.3128C47.3182 11.3899 47.443 11.4291 47.5688 11.4291C47.6773 11.4291 47.785 11.3999 47.8816 11.3421L50.7393 9.63408L53.596 11.3421C53.8051 11.4678 54.0686 11.4563 54.2666 11.3128C54.4651 11.1689 54.5579 10.9216 54.5038 10.683L53.7654 7.43016L56.2696 5.23438C56.4538 5.07324 56.5241 4.81874 56.4485 4.58588Z" fill="#FDC040"/>
                  </g>
                  <g clip-path="url(#clip4_5980_4)">
                  <path d="M71.4485 4.58588C71.3734 4.35346 71.1672 4.18838 70.9233 4.16639L67.6104 3.86557L66.3003 0.799294C66.2037 0.574575 65.9837 0.429112 65.7393 0.429112C65.4949 0.429112 65.2749 0.574575 65.1783 0.799819L63.8683 3.86557L60.5548 4.16639C60.3113 4.1889 60.1057 4.35346 60.0301 4.58588C59.9545 4.81831 60.0243 5.07324 60.2085 5.23394L62.7127 7.43016L61.9743 10.683C61.9202 10.9221 62.0131 11.1694 62.2115 11.3128C62.3182 11.3899 62.443 11.4291 62.5688 11.4291C62.6773 11.4291 62.785 11.3999 62.8816 11.3421L65.7393 9.63408L68.596 11.3421C68.8051 11.4678 69.0686 11.4563 69.2666 11.3128C69.4651 11.1689 69.5579 10.9216 69.5038 10.683L68.7654 7.43016L71.2696 5.23438C71.4538 5.07324 71.5241 4.81874 71.4485 4.58588Z" fill="#CDCDCD"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_5980_4">
                  <rect width="12" height="12" fill="white"/>
                  </clipPath>
                  <clipPath id="clip1_5980_4">
                  <rect width="12" height="12" fill="white" transform="translate(15 -4.57764e-05)"/>
                  </clipPath>
                  <clipPath id="clip2_5980_4">
                  <rect width="12" height="12" fill="white" transform="translate(30 -4.57764e-05)"/>
                  </clipPath>
                  <clipPath id="clip3_5980_4">
                  <rect width="12" height="12" fill="white" transform="translate(45 -4.57764e-05)"/>
                  </clipPath>
                  <clipPath id="clip4_5980_4">
                  <rect width="12" height="12" fill="white" transform="translate(60 -4.57764e-05)"/>
                  </clipPath>
                  </defs>
                  </svg>
              <p class="rate">({{product.rating}})</p>
          </div>
              <p class="weight">500 grams</p>
              <div class="cost">
                  <div class="prices">
                      <p class="discount">$2.00</p>
                      <p class="price">${{ product.price }}</p>
                </div>
              <div class="quantity-controls">
                <!-- Show "Add to Cart" when quantity is 0 -->
                  <button 
                      v-if="isInCart(product) === 0" 
                      class="add" 
                      @click="updateQuantity(product, 1)">
                      Add +
                  </button>

                  <!-- Show quantity controls when quantity is greater than 0 -->
                  <div v-else class="activeButton">               

                  <!-- Quantity Display -->
                  <span class="quantity-display" v-if="isInCart(product) > 0">{{ isInCart(product) }}</span>
                  <div class="buttons">
                  <!-- Increase Button -->
                  <button class="increase" @click="updateQuantity(product, 1)">
                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.8">
                      <path d="M7.20544 6.58627L5.00003 4.38085L2.79461 6.58627L2.20544 5.9971L4.41086 3.79169C4.56713 3.63546 4.77906 3.5477 5.00003 3.5477C5.221 3.5477 5.43292 3.63546 5.58919 3.79169L7.79461 5.9971L7.20544 6.58627Z" fill="currentColor"/>
                      </g>
                      </svg>
                  </button>

                  <!-- Decrease Button -->
                  <button 
                      class="decrease" 
                      @click="updateQuantity(product, -1)" 
                      :disabled="isInCart(product) <= 0">
                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.8">
                      <path d="M5.00003 6.70824C4.89061 6.70844 4.78223 6.687 4.68112 6.64517C4.58001 6.60334 4.48816 6.54194 4.41086 6.46449L2.20544 4.25866L2.79461 3.66949L5.00003 5.87491L7.20544 3.66949L7.79461 4.25866L5.58919 6.46408C5.51192 6.54159 5.4201 6.60307 5.31898 6.64498C5.21787 6.68688 5.10948 6.70838 5.00003 6.70824Z" fill="currentColor"/>
                      </g>
                      </svg>
                  </button>     
                </div> 
                </div>             
              </div>
            </div>
          </div>
    </div>
</template>
<script>
export default {
    name: 'Product',
    props: {
        products: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            cart:[]
        }
    },
    methods: {
        getImagePath(image) {
            return new URL(`../assets/${image}`, import.meta.url).href;
        },
        getPromotionLabel(product) {

          let label = '';
          let color = '';

            if (product.promotionAsPercentage) {
                label = `${product.promotionAsPercentage}% Off`; 
                color = '#3BB77E';
            } else if (product.instock && product.instock < 50) {
                label = 'Sale';
                color = '#FDC040';
            } else if (product.countSold && product.countSold > 100) {
                label = 'Hot';
                color = '#FD6E6E'
            }
            return {label,color}; 
        },
        addToCart(product) {
            const foundProduct = this.cart.find(item => item.name === product.name);
            if (foundProduct) {
                foundProduct.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        },
        updateQuantity(product, change) {
    const foundProduct = this.cart.find(item => item.name === product.name);

    if (foundProduct) {
        foundProduct.quantity = Math.max(0, foundProduct.quantity + change);

        // Remove the product if the quantity becomes 0
        if (foundProduct.quantity === 0) {
            const index = this.cart.indexOf(foundProduct);
            this.cart.splice(index, 1);
        }
    } else if (change > 0) {
        // Add the product with a quantity of 1
        this.cart.push({ ...product, quantity: 1 });
    }
},

        isInCart(product) {
        const cartItem = this.cart.find(item => item.name === product.name);
        return cartItem ? cartItem.quantity : 0;
        }
    }
}
</script>
<style scoped>
.products {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}
.product {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5px;
}
.product:hover {
  box-shadow: 0 0 10px gray;
  border: #3BB77E 1px solid;
}
.promo {
  position: absolute;
  top: 10px;
  left: 0px;
  padding: 8px 10px;
  border-radius: 0px 15px 15px 0px;
  color: white;
  font-size: 12px;
}
.product-image {
  width: 150px;
  height: 130px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.brand {
  font-weight: bold;
  color: #666;
  font-size: small;
}
.description {
  margin: 8px 0;
  font-size: 16px;
  font-weight: bold;
  color: #253D4E;
}
.ratings {
  gap: 4px;
}
.price {
  margin: 8px 0;
  font-size: small;
  text-decoration: line-through;
  color: #7E7E7E;
}
.discount {
  color: green;
  font-weight: bold;
  font-size: x-large;
}
.rate {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: fit-content;
  color: #7E7E7E;
}
.weight {
  color: #7E7E7E;
}
.cost {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.prices {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-right: auto;
}
p {
  margin: 5px;
}
.add {
  background-color: #DEF9EC;
  color: #3BB77E;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  position: absolute;
  margin-left: 35px;
}
.add:hover {
  cursor: pointer;
}
.quantity-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.quantity-display {
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 5px;
  width: 5px;
  text-align: center;
  color: #3BB77E;
}
.increase, .decrease {
  background: none;
  display: inline-flex;
  color: #3BB77E;
  margin: 0;
}
.activeButton {
  display: flex;
  flex-direction: row;
  margin-left: 35px;
  border: #3BB77E 2px solid;
  border-radius: 5px;
  height: 30px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}
.buttons {
  display: flex;
  flex-direction: column;
}
a {
  text-decoration: none;
}
</style>