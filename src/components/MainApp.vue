<template>
  <div class="main-app-wrap">
    <navHeader></navHeader>
    <mainDekstop v-if="mobileView === false"></mainDekstop>
    <mainMobile v-if="mobileView === true"></mainMobile>
  </div>
</template>

<script>
import navHeader from './Header'
import mainDekstop from './MainDekstop'
import mainMobile from './MainMobile'

export default {
  name: 'MainApp',
  components: {
    navHeader,
    mainDekstop,
    mainMobile
  },
  data () {
    return {
      mobileView: Boolean
    }
  },
  mounted () {
    this.setView()
    this.$nextTick(() => {
      window.addEventListener('resize', this.setView)
    })
  },
  methods: {
    setView () {
      const screenWidth = document.documentElement.clientWidth;
      (screenWidth <= 750) ? this.mobileView = true : this.mobileView = false
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setView)
  }
}
</script>

<style scoped>
.main-app-wrap {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}
</style>
