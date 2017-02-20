<template>
  <div id="app">
    <transition name="view-left" mode="">
      <router-view></router-view>  
    </transition>
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
    .view-left-enter
      transform: translate(100%)
    .view-left-enter-to, .view-left-leave
      transform: translate(0)
    .view-left-enter-active
    .view-left-leave-active
      transition: all .5s ease
    .view-left-leave-to
      transform: translate(-100%)
      
</style>
