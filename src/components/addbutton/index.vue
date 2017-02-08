<template>
  <div class='add-button' :style="{backgroundColor: backgroundColor}">
    <span class="icon-add"></span> 
  </div>
</template>

<script>
  export default {
    props: {
      backgroundColor: {
        type: String,
        default: '#c7c7c7'
      }
    }
  }
</script>

<style lang='stylus'>
  .add-button
    width: 118px
    height: 118px
    border-radius: 50%
    box-shadow: 1px 2px 5px #4f6076
    text-align: center
    span
      display: block
      line-height: 120px
      font-size: 36px
      color: #fff
</style>
