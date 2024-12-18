<template>
<Header />
  <div v-for="product in products" :key="product.name" class="container">
    <div class="directory" v-if="product.name === productName">
      <div class="direct">Home > Vegetables & Tubers > </div>
      <div class="name">{{product.name}}</div>
    </div>
    <div class="content" v-if="product.name === productName">
      <div class="product" >
        <div class="image">
          <img
            class="product-image"
            :src="getImagePath(product.image)"
            :alt="product.name"
          />
        </div>
          <div class="product-info"> 
            <div class="product-images">
              <div v-for="image in product.images" :key="image" class="product-image">
                <img :src="getImagePath(image)" :alt="product.name" />
              </div>
            </div>
          <h1 class="title">{{ product.name }}</h1>
          <div class="rate">
            <!-- Dynamic star rating -->
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
            <p class="rate">({{ product.rating }})</p>
          </div>
          <div class="cost">
            <div class="prices">
              <h1 class="discount">$2.00</h1>
              <del class="price">${{ product.price }}</del>
            </div>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!
          </p>
          <div class="add">
            <!-- Quantity Selector -->
            <div class="amount">
              <button @click="decrementQuantity" class="quantity-btn">
              </button>
              <input type="number" v-model="quantity" min="1" class="quantity-field" />
              <button @click="incrementQuantity" class="quantity-btn">
              </button>
            </div>
            <!-- Add to Cart Button -->
            <button class="cart">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1584_1013)">
                <path d="M16.656 2.80322H3.48401L3.45601 2.56922C3.39871 2.08283 3.16493 1.63438 2.799 1.30887C2.43307 0.983372 1.96042 0.803451 1.47067 0.803223L0.656006 0.803223V2.13656H1.47067C1.63396 2.13658 1.79156 2.19653 1.91359 2.30503C2.03561 2.41354 2.11357 2.56306 2.13267 2.72522L3.18934 11.7039C3.24664 12.1903 3.48042 12.6387 3.84635 12.9642C4.21228 13.2897 4.68492 13.4697 5.17467 13.4699H13.9893V12.1366H5.17467C5.01128 12.1365 4.85359 12.0765 4.73156 11.9678C4.60952 11.8592 4.53163 11.7095 4.51267 11.5472L4.42534 10.8032H15.2133L16.656 2.80322ZM14.0987 9.46989H4.26867L3.64134 4.13656H15.0607L14.0987 9.46989Z" fill="white"/>
                <path d="M5.32259 16.8032C6.05897 16.8032 6.65592 16.2063 6.65592 15.4699C6.65592 14.7335 6.05897 14.1366 5.32259 14.1366C4.58621 14.1366 3.98926 14.7335 3.98926 15.4699C3.98926 16.2063 4.58621 16.8032 5.32259 16.8032Z" fill="white"/>
                <path d="M11.9893 16.8032C12.7257 16.8032 13.3227 16.2063 13.3227 15.4699C13.3227 14.7335 12.7257 14.1366 11.9893 14.1366C11.253 14.1366 10.656 14.7335 10.656 15.4699C10.656 16.2063 11.253 16.8032 11.9893 16.8032Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1584_1013">
                <rect width="16" height="16" fill="white" transform="translate(0.656006 0.803223)"/>
                </clipPath>
                </defs>
                </svg>

              <span>Add To Cart</span>
            </button>
            <button type="button" class="wishlist">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1584_1020)">
                <path d="M12.0117 1.54453C11.261 1.5562 10.5267 1.76576 9.88287 2.15204C9.23907 2.53832 8.7086 3.08764 8.34502 3.74453C7.98145 3.08764 7.45098 2.53832 6.80718 2.15204C6.16338 1.76576 5.42906 1.5562 4.67836 1.54453C3.48165 1.59652 2.35416 2.12003 1.54221 3.00068C0.730264 3.88133 0.299857 5.04754 0.345024 6.24453C0.345024 10.7612 7.64902 15.9779 7.95969 16.1992L8.34502 16.4719L8.73036 16.1992C9.04102 15.9792 16.345 10.7612 16.345 6.24453C16.3902 5.04754 15.9598 3.88133 15.1478 3.00068C14.3359 2.12003 13.2084 1.59652 12.0117 1.54453ZM8.34502 14.8305C6.17636 13.2105 1.67836 9.23053 1.67836 6.24453C1.63278 5.401 1.9226 4.57368 2.4846 3.94299C3.0466 3.31231 3.83518 2.92943 4.67836 2.87786C5.52154 2.92943 6.31012 3.31231 6.87212 3.94299C7.43411 4.57368 7.72393 5.401 7.67836 6.24453H9.01169C8.96612 5.401 9.25593 4.57368 9.81793 3.94299C10.3799 3.31231 11.1685 2.92943 12.0117 2.87786C12.8549 2.92943 13.6435 3.31231 14.2054 3.94299C14.7674 4.57368 15.0573 5.401 15.0117 6.24453C15.0117 9.23186 10.5137 13.2105 8.34502 14.8305Z" fill="#B6B6B6"/>
                </g>
                <defs>
                <clipPath id="clip0_1584_1020">
                <rect width="16" height="16" fill="white" transform="translate(0.344971 0.933197)"/>
                </clipPath>
                </defs>
                </svg>
            </button>
            <button type="button" class="switch">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1584_1025)">
                <path d="M14.0196 9.79517L13.0769 10.7378L14.6049 12.2665H14.3502C12.0942 12.2665 10.6596 11.2452 9.38623 9.92783L9.18623 10.1598C8.96757 10.4132 8.74224 10.6738 8.50757 10.9358C9.23236 11.7751 10.1299 12.4478 11.1388 12.9081C12.1476 13.3683 13.244 13.6052 14.3529 13.6025H14.6049L13.0762 15.1312L14.0189 16.0738L16.2142 13.8785C16.4642 13.6285 16.6046 13.2894 16.6046 12.9358C16.6046 12.5823 16.4642 12.2432 16.2142 11.9932L14.0196 9.79517Z" fill="#B6B6B6"/>
                <path d="M14.3508 5.59983H14.6048L13.0768 7.1285L14.0195 8.07117L16.2148 5.87583C16.4648 5.6258 16.6052 5.28672 16.6052 4.93317C16.6052 4.57961 16.4648 4.24054 16.2148 3.9905L14.0195 1.79517L13.0768 2.73783L14.6048 4.2665H14.3501C11.0455 4.2665 9.23879 6.0465 7.59946 7.9185C5.98012 6.08983 4.03346 4.2665 0.578125 4.2665V5.59983C3.55413 5.59983 5.16012 7.15717 6.71746 8.93317C5.16012 10.7092 3.55413 12.2665 0.578125 12.2665V13.5998C4.45012 13.5998 6.42879 11.3092 8.17812 9.28917C9.81412 7.39183 11.3628 5.59983 14.3508 5.59983Z" fill="#B6B6B6"/>
                </g>
                <defs>
                <clipPath id="clip0_1584_1025">
                <rect width="16" height="16" fill="white" transform="translate(0.604736 0.933167)"/>
                </clipPath>
                </defs>
                </svg>
            </button>
          </div>
          <div class="code">
            <div class="blue">Vendor:</div>
            <div class="gray">NestMart</div>
          </div>
          <div class="code">
            <div class="blue">SKU:</div>
            <div class="gray">FWM15VKT</div>
          </div>
        </div>
        
      </div>
      <div class="images">
      </div>
        <div class="description">
        <div class="buttons">
          <button class="desc">Description</button>
          <button class="info">Additional Info</button>
          <button class="review">Reviews(3)</button>
        </div>
        <p class="information">
          Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
          Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore.js';
