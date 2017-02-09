<template>
  <div class="circle">
    <div class="inner" :style="{borderColor: borderColor}">
      <p>{{ count }}</p>
      <span>to go</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      count: {
        type: Number,
        default: 0
      },
      borderColor: {
        type: String,
        default: '#cac2b4'
      }
    }
  }
</script>

<style lang='stylus'>
  .circle
    display: inline-block
    .inner
      position: relative
      width: 220px
      height: 220px
      border-radius: 50%
      border: 36px solid #cac2b4
      background: #fff
      text-align: center
      p
        font-size: 70px
        line-height: 220px
        color: #595b5b
        font-weight: bold
      span
        position: absolute
        display: inline-block
        width: 100%
        left: 0
        bottom: 42px
        font-size: 18px
        color: #86868a
</style>
