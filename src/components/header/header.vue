<template>
  <div class="header" :style="{backgroundColor: backgroundColor}">
    <div class="header-left" @click="showList">
      <span class="icon-list"></span>
    </div>
    <div class="header-content">
      <span>{{ listName }}</span>
    </div>
    <div class="header-sort">
      <span class="icon-sort"></span>
    </div>
    <div class="header-right">
      <span class="icon-more" @click="toggleToolList"></span>
    </div>
    <div class="tool-list-wrapper" v-show="toolListShow">
      <toollist 
        @changeTheme="changeTheme"
        @renameList="renameList"
        @deleteList="deleteList"
        @renameCategories="renameCategories"></toollist>
    </div>
  </div>  
</template>

<script>
  import toollist from 'components/toollist'

  export default {
    props: {
      backgroundColor: {
        type: String,
        default: '#fff'
      },
      listName: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        toolListShow: false
      }
    },
    methods: {
      showList () {
        this.$emit('showList')
      },
      toggleToolList () {
        this.toolListShow = !this.toolListShow
      },
      changeTheme () {
        const themeName = this.$store.getters.currentList.themeName
        this.$store.commit('changeThemeCurrent', themeName)
        this.toggleToolList()
        this.$emit('showTheme')
      },
      renameList () {
        this.toggleToolList()
        this.$emit('renameList')
      },
      deleteList () {
        this.toggleToolList()
      },
      renameCategories () {
        this.toggleToolList()
      }
    },
    components: {
      toollist
    }
  }
</script>

<style lang='stylus'>
  .header
    display: flex
    width: 100%
    height: 118px
    line-height: 118px    
    color: #474747
    text-align: center
    font-size: 50px
    span
      display: inline-block
      width: 100%
      height: 118px
      line-height: 118px
    .header-left
      width: 118px
    .header-content
      flex: 1
      text-align: left
      text-indent: 16px
    .header-sort
      width: 100px
    .header-right
      width: 100px
    .tool-list-wrapper
      position: absolute
      z-index: 100
      right: 5px
      top: 5px
</style>
