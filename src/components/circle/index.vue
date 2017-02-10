<template>
  <div class="circle" :style="{width: size+'rem', height: size+'rem', fontSize: fontSize+'rem'}">
    <div class="inner" :style="{borderColor: borderColor, borderWidth: borderWidth+'rem', backgroundColor: backgroundColor}">
      <p :style="{color: color}">{{ count }}</p>
      <span :style="{color: spanColor}">to go</span>
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
      },
      size: {
        type: Number,
        default: null
      },
      borderWidth: {
        type: Number,
        default: null
      },
      fontSize: {
        type: Number,
        default: null
      },
      backgroundColor: {
        type: String,
        default: ''
      }
    },
    data () {
      return {}
    },
    computed: {
      color () {
        if (this.backgroundColor === '') {
          return '#fff'
        } else {
          return '#595b5b'
        }
      },
      spanColor () {
        if (this.backgroundColor === '') {
          return '#e9eceb'
        } else {
          return '#8c8c8f'
        }
      }
    }
  }
</script>

<style lang='stylus'>
  .circle
    box-sizing: border-box
    width: 290px
    height: 290px
    font-size: 70px
    .inner
      box-sizing: border-box
      display: flex
      align-items: center
      position: relative
      width: 100%
      height: 100%
      border-radius: 50%
      border: 38px solid #cac2b4
      text-align: center
      p
        flex: 1
        font-size: 100%
        line-height: 100%
        color: #595b5b
        font-weight: bold
        padding-bottom: 10%
      span
        position: absolute
        display: inline-block
        width: 100%
        left: 0
        bottom: 16%
        font-size: 40%
        color: #86868a
</style>
