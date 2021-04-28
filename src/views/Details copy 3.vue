<template>
  <div class="details-body">
    <div class="details-header"></div>
    <div class="details-image"></div>
    <div class="details-content-left"></div>
    <div class="details-content-right"></div>
    <div class="details-content-bottom"></div>
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
    const url = `https://restcountries.eu/rest/v2/name/${this.$route.header.id}`;
    axios.get(url).then((res) => {
      const data = res.data;
      console.log(data);
      if (data) this.country = data[0];
    });
  },
};
</script>

<style scoped lang="scss">
.details-header {
  grid-area: header-area;
  background: blue;
}

// .details-image {
//   grid-area: image-area;
//   background: grey;
// }

.details-image {
  grid-area: image-area;
  background: white;
}

.details-content-left {
  grid-area: content-left-area;
  background: green;
}

.details-content-right {
  grid-area: content-right-area;
  background: red;
}
.details-content-bottom {
  grid-area: content-bottom-area;
  background: pink;
}

.details-body {
  display: grid;
  background: yellow; //var(--transparent);
  min-height: 100vh;
  grid-template-columns: 4fr 3fr 3fr;
  grid-template-rows: 100px 400px 100px;
  grid-template-areas:
    "header-area header-area header-area"
    "image-area content-left-area content-right-area"
    "image-area content-bottom-area content-bottom-area";
}

// @media (max-width: 700px) {
//   .details-body {
//     grid-template-columns: 1fr;
//     grid-template-rows: 80px 1fr;
//     grid-template-areas: "header-area" "image-area";
//   }
// }
// .row {
//   display: flex;
//   flex-direction: row;
//   // width: 100%;
//   flex-wrap: wrap;
//   justify-content: center;
//   // justify-content: flex-start;
//   align-content: center;
//   align-items: center;
//   // background: green;
// }

// .details-card {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   //  justify-content: space-around;
//   align-content: center;
//   align-items: center;
//   margin: 12% 0% 0% 0%;
//   // height: 360px;
//   // height: 400px;
//   // width: 600px;
//   height: 300px;
//   width: 100%;
//   background: green;
//   display: flex;
//   flex-direction: column;
//   // width: 25%;
//   // flex-grow: 1;
//   flex-wrap: wrap;
//   // justify-content: center;
//   // //  justify-content: space-around;
//   // align-content: center;
//   // align-items: center;
//   .card-image {
//     // width: 400px;
//     // height: 180px;
//     // height: 400px;
//     // width: 600px;
//     height: 300px;
//     width: 40%;
//     // height: 50%;
//     // aspect-ratio: 2;
//     object-fit: cover;
//   }
//   .card-content-left {
//     text-align: left;
//     // display: flex;
//     // flex-direction: column;
//     // justify-content: space-between;
//     // //  justify-content: space-around;
//     // align-content: space-between;
//     // align-items: space-between;
//     height: 300px;
//     width: 28%;
//     padding: 4% 0% 0% 6%;
//     justify-content: center;
//     justify-content: space-around;
//     align-content: center;
//     align-items: center;
//     background: blue;
//   }
//   .card-content-left-bottom {
//     background: black;
//   }
//   .card-content-right {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     //  justify-content: space-around;
//     align-content: flex-start;
//     align-items: flex-start;
//     height: 300px;
//     width: 28%;
//     padding: 4% 0% 0% 0%;
//     justify-content: center;
//     //  justify-content: space-around;
//     align-content: center;
//     align-items: center;
//     background: yellow;
//   }
// }
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