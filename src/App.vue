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

.is-active {
  color: #f2f2f2 !important;
}

/* Global classes */
.f-center {
  display: flex;
  justify-content: center;
}
.f-center-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.f-center-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.f-space-b-c {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-nrml-bold {
  font-weight: bold;
  line-height: normal;
  font-style: normal;
}
.container {
  max-width: 1140px;
  width: 100%;
}
.margin-sides {
  margin: 0 30px;
}

</style>
