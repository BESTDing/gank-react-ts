<template>
  <div id="app">
    <appbar></appbar>
    <div class="board-wrapper">
      <controlboard class="controlboard"></controlboard>
      <flowboard class="flowboard"></flowboard>
    </div>
    <bottomboard class="bottomboard"></bottomboard>
    <bottom></bottom>
  </div>
</template>

<script>
  import io from 'socket.io-client'
  import flowboard from './components/flowboard/flowboard.vue'
  import controlboard from './components/controlboard/controlboard.vue'
  import bottomboard from './components/bottominput/bottominput.vue'
  import appbar from './components/header/appbar.vue'
  import bottom from './components/footer/bottom.vue'

  export default {
    name: 'app',
    mounted () {
      const socket = io('http://localhost:3000')
      socket.on('connect', function () {
        console.log('connect websocket sucess')
      })
      socket.on('message', function (data) {
        console.log(data)
      })
    },
    components: {
      flowboard,
      controlboard,
      bottomboard,
      appbar,
      bottom
    }
  }
</script>

<style lang="less">
  @import "assets/css/_base";
  #app {
    background: @midlleWhite;
    .board-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 30px;
      .controlboard {
        background: @White;
        width: 45%;
        height: 700px;
      }
      .flowboard {
        background: @White;
        margin-left: 20px;
        /*flex: 0;*/
        width: 45%;
        height: 700px;
      }
    }
    .bottomboard {
      margin: 30px auto 30px auto;
      width: 90%;
      background: @White;
    }
  }
</style>
