<template>
  <div class="v-card-item">
    <img :src="require('../assets/images/' + card_item_data.image)" alt="" />
    <div class="v-card-item_info"></div>
  </div>
</template>
<script>
export default {
  props: {
    card_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style></style>
