<template>
  <div class="row">
    <div class="grid-item" v-for="country in countries" :key="country.nome">
      <router-link
        class="routerlink"
        :to="{ name: 'Details', params: { id: country.alpha3Code } }"
      >
        <img class="card-image" :src="country.flag" />
        <div class="card-content">
          <h3>{{ country.name }}</h3>
          <br />
          <p><b>Population: </b>{{ country.population }}</p>
          <br />
          <p><b>Region: </b>{{ country.region }}</p>
          <br />
          <p><b>Capital: </b>{{ country.capital }}</p>
        </div></router-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("countries", ["getCountries"]),
    countries() {
      return this.$store.state.countries.countriesList;
    },
  },
};
</script>


<style scoped lang="scss">
.routerlink {
  text-decoration: dotted;
}
.row {
  padding: 4% 0% 0% 0%;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  align-items: flex-start;
}

.grid-item {
  margin: 0% 0% 3% 0%;
  width: 250px;
  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
  background: var(--white-light-mode-elements);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  align-items: flex-start;
  .card-image {
    box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem 0.3rem 0rem 0rem;
    height: 180px;
    width: 100%;
    object-fit: cover;
  }
  .card-content {
    padding: 16% 10% 16% 10%;
  }
}

@media (max-width: 580px) {
  .grid-item {
    width: 100%;
    .card-image {
      height: auto;
    }
  }
}
.theme--dark .grid-item {
  background-color: var(--dark-blue-dark-mode-elements);
}
</style>
