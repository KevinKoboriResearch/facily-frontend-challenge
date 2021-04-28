<template>
  <!-- <div class="grid"> -->
  <div class="row">
    <div class="grid-item" v-for="country in countries" :key="country.nome">
      <router-link
        class="routerlink"
        :to="{ name: 'Details', params: { id: country.name } }"
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
  <!-- </div> -->
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
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  // justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  // background: green;
}

.grid-item {
  margin: 0% 0% 3% 0%;
  // height: 360px;
  width: 250px;
  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
  background: var(--dark-blue-dark-mode-elements);
  display: flex;
  flex-direction: column;
  // width: 25%;
  // flex-grow: 1;
  flex-wrap: wrap;
  // justify-content: flex-start;
  //  justify-content: space-around;
  align-content: space-around;
  align-items: flex-start;
  .card-image {
    box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem 0.3rem 0rem 0rem;
    // width: 400px;
    height: 180px;
    width: 100%;
    // height: 50%;
    // aspect-ratio: 2;
    object-fit: cover;
  }
  .card-content {
    // border-radius: 0rem 0rem 0.3rem 0.3rem;
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

@media (max-width: 580px) {
}
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
