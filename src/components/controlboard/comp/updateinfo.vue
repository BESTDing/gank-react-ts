<template>
  <div class="update-wrapper">
    <h3>更新信息提示</h3>
    <div class="total-count">
      总数：
      <span>{{ 2 }}</span>
      当前：
      <span>{{ 1 }}</span>
    </div>
    <div class="current">
      当前：
      <span>{{ `增1` }}</span>
      <span>{{`删2`}}</span>
      <span>{{`虑0`}}</span>
      <span>{{`略0`}}</span>
    </div>
    <div>
      总计：
      <span>{{ `增1` }}</span>
      <span>{{`删2`}}</span>
      <span>{{`虑0`}}</span>
      <span>{{`略0`}}</span>
    </div>
    <div class="operator">
      操作：
    </div>
    <div class="spend-time">
      耗时：
    </div>
    <div class="start-time">
      开始时间：
    </div>
    <div class="end-time">
      当前：
    </div>
  </div>
</template>

<script>
  export default {
    name: 'updateinfo',
    props: {}
  }
</script>

<style>

</style>
