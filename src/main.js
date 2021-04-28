import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./styles/style_app.scss";
// import "./styles/style_navbar.scss";
// import "./styles/style_params.scss";
// import "./styles/style_grid.scss";
// import "./styles/style_details.scss";
import "./directives/index";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
