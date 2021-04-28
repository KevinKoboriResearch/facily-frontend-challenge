<template>
  <div>
    <router-link :to="{ name: 'Home' }"
      ><div class="button"><p>Back</p></div></router-link
    >
    <div class="row">
      <!-- <div class="grid-item"> -->
      <img class="card-image" :src="country.flag" />
      <div class="card-content-row">
        <div class="home-body">
          <div class="home-params">
            <p>Population: {{ country.population }}</p>
            <p>Region: {{ country.region }}</p>
            <h4>Capital: {{ country.capital }}</h4>
            <h1>{{ country.name }}</h1>
            <p>Population: {{ country.population }}</p>
            <p>Region: {{ country.region }}</p>
            <h4>Capital: {{ country.capital }}</h4>
          </div>
          <div class="home-grid">
            <p>Population: {{ country.population }}</p>
            <p>Region: {{ country.region }}</p>
            <h4>Capital: {{ country.capital }}</h4>
            <h1>{{ country.name }}</h1>
            <p>Population: {{ country.population }}</p>
            <p>Region: {{ country.region }}</p>
            <h4>Capital: {{ country.capital }}</h4>
          </div>
        </div>
        <!-- <h1>{{ country.name }}</h1>
        <p>Population: {{ country.population }}</p>
        <p>Region: {{ country.region }}</p>
        <h4>Capital: {{ country.capital }}</h4>
          <h1>{{ country.name }}</h1>
          <p>Population: {{ country.population }}</p>
          <p>Region: {{ country.region }}</p>
          <h4>Capital: {{ country.capital }}</h4> -->
      </div>
      <!-- <img class="card-image" :src="country.flag" />
      <div class="card-content">
        <h2>{{ country.name }}</h2>
        <p>Population: {{ country.population }}</p>
        <p>Region: {{ country.region }}</p>
        <h4>Capital: {{ country.capital }}</h4>
      </div> -->
    </div>
  </div>
  <!-- </div> -->
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
  // width: 400px;
  height: 250px;
  // width: 300px;
  // height: 50%;
  // aspect-ratio: 2;
  object-fit: cover;
}
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  // justify-content: flex-start;
  align-content: center;
  align-items: center;
  // background: green;
}

// .grid-item {
//   background: black;
//   flex-wrap: wrap;
//   align-content: center;
//   align-items: center;

//   .card-content {
//     background: blue;
//     margin: 4% 8% 4% 8%;
//     padding: 6% 6% 6% 6%;
//   }
// }

@media (max-width: 660px) {
  .card-image {
    height: auto;
  }
}

.home-params {
  grid-area: params-area;
  background: blue;
}

.home-grid {
  grid-area: content-area;
  background: grey;
}

.home-body {
  display: grid;
  background: yellow; //var(--transparent);
  // min-height: 100vh;
  grid-template-columns: 250px;
  // grid-template-rows: 250px 250px;
  grid-template-areas:
    "params-area content-area"
    "params-area content-area";
}

// @media (max-width: 700px) {
//   .home-body {
//     grid-template-columns: 1fr;
//     grid-template-rows: 80px 1fr;
//     grid-template-areas: "params-area" "content-area";
//   }
// }

// @import url("https://fonts.googleapis.com/css?family=Roboto:400,700");

// $bg: #eedfcc;
// $text: #777;
// $black: #121212;
// $white: #fff;
// $red: #e04f62;
// $border: #ebebeb;
// $shadow: rgba(0, 0, 0, 0.2);

// @mixin transition($args...) {
//   transition: $args;
// }

// * {
//   box-sizing: border-box;
//   &::before,
//   &::after {
//     box-sizing: border-box;
//   }
// }

// body {
//   display: flex;
//   font-family: "Roboto", sans-serif;
//   font-weight: 400;
//   color: $text;
//   background: $bg;
//   font-size: 0.9375rem;
//   min-height: 100vh;
//   margin: 0;
//   line-height: 1.6;
//   align-items: center;
//   justify-content: center;
//   text-rendering: optimizeLegibility;
// }

// #container {
//   width: 100%;
//   height: 100%;
//   padding: 12% 12%;
// }

// .blog-card {
//   display: flex;
//   flex-direction: row;
//   background: $white;
//   box-shadow: 0 0.1875rem 1.5rem $shadow;
//   border-radius: 0.375rem;
//   overflow: hidden;
// }

// .card-link {
//   position: relative;
//   display: block;
//   color: inherit;
//   text-decoration: none;
//   &:hover .post-title {
//     @include transition(color 0.3s ease);
//     color: $red;
//   }
//   &:hover .post-image {
//     @include transition(opacity 0.3s ease);
//   }
// }

// .post-image {
//   @include transition(opacity 0.3s ease);
//   display: block;
//   width: 100%;
//   border-radius: .7rem .7rem 0rem 0rem;
//   object-fit: cover;
// }

// .article-details {
//   padding: 1.5rem;
// }

// .post-category {
//   display: inline-block;
//   text-transform: uppercase;
//   font-size: 0.75rem;
//   font-weight: 700;
//   line-height: 1;
//   letter-spacing: 0.0625rem;
//   margin: 0 0 0.75rem 0;
//   padding: 0 0 0.25rem 0;
//   border-bottom: 0.125rem solid $border;
// }

// .post-title {
//   @include transition(color 0.3s ease);
//   font-size: 1.125rem;
//   line-height: 1.4;
//   color: $black;
//   font-weight: 700;
//   margin: 0 0 0.5rem 0;
// }

// .post-border-countries {
//   font-size: 0.875rem;
//   line-height: 1;
//   margin: 1.125rem 0 0 0;
//   padding: 1.125rem 0 0 0;
//   border-top: 0.0625rem solid $border;
// }

// @media (max-width: 40rem) {
//   #container {
//     width: 100%;
//     height: 100%;
//   }

//   .blog-card {
//     flex-wrap: wrap;
//   }
// }

// @supports (display: grid) {
//   body {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-gap: 0.625rem;
//     grid-template-areas: ". main main ." ". main main .";
//   }

//   #container {
//     grid-area: main;
//     align-self: center;
//     justify-self: center;
//   }

//   .post-image {
//     height: 100%;
//     // width:100%;
//   }

//   .blog-card {
//     display: grid;
//     grid-template-columns: 1fr 2fr;
//     grid-template-rows: 1fr;
//   }

//   @media (max-width: 40rem) {
//     .blog-card {
//       grid-template-columns: auto;
//       grid-template-rows: 12rem 1fr;
//     }
//   }
// }
</style>
