<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>        
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide'
    }
  },
  watch: {
    $route (to, from) {
      const toName = to.name
      const fromName = from.name

      if (toName === 'home') {
        this.transitionName = 'slide-right'
      }
      if (fromName === 'home') {
        this.transitionName = 'slide-left'
      }
      if (toName === 'todo') {
        this.transitionName = 'slide-left'
      }
      if (fromName === 'todo') {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>

<style lang="stylus">
  #app
    width: 100%
    height: 100%
    font-family: 'Avenir', Helvetica, Arial, sans-serif
  .slide-right-enter
  .slide-right-leave-to
    transform: translate(-100%)
  .slide-right-enter-to
  .slide-right-leave
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
