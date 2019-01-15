<template>
  <div class="main-dekstop-wrap f-center">
    <div class="container f-center margin-sides">
      <div class="input-wrapper f-center">
        <div class="input-bg"></div>
        <div class="input-box">
          <div class="row">
            <input class="text-nrml-bold" type="text" v-model="player" placeholder="Player name">
            <input class="text-nrml-bold" type="text" v-model="room" placeholder="Poker room">
          </div>
          <div class="row">
            <input class="text-nrml-bold" type="text" v-model="year" placeholder="Select year">
            <input class="text-nrml-bold" type="text" v-model="type" placeholder="Tournament type">
          </div>
          <div class="submit-box">
            <button class="text-nrml-bold" type="button" @click="submitData">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sendData from '@/sendServer'

export default {
  name: 'MainDekstop',
  data () {
    return {
      player: '',
      room: '',
      year: '',
      type: ''
    }
  },
  methods: {
    submitData () {
      sendData.sendData(this.player, this.room, this.year, this.type)
    }
  }
}
</script>

<style scoped>
.main-dekstop-wrap {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.input-wrapper {
  position: relative;
  max-width: 648px;
  width: 100%;
  height: 217px;
  align-items: center;
  margin-top: 55px;
}
.input-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #edf1f3;
  filter: blur(30px);
}
.input-box {
  position: relative;
  width: 560px;
  height: 184px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
}
  .input-box > .row:nth-child(2) {
    margin-top: 21px;
  }
  .input-box > .row {
    display: flex;
    justify-content: space-around;
  }
  .input-box > .submit-box {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
    .submit-box > button {
      width: 108px;
      height: 40px;
      background-color: #FF4081;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, .25);
      border-radius: 50px;
      color: #fff;
      font-size: 18px;
      border: none;
      cursor: pointer;
      outline: none;
    }
    .row > input {
      width: 221px;
      height: 48px;
      text-align: center;
      background-color: #fff;
      border: 1px solid #e0e0e0;
      color: #828282;
      outline: none;
      font-size: 18px;
    }
    ::placeholder {
      color: #BDBDBD;
    }
    .row > input:active,
    .row > input:focus {
      border-left-width: 2px;
      border-left-color: #56CCF2;
    }
</style>