import Header from './Header.vue';

export default {
  components: {
    Header,
  },
  setup() {
    const productStore = useProductStore();
    const route = useRoute(); // Get the current route object

    // Extract productName from route params
    const productName = computed(() => route.params.name);

    // Fetch the product data
    onMounted(async () => {
      await productStore.initializeData();
    });

    // Map products from the store
    const products = computed(() => productStore.products);

    // Function to get image path
    const getImagePath = (imageName) => 
    new URL(`../assets/${imageName}`, import.meta.url).href;


    return {
      productName,
      products,
      getImagePath,
    };
  },
};
</script>

<style scoped>
.directory {
  padding: 200px 40px 40px 40px;
  display: flex;
  gap: 5px;
}
.direct {
  color: gray;
}
.name {
  color: #3BB77E;
}
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.product {
  padding: 0px 40px;
  display: flex;
  flex-direction: row;
  gap: 40px;
}
.image {
  border: 1px gray solid;
  border-radius: 10px;
  padding: 50px 0px;
}
.product-image {
  width: 600px;
  height: 90%;
  border-radius: 10px;
}
.product-info {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.rate {
  display: flex;
  align-items: center;
}
.prices {
  display: flex;
  align-items:baseline;
  gap: 10px;
}
.discount {
  color: #3BB77E;
  font-size: 50px;
}
.price {
  font-weight: bold;
  font-size: 20px;
  color: gray;
}
p {
  color: gray;
}
.add {
  display: flex;
}
.quantity-field {
  border: #3BB77E 2px solid;
  color: #3BB77E;
  border-radius: 5px;
  width: 40px;
  padding: 10px;
  font-size: 16px;
}
.cart {
  background-color: #3BB77E;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
}
.wishlist, .switch {
  border: 1px #B6B6B6 solid;
  border-radius: 5px;
  padding: 10px;
}
.code {
  padding: 10px 0px;
  display: flex;
  gap: 10px;
}
.blue {
  color: #253D4E;
}
.gray {
  color: gray;
}
.description {
  padding: 20px 60px;

}
.desc, .info, .review {
  border: #F2F3F4 1px solid;
  border-radius: 30px;
  padding: 10px;
}
.desc {
  color: #3BB77E;
}
.info, .review {
  color: gray;
}
.images {
  display: flex;
}
</style>
