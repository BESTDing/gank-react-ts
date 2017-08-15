<template>
  <div class="bottom-board-wrapper">
    <div class="id-input">
      <span>id接口:</span>
      <el-input v-model="input" placeholder="id接口"></el-input>
    </div>
    <div class="list-input">
      list接口：
      <el-input v-model="input" placeholder="list接口"></el-input>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bottomboard',
    data () {
      return {
        input: ''
      }
    }
  }
</script>

<style lang="less">
  .bottom-board-wrapper {
    padding: 20px 0;
    text-align: center;
    border-radius: 2px;
    box-shadow: 1px 1px 3px  #888888;
    .id-input {
      margin-bottom: 20px;
    }
    .el-input {
      width: 50%;
      display: inline-block;
    }
  }
</style>
