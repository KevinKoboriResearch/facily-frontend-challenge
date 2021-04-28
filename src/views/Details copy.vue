<template>
  <div>
    <div id="container">
       <div class="row">
    <div class="grid-item">
      <router-link :to="{ name: 'Home' }"
        ><div class="button"><p>Back</p></div></router-link
      >
      <!-- <br /><br /><br /><br /><br /> -->
      <a class="card-link" href="#">
        <article class="blog-card">
          <img class="post-image" :src="country.flag" />
          <div class="article-details">
            <h1 class="post-title">{{ country.name }}</h1>
            <br />
            <p class="post-description">
              Native Name: {{ country.population }}
            </p>
            <br />
            <p class="post-description">Population: {{ country.population }}</p>
            <br />
            <p class="post-description">region: {{ country.region }}</p>
            <br />
            <p class="post-description">subregion: {{ country.subregion }}</p>
            <br />
            <p class="post-description">capital: {{ country.capital }}</p>
            <br />
            <p class="post-description">
              topleveldomain: {{ country.topleveldomain }}
            </p>
            <br />
            <p class="post-description">
              currencies: {{ country.currencies[0].name }}
            </p>
            <p class="post-description">
              languages: {{ country.languages[0].name }}
            </p>
            <p class="post-border-countries">Border Countries</p>
          </div>
        </article>
      </a>
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
.column {
  display: flex;
  flex-direction: column;
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
  background: black;
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
    // width: 400px;
    height: 180px;
    width: 100%;
    // height: 50%;
    // aspect-ratio: 2;
    object-fit: cover;
  }
  .card-content {
     padding: 6% 0% 6% 6%;
  }
}
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
//   font-weight: 400;
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
//   padding: 6%6%;
// }

// .blog-card {
//   display: flex;
//   flex-direction: row;
//   background: hsl(0, 0%, 98%);
//   border-radius: 1rem;
//   overflow: hidden;
// }

// .theme--dark .blog-card {
//   background: hsl(207, 26%, 17%);
// }

// .card-link {
//   position: relative;
//   display: block;
//   color: inherit;
//   text-decoration: none;
//   &:hover .post-title {
//     @include transition(color 0.3s ease);
//     color: #e04f62;;
//   }
//   &:hover .post-image {
//     @include transition(opacity 0.3s ease);
//   }
// }

// .post-image {
//   @include transition(opacity 0.3s ease);
//   display: block;
//   width: 100%;
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
//   border-bottom: 0.125rem solid #ebebeb;;
// }

// .post-title {
//   @include transition(color 0.3s ease);
//   font-size: 2rem;
//   line-height: 1.4;
//   font-weight: 700;
//   margin: 0 0 0.5rem 0;
// }

// .post-border-countries {
//   font-size: 0.875rem;
//   line-height: 1;
//   margin: 1.125rem 0 0 0;
//   padding: 1.125rem 0 0 0;
//   border-top: 0.0625rem solid #ebebeb;
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

// $color: #0cf;

// .button {
//   display: inline-block;
//   padding: 0.75rem 1.25rem;
//   border-radius: 1rem;
//   // color: hsl(0, 0%, 100%);
//   text-transform: uppercase;
//   font-size: 1rem;
//   letter-spacing: 0.15rem;
//   transition: all 0.3s;
//   position: relative;
//   overflow: hidden;
//   z-index: 1;
//   box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.2);
//   &:after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: hsl(0, 0%, 100%);
//     border-radius: 1rem;
//     z-index: -2;
//   }
//   &:before {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 0%;
//     height: 100%;
//     background-color: hsl(0, 0%, 70%);
//     transition: all 0.3s;
//     border-radius: 1rem;
//     z-index: -1;
//   }
//   &:hover {
//     color: hsl(0, 0%, 100%);
//     &:before {
//       width: 100%;
//     }
//   }
// }

// * {
//   text-decoration: none;
// }

// .theme--dark .button {
//   &:after {
//     background-color: hsl(207, 26%, 17%);
//   }
//   &:before {
//     background-color: hsl(209, 23%, 22%);
//   }
// }
</style>