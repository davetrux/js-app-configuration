<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.jpeg" alt="Confiturator Logo"/>
      <span>JavaScript Configurations for Everyone!</span>
      <span class="placeholder"></span>
    </div>
    <div class="content">
      Test Phrase: {{ phrase }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      phrase: 'Not Configured'
    }
  },
  created () {
    if (process.env.TEST_PHRASE) {
      this.phrase = process.env.TEST_PHRASE
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  .header {
    display: -webkit-flexbox;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background: #E79115;
    border-bottom: 25px solid #2E2929;
    border-radius: 15px;
  }
  .header img {
    margin-left: 25px;
    margin-top: 10px;
    margin-right: 100px;
  }
  .placeholder {
    height: 100%;
  }
  .header span {
    display: inline-block;
    font-size: 2.5rem;
    vertical-align: middle;
    font-weight: 500;
  }
  .content {
    text-align: center;
    font-size: 2.0rem;
    padding-top: 25px;
  }
</style>
