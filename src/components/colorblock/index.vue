<template>
  <div class='color-block'>
    <div 
      v-for="backgroundColor in backgroundColors" 
      :style="{backgroundColor: backgroundColor}"></div>
  </div>
</template>

<script>
  export default {
    props: {
      backgroundColors: {
        type: Array,
        default: function () {
          return ['#ef5350', '#00b8d4', '#fbaf29', '#00bfa5']
        }
      },
      width: {
        type: String,
        default: '146px'
      }
    }
  }
</script>

<style lang='stylus'>
  .color-block
    width: 146px
    height: 146px
    div
      display: inline-block
      width: 47%
      height: 47%
      background: #fff
      font-size: 0
      &:nth-child(odd)
        margin-right: 6%
      &:nth-child(1)
        margin-bottom: 6%
      &:nth-child(2)
        margin-bottom: 6%
</style>
