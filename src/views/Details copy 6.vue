<template>
  <div>
    <router-link :to="{ name: 'Home' }"
      ><div class="button"><p>Back</p></div></router-link
    >
    <div class="row">
      <img class="card-image" :src="country.flag" />
      <div class="card-content-row">
        <div class="details-content-text">
          <div class="home-params">
            <div class="content">
              <h1>{{ country.name }}</h1>
              <br />
              <p><b>Native Name: </b>{{ country.nativeName }}</p>
              <br />
              <p><b>Population: </b>{{ country.population }}</p>
              <br />
              <p><b>Region: </b>{{ country.region }}</p>
              <br />
              <p><b>Subregion: </b>{{ country.subregion }}</p>
              <br />
              <p><b>Capital: </b>{{ country.capital }}</p>
            </div>
          </div>
          <div class="home-grid">
            <div class="content">
              <br />
              <p><b>Top Level Domain: </b>{{ country.region }}</p>
              <br />
              <p><b>Currencies: </b>{{ country.currencies[0].name }}</p>
              <br />
              <p><b>Languages: </b>{{ country.languages[0].name }}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      country: {},
    };
  },
  mounted() {
    const url = `https://restcountries.eu/rest/v2/name/${this.$route.params.id}`;
    axios.get(url).then((res) => {
      const data = res.data;
      console.log(data);
      if (data) this.country = data[0];
    });
  },
};
</script>


<style scoped lang="scss">
.card-image {
  height: 300px;
  width: 400px;
  object-fit: cover;
}
.row {
  font-size: 16px;
  margin: 10% 0% 0% 0%;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.content {
  margin: 16% 0% 16% 16%;
}

.home-params {
  grid-area: params-area;
}

.home-grid {
  grid-area: content-area;
}

.details-content-text {
  display: grid;
  grid-template-columns: 350px 350px;
  grid-template-areas:
    "params-area content-area"
    "params-area content-area";
}

@media (max-width: 700px) {
  .card-image {
    height: auto;
    width: 100%;
  }
  .details-content-text {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 400px;
    grid-template-rows: 280px;
    grid-template-areas:
      "params-area"
      "content-area";
  }
}
@media (max-width: 450px) {
  .details-content-text {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 280px;
    grid-template-rows: 280px;
    grid-template-areas:
      "params-area"
      "content-area";
  }
}

.button {
  margin: 48px 0px 0px 48px;
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 0.4rem;
  color: black;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.2);
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: hsl(0, 0%, 100%);
      background: url(https://cdn.iconscout.com/icon/free/png-256/down-arrow-16-460295.png)
    no-repeat scroll;
  background-size: 26px;
  background-position: left;
  background-color: var(--white-light-mode-elements);
    border-radius: 0.4rem;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--dark-blue-dark-mode-elements);
    transition: all 0.3s;
    border-radius: 0.4rem;
    z-index: -1;
  }
  &:hover {
    color: hsl(0, 0%, 100%);
    &:before {
      width: 100%;
    }
  }
}

.theme--dark .button {
  color: var(--white-light-mode-elements);
  &:after {
    background-color: var(--dark-blue-dark-mode-elements);
  }
  &:before {
    background-color: var(--white-light-mode-elements);
  }
  &:hover {
    color: var(--dark-blue-dark-mode-elements);
  }
}
</style>
