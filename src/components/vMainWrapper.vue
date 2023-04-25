<template>
  <div class="v-main-wrapper">
    <vCatalogue />
    <vCard v-if="CARD.length" :card_data="Card" />
  </div>
</template>
<script>
import vCatalogue from "./vCatalogue.vue";
import vCard from "./vCard.vue";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "vMainWrapper",
  components: {
    vCatalogue,
    vCard,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["test"]),
    ...mapGetters(["CARD"]),
  },
  methods: {},
  watch: {},
  mounted() {},
};
</script>
<style scoped>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
