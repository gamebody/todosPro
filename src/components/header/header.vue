<template>
  <div class="header" :style="{backgroundColor: backgroundColor}">
    <div class="header-left" @click="clickLeft">
      <span :class="'icon-' + icon"></span>
    </div>
    <div class="header-content">
      <span>{{ listName }}</span>
    </div>
    <div class="header-sort" v-if="save">
      <span class="icon-sort"></span>
    </div>
    <div class="header-right">
      <span class="icon-more" @click="toggleToolList" v-if="save"></span>
      <span v-else class="save" @click="saved">SAVE</span>
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
      },
      icon: {
        type: String,
        default: 'list'
      },
      save: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        toolListShow: false
      }
    },
    methods: {
      clickLeft () {
        if (this.icon === 'back') {
          this.$emit('goBack')
        } else {
          this.$emit('showList')
        }
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
        this.$emit('deleteList')
      },
      renameCategories () {
        this.toggleToolList()
        this.$emit('renameCategories')
      },
      saved () {
        this.$emit('saved')
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
      .save
        font-size: 24px
        vertical-align: top
    .tool-list-wrapper
      position: absolute
      z-index: 100
      right: 5px
      top: 5px
</style>
