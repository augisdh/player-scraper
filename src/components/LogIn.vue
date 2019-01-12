<template>
  <div class="login-wrap">
    <div class="left-wrapper">
      <div class="login-content f-center-column">
        <div class="login-header">
          <h1 class="text-nrml-bold">Take your poker game to the next level</h1>
        </div>
        <div class="f-center-column">
          <div class="input-box">
            <label for="email" class="text-nrml-bold">Email Address</label>
            <input type="email" class="text-nrml-bold" id="email" v-model="emailValue" placeholder="Email">
          </div>
          <div class="input-box">
            <label for="password" class="text-nrml-bold">Password</label>
            <input type="password" class="text-nrml-bold" id="password" v-model="passValue" placeholder="Password">
            <input v-if="signupView === true" type="password" class="text-nrml-bold secondPass" id="passwordSecond" v-model="passValueSecond" placeholder="Re-enter password">
          </div>
        </div>
        <div class="f-center-column">
          <div class="btn-box">
            <button v-if="signupView === false" class="btn-submit text-nrml-bold" type="button" @click="loginAcc">Connect</button>
            <button v-if="signupView === true" class="btn-submit text-nrml-bold" type="button" @click="createNewAcc">Register</button>
          </div>
          <div v-if="signupView === false" class="btn-box">
            <button class="btn-google text-nrml-bold" type="button" @click="googleLogin">Login with <span>Google</span></button>
          </div>
          <div class="btn-box">
            <h4 v-if="signupView === false">Dont have an account?</h4>
            <button v-if="signupView === false" class="btn-sign" type="button" @click="changeSingView">Sign up</button>
            <h4 v-if="signupView === true">I have an account!</h4>
            <button v-if="signupView === true" class="btn-sign" type="button" @click="changeSingView">Login</button>
          </div>
        </div>
      </div>
    </div>
    <!-- .right-wrapper only dekstop version -->
    <div class="right-wrapper">
      <img src="./assets/login-assets/login_bg.jpg" alt="login-poker-background">
      <div class="bg-black">
        <div class="logo-box">
          <img src="./assets/login-assets/logo.png" alt="player-scraper-logo">
        </div>
        <div class="bg-quote">
          <p class="quote-symb">&ldquo;</p>
          <p class="p-text">
            Analyze your game, know your opponent next move and win.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'LogIn',
  data () {
    return {
      emailValue: '',
      passValue: '',
      passValueSecond: '',
      signupView: false
    }
  },
  mounted () {
    this.setBackgoundStyle()
    this.$nextTick(() => {
      window.addEventListener('resize', this.setBackgoundStyle)
    })
  },
  methods: {
    setBackgoundStyle () {
      const loginCtxHeight = {
        height: document.querySelector('.login-content').clientHeight,
        marginTop: window.getComputedStyle(document.querySelector('.login-content')).marginTop,
        marginBottom: window.getComputedStyle(document.querySelector('.login-content')).marginBottom,
        fullHeight: function () {
          return this.height + Number(this.marginTop.replace('px', '')) + Number(this.marginBottom.replace('px', ''))
        }
      }
      const screenInfo = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }

      if (screenInfo.width > 1025) {
        if (screenInfo.height < loginCtxHeight.fullHeight()) {
          document.querySelector('.right-wrapper img').style.height = loginCtxHeight.fullHeight() + 'px'
          document.querySelector('.right-wrapper .bg-black').style.height = loginCtxHeight.fullHeight() + 'px'
        } else {
          document.querySelector('.right-wrapper img').removeAttribute('style')
          document.querySelector('.right-wrapper .bg-black').removeAttribute('style')
        }
      }
    },
    changeSingView () {
      this.signupView = !this.signupView
    },
    createNewAcc () {
      if (this.passValue === this.passValueSecond) {
        firebase.auth().createUserWithEmailAndPassword(this.emailValue, this.passValue)
          .then(() => {
            this.changeSingView()
          }).catch((err) => {
            alert(`Oops. ${err.message}`)
          })
      } else {
        alert(`Passwords don't match`)
      }
    },
    loginAcc () {
      firebase.auth().signInWithEmailAndPassword(this.emailValue, this.passValue)
        .then((user) => {
          this.$router.replace('app')
        }).catch((err) => {
          alert(`Oops. ${err.message}`)
        })
    },
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          this.$router.replace('app')
        }).catch((err) => {
          alert(`Oops. ${err.message}`)
        })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
}

