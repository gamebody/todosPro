<template>
  <div class='mask' :style="{backgroundColor: backgroundColor}"></div>
</template>

<script>
  export default {
    props: {
      transparent: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      backgroundColor () {
        return this.transparent ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, .6)'
      }
    }
  }
</script>

<style lang='stylus'>
  .mask
    position: absolute
    left: 0
    top: 0
    z-index: 100
    width: 100%
    height: 100%
</style>
