<template>
  <header class="header f-center-row">
    <div class="header-container f-space-b-c">
      <div class="header-left f-space-b-c">
        <div class="header-img"></div>
        <div class="header-heading">
          <h4 class="text-nrml-bold">PLAYER<span>SCRAPER</span></h4>
        </div>
      </div>
      <div class="header-right">
        <ul class="f-center-row">
          <li>
            <router-link to='/app' class="text-nrml-bold">Home</router-link>
          </li>
          <li>
            <router-link to='/app/about' class="text-nrml-bold">About</router-link>
          </li>
          <li>
            <div class="sign-out">
              <button class="text-nrml-bold" type="button" @click="signOut">Sign Out</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Header',
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
.header {
  width: 100%;
  height: 56px;
  background-color: #2786F5;
}
.header-container {
  max-width: 900px;
  width: 100%;
  margin: 0 45px;
}
.header-left {
  width: 207px;
}
  .header-img {
    width: 49px;
    height: 47px;
    background-color: aqua;
  }
  .header-heading * {
    font-size: 14px;
    color: #fff;
  }
  .header-heading > h4 > span {
    font-weight: 500;
  }

.header-right {
  width: 243px;
}
.header-right > ul {
  justify-content: space-between;
  list-style: none;
}
  .header-right > ul > li > a {
    text-decoration: none;
    color: #e0e0e0;
    font-size: 14px;
  }
  .header-right .sign-out > button {
    color: #e0e0e0;
    font-size: 14px;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    cursor: pointer;
  }
  .header-right > ul > li > a:hover,
  .header-right .sign-out > button:hover {
    color: #f2f2f2;
  }
</style>
