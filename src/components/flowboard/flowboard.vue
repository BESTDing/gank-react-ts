<template>
  <div class="flow-board-wrapper">
    <mu-timeline class="mu-timeline">
      <mu-timeline-item v-for="item in items" :key="item.date">
      <span slot="time">{{ item.date }}</span>
      <span slot="des">{{ item.des }}</span>
    </mu-timeline-item>
    </mu-timeline>
  </div>
</template>

<script>
  export default {
    name: 'flowboard',
    props: {
      items: {
        type: Array,
        default: [{
          date: '20120809 09:00',
          des: '木有读取到记录， 暂停， 一秒'
        }, {
          date: '20120809 09:00',
          des: '木有读取到记录， 暂停， 一秒'
        }, {
          date: '20120809 09:00',
          des: '木有读取到记录， 暂停， 一秒'
        }, {
          date: '20120809 09:00',
          des: '木有读取到记录， 暂停， 一秒'
        }, {
          date: '20120809 09:00',
          des: '木有读取到记录， 暂停， 一秒'
        }, {
          date: '20120809 09:00',
          des: '木有读取到记录， 暂停， 一秒'
        }, {
          date: '20120809 09:00',
          des: '木有读取到记录， 暂停， 一秒'
        }, {
          date: '20120809 09:00',
          des: '木有读取到记录， 暂停， 一秒'
        }, {
          date: '20120809 09:00',
          des: '木有读取到记录， 暂停， 一秒'
        }]
      }
    }
  }
</script>

<style lang="less">
  .flow-board-wrapper {
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 auto;
    border-radius: 2px;
    box-shadow: 1px 1px 5px #888888;
    .mu-timeline {
      margin-top: 20px;
      .mu-timeline-item {
        margin: 0 auto;
        width: 50%;
      }
    }
  }
</style>
