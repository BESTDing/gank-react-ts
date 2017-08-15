<template>
  <div class="operate-wrapper">
    <h3>操作区</h3>
    <div class="operate-from">
      <!--select site-->
      <el-select v-model="value5" multiple placeholder="选择站点">
        <el-option
          v-for="item in sites"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!--select type-->
     <el-select v-model="value5" multiple placeholder="选择类型">
        <el-option
          v-for="item in types"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!---->
      <el-select v-model="value5" multiple placeholder="选择类型">
        <el-option
          v-for="item in types"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!---->
      <el-input placeholder="请输入内容" v-model="input3">
        <template slot="prepend">未更</template>
      </el-input>
      <!---->
      <el-input placeholder="请输入内容" v-model="input3">
        <template slot="prepend">等待</template>
      </el-input>
      <!---->
      <el-input placeholder="请输入内容" v-model="input3">
        <template slot="prepend">暂停</template>
      </el-input>
      <!---->
      <el-input placeholder="请输入内容" v-model="input3">
        <template slot="prepend">接口</template>
      </el-input>
      <!---->
      <el-input placeholder="请输入内容" v-model="input3">
        <template slot="prepend">读取</template>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input3">
        <template slot="prepend">对比</template>
      </el-input>
    </div>
    <div class="row">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sites: [{
          value: '广州',
          label: '广州'
        }, {
          value: '潮汕',
          label: '潮汕'
        }, {
          value: '新塘',
          label: '新塘'
        }, {
          value: '杭州',
          label: '杭州'
        }, {
          value: '郑州',
          label: '郑州'
        }],
        value5: [],
        types: [{
          value: '手动',
          label: '手动提交'
        }, {
          value: '自动',
          label: '自动'
        }]
      }
    },
    name: 'operateinfo',
    props: { }
  }
</script>

<style lang="less">
  .operate-wrapper {
    .operate-from {
      .el-input {
        margin-left: 20px;
        margin-bottom: 10px;
        width: 155px;
        vertical-align: bottom;
      }
    }
  }
</style>
