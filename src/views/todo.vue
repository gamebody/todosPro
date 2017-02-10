<template>
  <div class='view-todo'>
    <div v-show="!addnote">
      <div class="header-wrapper">
        <vheader
          icon="back"
          :save="false"
          @goBack="goBack"
          @saved="saved"
          :backgroundColor="categorie.backgroundColor"
          color="#fff"></vheader>
      </div>
      <div class="view-todo-info" :style="{backgroundColor: categorie.backgroundColor}">
        <h6>TASK</h6>
        <div class="todo-info-text">
          <input type="text" placeholder="Your Task">
        </div>
        <div class="todo-info-position">
          <div class="left">
            <span class="icon-list2"></span>
            <span>hahha</span>
          </div>
          <div class="right">
            <div class="categorieblock-wrapper">
              <categorieblock
                width="small"
                color="#fff"
                :position="this.$route.params.index + 1"></categorieblock>  
            </div>
            <span>好的</span>
          </div>
        </div>
      </div>
      <div class="view-todo-content">
        <ul :style="{color: categorie.backgroundColor}">
          <li>
            <div class="left">
              <span class="icon-date"></span>
            </div>
            <div class="right">
              <div class="right-header">
                <span>DUE</span>
              </div>
              <span>Set a due date and time</span>
            </div>
          </li>
          <li @click="noting">
            <div class="left">
              <span class="icon-note"></span>
            </div>
            <div class="right">
              <div class="right-header">
                <span>NOTE</span>
              </div>
              <span>Add a note</span>
            </div>
          </li>
        </ul>
      </div>   
    </div>


    <div class="addnote" v-show="addnote">
      <div class="addnote-header" :style="{color: categorie.backgroundColor}">
        <div class="addnote-icon">
          <span class="icon-note"></span>
        </div>
        <div class="addnote-title">
          <span>NOTE</span>
        </div>
        <div class="addnote-done" @click="noteDone">
          <span>DONE</span>
        </div>
      </div>
      <div class="addnote-line" :style="{backgroundColor: categorie.backgroundColor}"></div>
      <div class="addnote-content">
        <textarea placeholder="Add a note" autofocus="true"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header/header'
  import categorieblock from 'components/categorieblock'

  export default {
    data () {
      return {
        addnote: false
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      saved () {},
      noting () {
        this.addnote = true
      },
      noteDone () {
        this.addnote = false
      }
    },
    created () {
      const index = this.$route.params.index
      this.categorie = this.$store.getters.currentList.categories[index]
    },
    components: {
      vheader,
      categorieblock
    }
  }
</script>

<style lang='stylus'>
  .view-todo
    .view-todo-info
      h6
        font-size: 20px
        color: #fcdfde
        text-indent: 125px
      .todo-info-text
        width: 486px
        margin: 0 auto
        margin-bottom: 24px
        input
          width: 100%
          height: 120px
          border-bottom: 4px solid #fff
          font-size: 44px
          color: #fff
      .todo-info-position
        display: flex
        align-items: center
        width: 486px
        height: 100px
        margin: 0 auto
        font-size: 0
        color: #fff
        .left
          flex: 1
          span
            display: block
            float: left
            height: 36px
            font-size: 36px
            margin-right: 20px
            line-height: 36px
          .icon-list2
            font-size: 40px
        .right
          flex: 1
          font-size: 0
          vertical-align: bottom
          span
            display: block
            float: left
            height: 36px
            font-size: 30px
            line-height: 36px
          .categorieblock-wrapper
            float: left
            margin-right: 20px
            font-size: 0
    .view-todo-content
      width: 100%
      ul
        margin-top: 26px
        li
          display: flex
          height: 140px
          font-size: 28px
          align-items: center
          .left
            width: 142px
            text-align: center
            font-size: 0
            span
              font-size: 72px
          .right
            line-height: 36px
            &>span
              color: #969696
    .addnote
      .addnote-header
        display: flex
        height: 142px
        align-items: center
        .addnote-icon
          width: 144px
          font-size: 72px
          text-align: center
        .addnote-title
          flex: 1
          font-size: 26px
        .addnote-done
          width: 180px
          font-size: 26px
          text-align: center
          font-weight: bold !important
          color: #000
      .addnote-line
        width: 90%
        height: 1px
        border: 1px solid #f48583
        margin: 0 auto
      .addnote-content
        width: 90%
        padding-top: 50px
        margin: 0 auto
        textarea
          outline: none
          border: none
          width: 100%
          height: 500px
          font-size: 45px
          color: #000

</style>
