<template>
  <div class='categorieBlock clear-f' :class="width">
    <div 
      v-for="index in 4" 
      :style="{borderColor: color, backgroundColor: (index == position ? color : '')}"></div>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: '#000'
      },
      width: {
        type: String,
        default: 'big'
      },
      position: {
        type: Number,
        default: 1
      }
    }
  }
</script>

<style lang='stylus'>
  .categorieBlock
    font-size: 0
    line-height: 1
    &.big
      width: 58px
      height: 58px
    &.small
      width: 30px
      height: 30px
    div
      float: left
      box-sizing: border-box
      width: 46%
      height: 46%
      border: 1px solid #000
      &:nth-child(even)
        margin-left: 8%
      &:nth-child(1)
      &:nth-child(2)
        margin-bottom: 8%
</style>
