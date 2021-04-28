<template>
  <header>
    <div class="app-bar">
      <router-link :to="{ name: 'Home' }"
        ><div class="app-bar-item">
          <!-- <h4><b>Where in the world?</b></h4> -->
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
        <!-- <a @click="toggleDarkMode">Dark Mode</a> -->
      </div>
    </div>
  </header>
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
       selectedValue: 'Two',
        valuesList: ['One', 'Two', 'Three'],
      // countriesRegion: "todos",
      options: [
        { text: "Todos", value: "all" },
        { text: "África", value: "region/Africa" },
        { text: "Américas", value: "region/Americas" },
        { text: "Ásia", value: "region/Asia" },
        { text: "Europa", value: "region/Europe" },
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
      get() {
        // this.countriesRegion;
      },
      set(region) {
        // this.countriesRegion = region;
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
header {
  grid-area: header-area;
  padding: 30px 3%;
  overflow: hidden;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--white-light-mode-elements);
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
  }

  input[type="search"] {
    outline: 0;
    border-radius: 0.7rem;
  }

  .theme--dark input {
    outline: 0;
    background: hsl(207, 26%, 17%);
    border-radius: 0.7rem;
    appearance: none;
    transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
    transition-property: width, border-radius;
    z-index: 1;
    position: relative;
  }

  select {
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
    background-color: hsl(0, 0%, 100%);
  }

  .theme--dark select {
    color: #fff;
    background-color: hsl(207, 26%, 17%);
  }
</style>