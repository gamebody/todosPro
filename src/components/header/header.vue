<template>
  <div class="header">
    <div class="header-left" @click="showList">
      <span class="icon-list"></span>
    </div>
    <div class="header-content">
      <span>haha</span>
    </div>
    <div class="header-sort">
      <span class="icon-sort"></span>
    </div>
    <div class="header-right">
      <span class="icon-more"></span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showList () {
        this.$emit('showList')
      }
    }
  }
</script>

<style lang='stylus'>
  .header
    display: flex
    width: 100%
    height: 118px
    line-height: 118px    
    background: #ccc
    color: #474747
    text-align: center
    font-size: 50px
    span
      display: inline-block
      width: 100%
      height: 118px
      line-height: 118px
    .header-left
      width: 118px
    .header-content
      flex: 1
      text-align: left
      text-indent: 16px
    .header-sort
      width: 100px
    .header-right
      width: 100px
</style>
