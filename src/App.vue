<template>
  <div id="app">
    <router-view></router-view>  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  #app
    width: 100%
    height: 100%
    font-family: 'Avenir', Helvetica, Arial, sans-serif
  .slide-right-enter
    transform: translate(-100%)
  .slide-right-enter-to
    transform: translate(0)
  .slide-right-enter-active
    transition: all .5s ease

  .slide-left-enter
    transform: translate(100%)
  .slide-left-enter-to
    transform: translate(0)
  .slide-left-enter-active
    transition: all .5s ease

  .slide-enter
  .slide-leave-to
    transform: translate(100%)
  .slide-enter-to
  .slide-leave
    transform: translate(0)
  .slide-enter-active
    transition: all .5s ease

</style>
