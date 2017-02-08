<template>
  <div class="home">
    <vheader v-on:showList="showList"></vheader>
    <div class="home-list" id="js_show">
    </div>
    <div class="mask" @click="hiddenList($event)" v-show="maskShow"></div>

    <div class="home-content">
      <div class="categoire-wrapper" v-for="item in categories">
        <categorie
          :categorie-name="item.categorieName"></categorie>
      </div>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header/header'
  import categorie from 'components/categorie'

  export default {
    data () {
      return {
        maskShow: false
      }
    },
    computed: {
      categories () {
        return this.$store.state.lists[0].categories
      }
    },
    methods: {
      hiddenList (e) {
        this.maskShow = false
        document.getElementById('js_show').style.transform = 'translate(-100%)'
      },
      showList () {
        this.maskShow = true
        document.getElementById('js_show').style.transform = 'translate(0)'
      }
    },
    components: {
      vheader,
      categorie
    }
  }
</script>

<style lang="stylus">
  .home
    position: relative
    width: 100%
    height: 100%
    .mask
      position: absolute
      left: 0
      top: 0
      z-index: 100
      width: 100%
      height: 100%
      background: rgba(0, 0, 0, .6)
    .home-list
      position: absolute
      top: 0
      left: 0
      z-index: 1000
      width: 80%
      height: 100%
      background: #fbd579
      transform: translate(-100%)
      transition: all .3s ease-in-out
    .home-content
      position: absolute
      left: 0
      right: 0
      top: 118px
      bottom: 0
      .categoire-wrapper
        display: inline-block
        width: 50%
        height: 50%
</style>
