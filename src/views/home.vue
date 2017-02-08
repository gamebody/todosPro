<template>
  <div class="home">
    <vheader
      v-on:showList="showList"
      v-on:showTheme="toggleShowTheme"></vheader>
    <div class="home-list" id="js_show">
      <div class="home-list-header">

      </div>
      <div class="home-list-content">
        <ul>
          <li>
            <router-link to="/">
              <div class="list-item">
                <div class="list-theme"></div>
                <div class="list-name ">
                  <p>哈哈</p>
                </div>
                <div class="list-count">
                  <span>11</span>
                </div>
              </div>
            </router-link>   
          </li> 
        </ul>
        <div class="add-list">
          <div class="add-list-icon">
            <span class="icon-add"></span>
          </div>
          <div class="add-list-content">
            <p>Add New List</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" @click="hiddenList($event)" v-show="maskShow"></div>

    <div class="home-content">
      <div class="categoire-wrapper" v-for="item in categories">
        <categorie
          :categorie-name="item.categorieName"
          :background-color="item.backgroundColor"></categorie>
      </div>

      <div class="add-button-wrapper">
        <addbutton></addbutton>
      </div>

      <div class="theme-wrapper" v-show="themeShow">
        <theme
          v-on:cancel="cancelTheme"
          v-on:save="saveTheme"></theme>
      </div>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header/header'
  import categorie from 'components/categorie'
  import addbutton from 'components/addbutton'
  import theme from 'components/theme'

  export default {
    data () {
      return {
        maskShow: false,
        themeShow: false
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
      },
      toggleShowTheme () {
        this.themeShow = !this.themeShow
      },
      cancelTheme () {
        this.toggleShowTheme()
        this.$store.commit('cancelTheme')
      },
      saveTheme () {
        this.toggleShowTheme()
        this.$store.commit('saveTheme')
      }
    },
    components: {
      vheader,
      categorie,
      addbutton,
      theme
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
      background: #fff
      transform: translate(-100%)
      transition: all .3s ease-in-out
      .home-list-header
        height: 188px
        background: #f9c23b
        margin-bottom: 16px
      .home-list-content
        ul
          li
            .list-item
              display: flex
              height: 96px
              border-top: 1px solid #fbd16d
              border-bottom: 1px solid #fbd16d            
              background: #fbd579
              line-height: 98px
              .list-theme
                width: 116px
                height: 100%
              .list-name
                flex: 1
                font-size: 30px
                color: #fff
                text-indent: 36px  
              .list-count
                width: 104px
                font-size: 21px
                color: #5d502e
                text-align: center
        .add-list
          display: flex
          height: 98px
          line-height: 98px
          .add-list-icon
            width: 116px
            height: 100%
            font-size: 30px
            text-align: center
            color: #6f6f6f
          .add-list-content
            flex: 1
            text-indent: 36px
            font-size: 30px
            font-weight: bold
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
      .add-button-wrapper
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
      .theme-wrapper
        position: absolute
        bottom: 0
        width: 100%
      
</style>
