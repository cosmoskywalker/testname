<template>
  <div class="v-catalogue-item">
    <img class="v-catalogue-item_image" src="../assets/images/4.jpg" alt="img" />
    <!-- <img :src="imageSrc" alt="Image">
   fewfew   {{ imageSrc }} -->
    <p class="v-catalogue-item_name">
      {{ product_data.name }}
    </p>
    <p class="v-catalogue-item_price">{{ product_data.price }}</p>
    <button class="v-catalogue-btn" @click="addToCard">add to card</button>
  </div>
</template>
<script>
export default {
  props: {
    product_data: {
      type: Object,
      default() {
        return {
          imageSrc: ''
        };
      },
    },
  },
  methods: {
    addToCard() {
      this.$emit("addToCard", this.product_data);
    },
 
  },
//  async mounted() {
//     this.imageSrc = await import(`../assets/images/1.jpg`,import.meta.url).href
//   }
};
</script>
<style>
.v-catalogue-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: 16px;
  margin-bottom: 16px;
  
}

.v-catalogue-item_image {
  width: 100px;
}
</style>
