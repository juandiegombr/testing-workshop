<template>
  <div id="app">
    <Currency />
  </div>
</template>

<script>
import Currency from "./components/Currency"

export default {
  name: "app",
  data: () => ({ }),
  components: {
    Currency
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
