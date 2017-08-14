<template>
  <div id="app">
    <div class="board-wrapper">
      <controlboard class="controlboard"></controlboard>
      <flowboard class="flowboard"></flowboard>
    </div>
    <bottomboard class="bottomboard"></bottomboard>
  </div>
</template>

<script>
  import io from 'socket.io-client'
  import flowboard from './components/flowboard/flowboard.vue'
  import controlboard from './components/controlboard/controlboard.vue'
  import bottomboard from './components/bottominput/bottominput.vue'

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
      bottomboard
    }
  }
</script>

<style lang="less">
#app {
  .board-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    .controlboard {
      /*flex: 0;*/
      width: 45%;
    }
    .flowboard {
      /*flex: 0;*/
      width: 45%;
      margin-left: 20px;
    }
  }
  .bottomboard {
    display: block;
  }
}
</style>
