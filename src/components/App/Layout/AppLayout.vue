<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">

    </side-bar>
    <notifications>

    </notifications>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <app-content @click.native="toggleSidebar">

      </app-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import AppContent from './Content.vue';
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      AppContent
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };

</script>
