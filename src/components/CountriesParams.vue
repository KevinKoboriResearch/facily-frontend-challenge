<template>
  <div class="params">
    <div class="paramsitem">
      <div class="input">
        <input
          v-model="getCountriesByName"
          id="search"
          type="search"
          placeholder="Search for a country..."
          autofocus
          required
        />
      </div>
      <select v-model="getCountriesByRegion">
        <option disabled value="">Choose a Region</option>
        <option
          v-for="option in options"
          :key="option.text"
          v-bind:value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
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
