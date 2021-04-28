<template>
  <body id="app" v-dark-mode>
    <header>
      <div class="app-bar">
        <router-link :to="{ name: 'Home' }"
          ><div class="app-bar-item">
            <h4><b>Where in the world?</b></h4>
          </div></router-link
        >
        <div class="app-bar-item">
          <a @click="toggleDarkMode"><i class="fas fa-moon"></i> Dark Mode</a>
        </div>
      </div>
    </header>
    <main><router-view /></main>
  </body>
</template>
<script>
export default {
  methods: {
    toggleDarkMode: function () {
      this.$store.commit({ type: "toggleDarkMode" });
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Nunito Sans Black";
  src: local("Nunito Sans Black"),
    url(./assets/fonts/Nunito_Sans/NunitoSans-Black.ttf) format("truetype");
  font-family: "Nunito Sans Bold";
  src: local("Nunito Sans Bold"),
    url(./assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf) format("truetype");
  font-family: "Nunito Sans Light";
  src: local("Nunito Sans Light"),
    url(./assets/fonts/Nunito_Sans/NunitoSans-Light.ttf) format("truetype");
  font-family: "Nunito Sans Regular";
  src: local("Nunito Sans Regular"),
    url(./assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf) format("truetype");
  font-family: "Nunito Sans SemiBold";
  src: local("Nunito Sans SemiBold"),
    url(./assets/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf) format("truetype");
}

:root {
  --dark-blue-dark-mode-elements: hsl(209, 23%, 22%);
  --very-dark-blue-dark-mode-background: hsl(207, 26%, 17%);
  --dark-blue-light-mode-text: hsl(200, 15%, 8%);
  --dark-gray-light-mode-input: hsl(0, 0%, 52%);
  --very-light-gray-light-mode-background: hsl(0, 0%, 98%);
  --white-dark-mode-text: hsl(0, 0%, 100%);
  --white-light-mode-elements: hsl(0, 0%, 100%);
  --transparent: hsla(0, 0, 0, 0);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
}

header {
  grid-area: header-area;
  padding: 30px 3%;
  overflow: hidden;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--white-light-mode-elements);
}

main {
  grid-area: content-area;
  padding: 3% 3%;
}

body {
  font-family: "Nunito Sans Regular", Helvetica, Arial;
  font-size: 14px;
  // padding: 0% 2%;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header-area header-area"
    "content-area content-area";
  background-color: var(--very-light-gray-light-mode-background);
  color: hsl(0, 0%, 0%);
  a {
    color: hsl(0, 0%, 0%);
  }
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
}

.app-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
// .app-bar-item-left {
//   font-family: "Nunito Sans Bold", Helvetica, Arial;
//     font-size: 14px;
//   padding: 16px 16px;
//   font-size: 24px;
//   cursor: pointer;
//   a {
//     float: right;
//     text-align: center;
//     // text-decoration: none;
//     // font-size: 16px;
//   }
// }

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
body.theme--dark {
  background-color: var(--very-dark-blue-dark-mode-background);
  color: var(--white-light-mode-elements);
  a {
    color: var(--white-light-mode-elements);
  }
}

.theme--dark header {
  // overflow: hidden;
  background-color: var(--dark-blue-dark-mode-elements);
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;

//   a {
//     font-weight: bold;
//     color: black;
//   }
// }

// #app.theme--dark {
//   a {
//     font-weight: bold;
//     color: hsl(0, 0%, 100%);
//   }
// }
</style>