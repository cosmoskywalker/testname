<template>
  <div class="v-catalogue">
    <h1>Catalogue</h1>
    <div class="v-catalogue_list">
      <vCatalogueItem
      v-for="product of PRODUCTS"
      :key="product.article"
      :product_data="product"
      @addToCard="addToCard"
    />
    </div>
  </div>
</template>
<script>
import vCatalogueItem from "./vCatalogueItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    vCatalogueItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CARD"]),
    addToCard(data) {
      this.ADD_TO_CARD(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("data arrived!");
      }
    });
  },
};
</script>
<style>
.v-catalogue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.v-catalogue_list{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 60px;
}
</style>
