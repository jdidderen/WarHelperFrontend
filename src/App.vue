<template>
  <div id="app">
    <TopMenu/>
    <section  class="section">
      <div class="container">
        <Breadcrumb/>
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
import TopMenu from './components/main/TopMenu.vue'
import Breadcrumb from "@/components/main/Breadcrumb";

export default {
  name: 'App',
  components: {
    Breadcrumb,
    TopMenu,
  },
  computed: {
    loggedIn() {
      return this.$store.state.status.loggedIn;
    }
  },
  methods: {
    recreateState() {
      this.$store.dispatch('recreateState');
    },
  },
  mounted() {
    this.recreateState();
  }
}
</script>

<style>
</style>
