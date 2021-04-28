<template>
  <div class="header">
    <div class="app-bar">
      <router-link :to="{ name: 'Home' }"
        ><div class="app-bar-item">
          <div class="input">
            <input
              v-model="getCountriesByName"
              id="search"
              type="search"
              placeholder="Search for a country..."
              autofocus
              required
            />
          </div></div
      ></router-link>
      <div class="app-bar-item">
        <select v-model="getCountriesByRegion">
          <option disabled value="">Choose a Region</option>
          <option
            v-for="option in options"
            :key="option.text"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  mounted() {
    const url = `https://restcountries.eu/rest/v2/all`;
    axios.get(url).then((res) => {
      const data = res.data;
      if (data) this.setCountries(data);
    });
  },
  data() {
    return {
      selectedValue: "Two",
      valuesList: ["One", "Two", "Three"],
      options: [
        { text: "All", value: "all" },
        { text: "Africa", value: "region/Africa" },
        { text: "Americas", value: "region/Americas" },
        { text: "Asia", value: "region/Asia" },
        { text: "Europe", value: "region/Europe" },
        { text: "Oceania", value: "region/Oceania" },
      ],
    };
  },
  computed: {
    getCountriesByName: {
      get() {},
      set(name) {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        axios.get(url).then((res) => {
          const data = res.data;
          if (data) this.setCountries(data);
        });
      },
    },
    getCountriesByRegion: {
      get() {},
      set(region) {
        const url = `https://restcountries.eu/rest/v2/${region}`;
        axios.get(url).then((res) => {
          const data = res.data;
          if (data) this.setCountries(data);
        });
      },
    },
  },
  methods: {
    ...mapActions("countries", ["setCountries"]),
  },
};
</script>

<style lang="scss">
.header {
  grid-area: header-area;
  overflow: hidden;
}

.app-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.app-bar-item {
  padding: 8px 16px;
  font-size: 24px;
  cursor: pointer;
  a {
    float: right;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
  }
  h4 {
    float: right;
    text-align: center;
    text-decoration: none;
    font-size: 24px;
  }
}

.input {
  position: relative;
  width: 20rem;
  border-radius: 0.7rem;
}

input {
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.04);
  text-align: center;
  text-decoration: none;
  padding: 17px 17px;
  border: 0;
  font-size: 20px;
  background: url(https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-iacute-cone-de-pesquisa-by-vexels.png)
    no-repeat scroll;
  background-size: 26px;
  background-position: 1rem 1rem;
  background-color: var(--white-light-mode-elements);
}

input[type="search"] {
  outline: 0;
  border-radius: 0.7rem;
}

.theme--dark input {
  color: var(--white-dark-mode-text);
  outline: 0;
  background: hsl(207, 26%, 17%);
  background: url(https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/common/search-icon.png)
    no-repeat scroll;
  background-size: 24px;
  background-position: 1rem 1rem;
  background-color: var(--dark-blue-dark-mode-elements);
  border-radius: 0.7rem;
  appearance: none;
  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
}

select {
  cursor: pointer;
  padding: 18px 18px;
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  line-height: 1.3;
  max-width: 100%;
  box-sizing: border-box;
  border: 0px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url(https://cdn.iconscout.com/icon/free/png-256/down-arrow-16-460295.png)
    no-repeat scroll;
  background-size: 26px;
  background-position: right;
  background-color: var(--white-light-mode-elements);
}

.theme--dark select {
  color: #fff;
  background: url(http://www.inf.ufrgs.br/~jvcamargo/pagefiles/downArrow.png)
    no-repeat scroll;
  background-size: 26px;
  background-position: right;
  background-color: var(--dark-blue-dark-mode-elements);
}

// .input-container {
//   display: -ms-flexbox; /* IE10 */
//   display: flex;
//   width: 100%;
//   margin-bottom: 15px;
// }

// .icon {
//    margin: 18px 18px;
//   padding: 10px;
//   background: dodgerblue;
//   color: white;
//   min-width: 50px;
//   text-align: center;
// }

// .input-field {
//   width: 100%;
//   padding: 10px;
//   outline: none;
// }

// .input-field:focus {
//   border: 2px solid dodgerblue;
// }
</style>