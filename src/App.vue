<template>
  <div id="app">
    <TopMenu/>
    <section  class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
import TopMenu from './components/main/TopMenu.vue'

export default {
  name: 'App',
  components: {
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
