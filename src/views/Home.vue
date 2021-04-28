<template>
  <div class="home-body">
    <div class="home-params">
      <CountriesParams />
    </div>
    <div class="home-grid">
      <CountriesGrid />
    </div>
  </div>
</template>

<script>
import CountriesParams from "@/components/CountriesParams.vue";
import CountriesGrid from "@/components/CountriesGrid.vue";
export default {
  name: "Home",
  components: { CountriesParams, CountriesGrid },
};
</script>

<style scoped lang="scss">
.home-params {
  grid-area: params-area;
}

.home-grid {
  grid-area: content-area;
}

.home-body {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    "params-area params-area"
    "content-area content-area";
}

@media (max-width: 700px) {
  .home-body {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "params-area" "content-area";
  }
}
</style>