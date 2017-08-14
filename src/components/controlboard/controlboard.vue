<template>
  <div class="control-board-wrapper">
    <div class="update-info-wrapper">
      <h1>更新信息提示</h1>
      <div class="total-count">
        <label for="">总数:</label>
        <span>{{ `[35]` }}</span>
      </div>
      <div class="current">
        <label for="">当前</label>
        <span>{{ `增[0]` }}</span><span>{{ `增[0]` }}</span><span>{{ `增[0]` }}</span><span>{{ `增[0]` }}</span><span>{{ `增[0]` }}</span>
      </div>
      <div></div>
    </div>
    <div class="operate-wrapper"></div>
  </div>
</template>

<script>
  export default {
    name: 'controlboard',
    props: {}
  }
</script>

<style>

</style>
