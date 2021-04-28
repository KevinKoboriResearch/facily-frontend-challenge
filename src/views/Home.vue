<template>
  <div class="home">
    <CountriesParams />
    <CountriesGrid />
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
