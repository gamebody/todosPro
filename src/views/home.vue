<template>
  <div class="home">
    <vheader
      :list-name="listName"
      @showList="showList"
      @showTheme="showTheme"
      @renameList="showAlert('rename')"
      @deleteList="showAlert('deleteList')"
      @renameCategories="renameCategories"></vheader>
    
    
    <div class="home-list" id="js_show">
      <div class="home-list-header">

      </div>
      <div class="home-list-content">
        <ul>
          <li v-for="list in lists" @click="selectList(list)">
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
                  <span>{{ list.unfinishedCount }}</span>
                </div>
              </div>
          </li> 
        </ul>

        <div class="add-list" @click="showAlert('addList')">
          <div class="add-list-icon">
            <span class="icon-add"></span>
          </div>
          <div class="add-list-content">
            <p>Add New List</p>
          </div>
        </div>
      </div>
    </div>

    
    <div class="maskk-wrapper" @click="hiddenAll" v-show="maskShow">
      <maskk
        :transparent="maskTransparent"></maskk>
    </div>
    

    <div class="home-content">
      <div class="categoire-wrapper" v-for="(categorie, index) in currentList.categories"
        @click="goViewCategorie(index)">
        <categorie
          :categorie-name="categorie.categorieName"
          :background-color="categorie.backgroundColor"
          :border-color="categorie.circleColor"
          :todos="categorie.todos"></categorie>
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
        @cancelAlert="cancelAlert"
        @addListOk="addListOk"
        @rename="rename"
        @deleteList="deleteList"
        :operation="operation"
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
  import maskk from 'components/mask'

  export default {
    data () {
      return {
        maskShow: false,
        themeShow: false,
        alertShow: false,
        maskTransparent: false,
        operation: 'addList'
      }
    },
    computed: {
      currentList () {
        return this.$store.getters.currentList
      },
      lists () {
        const lists = this.$store.state.lists
        const arr = []

        lists.forEach((list) => {
          let obj = {
            id: list.id,
            isCurrent: list.isCurrent,
            listName: list.listName,
            themeName: list.themeName,
            unfinishedCount: 0
          }
          list.categories.forEach((categorie) => {
            categorie.todos.forEach((todo) => {
              if (!todo.isFinished) {
                obj.unfinishedCount++
              }
            })
          })
          arr.push(obj)
        })

        return arr
      },
      listName () {
        return this.$store.getters.currentList.listName
      }
    },
    methods: {
      hiddenAll () {
        this.themeShow = false
        this.alertShow = false
        this.maskShow = false
        this.maskTransparent = false
        document.getElementById('js_show').style.transform = 'translate(-100%)'
      },
      showList () {
        this.maskShow = true
        document.getElementById('js_show').style.transform = 'translate(0)'
      },
      showTheme () {
        this.maskShow = true
        this.themeShow = true
        this.maskTransparent = true
      },
      cancelTheme () {
        this.hiddenAll()
        this.$store.commit('cancelTheme')
      },
      saveTheme () {
        this.hiddenAll()
        this.$store.commit('saveTheme')
      },
      cancelAlert () {
        this.hiddenAll()
      },
      addListOk () {
        this.hiddenAll()
        this.$store.commit('addList', this.$refs.alert.value)
        this.$refs.alert.value = ''
      },
      selectList (list) {
        this.$store.commit('selectList', list)
      },
      showAlert (operation) {
        this.hiddenAll()
        this.maskShow = true
        this.alertShow = true
        this.operation = operation
      },
      rename () {
        this.$store.commit('rename', this.$refs.alert.value)
        this.hiddenAll()
      },
      deleteList () {
        this.$store.commit('deleteList')
        this.hiddenAll()
      },
      renameCategories () {
        this.$router.push({
          name: 'renameCategories'
        })
      },
      goViewCategorie (index) {
        this.$router.push({
          name: 'categorie',
          params: {
            index
          }
        })
      }
    },
    components: {
      vheader,
      categorie,
      addbutton,
      theme,
      colorblock,
      alert,
      maskk
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
        z-index: 300
      
</style>
