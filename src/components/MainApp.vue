<template>
  <div class="main-app-wrap">
    <h1>MAIN APP</h1>
    <button type="button" @click="signOut">Log out</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'MainApp',
  methods: {
    signOut () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.replace('/')
        }).catch((err) => {
          alert(`Oops. ${err}`)
          console.log(`Oops. ${err}`)
        })
    }
  }
}
</script>

<style scoped>

</style>
