<template>
  <div class="content">
    <div>Test Phrase: {{ phrase }}!</div>
    <div class="link-holder">
      <router-link to="/next">Next Page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      phrase: 'Not Configured'
    }
  },
  created () {
    console.log(window.config)
    if (window.config && window.config.TEST_PHRASE !== undefined) {
      this.phrase = window.config.TEST_PHRASE;
    }
  }
}
</script>

<style scoped>
  .content {
    text-align: center;
    font-size: 2.0rem;
    padding-top: 25px;
  }
  .link-holder {
    margin-top: 50px;
    font-size: 1.5rem;
  }
</style>