<template>
  <body id="app" v-dark-mode>
    <div class="topnav">
      <router-link :to="{ name: 'Home' }"
        ><div class="topnavitem"><h1>Where in the world?</h1></div></router-link
      >
      <div class="topnavitem">
        <a @click="toggleDarkMode" style="cursor: pointer">Dark Mode</a>
      </div>
    </div>
    <router-view />
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
