<template>
  <div class="v-card">
    <h1>Card</h1>
    <input type="text">
    <vCardItem />
  </div>
</template>
<script>
import vCardItem from "./vCardItem.vue";
export default {
  name: "vMainWrapper",
  components: {
    vCardItem,
  },
  props: {
    card_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style></style>
