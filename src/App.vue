<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4F4F4F;
}

*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Global classes */
.f-center-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-nrml-bold {
  font-weight: bold;
  line-height: normal;
  font-style: normal;
}

</style>
