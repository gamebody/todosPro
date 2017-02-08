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
          <li v-for="list in lists">
              <div class="list-item" :class="{active: list.isCurrent}">
                <div class="list-theme">
                  <div class="color-block-wrapper">
                    <colorblock
                      :small="true"></colorblock>
                  </div> 
                </div>
                <div class="list-name ">
                  <p>{{ list.listName }}</p>
                </div>
                <div class="list-count">
                  <span>11</span>
                </div>
              </div>
          </li> 
        </ul>
        <div class="add-list" @click="addList">
          <div class="add-list-icon">
            <span class="icon-add"></span>
          </div>
          <div class="add-list-content">
            <p>Add New List</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mask" @click="hiddenList" v-show="maskShow"></div>

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

    <div class="alert-wrapper" v-show="alertShow">
      <alert
        v-on:cancelAddList="cancelAddList"
        v-on:addListOk="addListOk"
        ref="alert"></alert>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header/header'
  import categorie from 'components/categorie'
  import addbutton from 'components/addbutton'
  import theme from 'components/theme'
  import colorblock from 'components/colorblock'
  import alert from 'components/alert'

  export default {
    data () {
      return {
        maskShow: false,
        themeShow: false,
        alertShow: false
      }
    },
    computed: {
      categories () {
        return this.$store.state.lists[0].categories
      },
      lists () {
        return this.$store.state.lists
      }
    },
    methods: {
      hiddenList () {
        this.maskShow = false
        this.alertShow = false
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
      },
      addList () {
        this.hiddenList()
        this.maskShow = true
        this.alertShow = true
      },
      cancelAddList () {
        this.maskShow = false
        this.alertShow = false
      },
      addListOk () {
        this.maskShow = false
        this.alertShow = false
        this.$store.commit('addList', this.$refs.alert.value)
      }
    },
    components: {
      vheader,
      categorie,
      addbutton,
      theme,
      colorblock,
      alert
    }
  }
</script>

<style lang="stylus">
  .home
    position: relative
    width: 100%
    height: 100%
    .alert-wrapper
      width: 100%
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      z-index: 101
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
              line-height: 98px
              color: #000
              &.active
                background: #fbd579
                color: #fff
              .list-theme
                position: relative
                width: 116px
                .color-block-wrapper
                  position: absolute
                  left: 50%
                  top: 50%
                  transform: translate(-50%, -50%)
              .list-name
                flex: 1
                font-size: 30px
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