.left-wrapper {
  flex-grow: 1;
  height: 100%;
}

.login-content {
  position: relative;
  margin: 79px 54px 54px 54px;
  z-index: 5;
}

.login-header {
  max-width: 439px;
  min-width: 200px;
  width: 100%;
  height: 160px;
}
  .login-header > h1 {
    font-size: 36px;
    text-align: left;
    color: #2786F5;
  }

.input-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25px;
  width: 220px;
}
  label {
    font-size: 14px;
    color: #BDBDBD;
    margin-bottom: 12px;
  }
  input {
    width: 100%;
    height: 47px;
    text-align: center;
    font-size: 18px;
    color: #828282;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    outline: none;
  }
  .secondPass {
    margin-top: 15px;
  }
  input::placeholder,
  input:-ms-input-placeholder,
  input::-moz-placeholder, {
    color: #BDBDBD;
  }
  input:active,
  input:focus {
    border-left-width: 2px;
    border-left-color: #56CCF2;
  }

.btn-box {
  margin-top: 37px;
}
.btn-box:nth-child(1) {
  margin-top: 53px;
}
.btn-box:last-child {
  display: flex;
  flex-direction: row;
}
  .btn-box > button {
    cursor: pointer;
  }
  .btn-submit {
    width: 108px;
    height: 40px;
    background-color: #F64B85;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
    border-radius: 50px;
    border: none;
    color: #fff;
    font-size: 18px;
  }
  .btn-google {
    width: 160px;
    height: 40px;
    border: 1px solid #E0E0E0;
    border-radius: 50px;
    background-color: #fff;
    color: #4F4F4F;
    font-size: 14px;
  }
    .btn-google > span {
      color: #dd4b39;
    }
  .btn-sign {
    background-color: transparent;
    font-size: 14px;
    border: none;
    margin-left: 5px;
    color: #F64B85;
    text-decoration: underline;
  }
  .btn-box > h4 {
    color: #4f4f4f;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    font-size: 14px;
  }

.right-wrapper {
  display: block;
  position: relative;
  height: 100%;
}
.right-wrapper > img {
  display: block;
  height: 100%;
  float: right;
}
.right-wrapper > .bg-black {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  .bg-black > .logo-box {
    width: 150px;
    height: 150px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .logo-box > img {
      width: 124px;
      height: 118px;
    }
  .bg-black > .bg-quote {
    width: 440px;
    transform: translateY(150px)
  }
    .quote-symb {
      color: #fff;
      font-size: 48px;
      height: 30px;
      font-weight: normal;
      text-align: left;
    }
    .p-text {
      margin-left: 15px;
      color: #fff;
      font-weight: normal;
      font-size: 18px;
      text-align: left;
    }

@media (max-width: 1025px) {
  .left-wrapper::before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('./assets/login-assets/login_bg_mob.jpg') no-repeat center;
    background-size: cover;
    z-index: 1;
  }
  .left-wrapper::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, .7);
  }
  .login-header > h1 {
    color: #fff;
  }
  .btn-google {
    background-color: transparent;
    color: #fff;
  }
  .btn-box > h4 {
    color: #fff;
  }

  .right-wrapper {
    display: none;
  }
}
@media (max-width: 550px) {
  .login-content {
    margin: 126px 54px 54px 54px;
  }
  .login-header {
    height: 109px;
    margin-bottom: 10px;
  }
    .login-header > h1 {
      font-size: 30px;
    }
  .input-box {
    margin-top: 12px;
    width: 201px;
  }
    input {
      font-size: 12px;
    }
  .btn-box {
    margin-top: 33px;
  }
  .btn-box:nth-child(1) {
    margin-top: 33px;
  }
    .btn-submit,
    .btn-google {
      font-size: 12px;
    }
    .btn-sign,
    .btn-box > h4 {
      font-size: 10px;
    }
}

</style>
