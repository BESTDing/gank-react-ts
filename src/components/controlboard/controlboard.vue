<template>
  <div class="control-board-wrapper">
    <updateinfo></updateinfo>
    <operateinfo></operateinfo>
  </div>
</template>

<script>
  import operateinfo from './comp/operateinfo.vue'
  import updateinfo from './comp/updateinfo.vue'
  export default {
    name: 'controlboard',
    props: {},
    components: {
      operateinfo,
      updateinfo
    }
  }
</script>

<style lang="less">
  .control-board-wrapper {
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 2px;
    box-shadow: -1px -1px 5px #888888;
  }
</style>
