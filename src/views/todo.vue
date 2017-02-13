<template>
  <div class='view-todo'>
    <div v-show="!addnote">
      <div class="header-wrapper">
        <vheader
          icon="back"
          :save="false"
          @goBack="goBack"
          @saved="saved"
          :backgroundColor="currentColor"
          color="#fff"></vheader>
      </div>
      <div class="view-todo-info" :style="{backgroundColor: currentColor}">
        <h6>TASK</h6>
        <div class="todo-info-text">
          <input type="text" placeholder="Your Task" v-model="text">
        </div>
        <div class="todo-info-position">
          <div class="left" @click="showPanelSelectList">
            <span class="icon-list2"></span>
            <span>{{ list.listName }}</span>
          </div>
          <div class="right" @click="showPanelSelectCategorie">
            <div class="categorieblock-wrapper">
              <categorieblock
                width="small"
                color="#fff"
                :position="position + 1"></categorieblock>  
            </div>
            <span>{{ list.categories[position].categorieName }}</span>
          </div>
        </div>
      </div>
      <div class="view-todo-content">
        <ul :style="{color: currentColor}">
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
      <div class="addnote-header" :style="{color: currentColor}">
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
      <div class="addnote-line" :style="{backgroundColor: currentColor}"></div>
      <div class="addnote-content">
        <textarea placeholder="Add a note" autofocus="true" v-model="note"></textarea>
      </div>
    </div>

    <div class="panel select-list" v-show="panelSelectListShow">
      <h6>Task List</h6>
      <ul>
        <li v-for="(list,index) in lists" @click="SelectList(list.id)">
          <div class="colorblock-wrapper">
            <colorblock
              :small="true"
              :backgroundColors="list.backgroundColors"></colorblock>
          </div>
          <p>{{ list.listName }}</p>
        </li>
      </ul>
    </div>

    <div class="panel select-categorie" v-show="panelSelectCategorieShow">
      <h6>Task category</h6>
      <ul>
        <li v-for="categorie, index of list.categories" 
          :style="{backgroundColor: index === position ? categorie.backgroundColor : ''}"
          @click="selectCategorie(index)">
          <div class="left">
            <div class="circle">
              <div class="categorieblock-wrapper">
              <categorieblock
                width="big"
                :color="categorie.backgroundColor"
                :position="index+1"></categorieblock>
              </div>
            </div>  
          </div>
          <div class="right">
            <p>{{ info[index] }}</p>
            <span>{{ categorie.categorieName }}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="vmask-wrapper" v-show="maskShow">
      <vmask></vmask>
    </div>

  </div>
</template>

<script>
  import vheader from 'components/header/header'
  import categorieblock from 'components/categorieblock'
  import colorblock from 'components/colorblock'
  import vmask from 'components/mask'

  export default {
    data () {
      return {
        addnote: false,
        panelSelectListShow: false,
        panelSelectCategorieShow: false,
        maskShow: false,
        list: null,
        position: 0,
        info: [
          'IMPORTANT AND URGENT',
          'IMPORTANT BUT NOT URGENT',
          'URGENT BUT NOT IMPORTANT',
          'NOT IMPORTANT OR URGENT'
        ],
        text: '',
        note: '',
        dueDate: ''
      }
    },
    computed: {
      lists () {
        const lists = this.$store.state.lists
        const computedLists = []
        let backgroundColors = []
        lists.forEach((list) => {
          list.categories.forEach((categorie) => {
            backgroundColors.push(categorie.backgroundColor)
          })
          computedLists.push({
            id: list.id,
            listName: list.listName,
            backgroundColors
          })
          backgroundColors = []
        })

        return computedLists
      },
      currentColor () {
        return this.list.categories[this.position].backgroundColor
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      saved () {
        this.$store.commit('addTodo', {
          text: this.text,
          note: this.note,
          dueDate: this.dueDate,
          createDate: new Date().getTime(),
          listId: this.list.id,
          position: this.position
        })
        this.goBack()
      },
      noting () {
        this.addnote = true
      },
      noteDone () {
        this.addnote = false
      },
      showPanelSelectList () {
        this.maskShow = true
        this.panelSelectListShow = true
      },
      SelectList (id) {
        this.list = this.$store.state.lists.filter(list => list.id === id)[0]
        this.maskShow = false
        this.panelSelectListShow = false
      },
      showPanelSelectCategorie () {
        this.maskShow = true
        this.panelSelectCategorieShow = true
      },
      selectCategorie (index) {
        this.maskShow = false
        this.panelSelectCategorieShow = false
        this.position = index
      }
    },
    created () {
      this.position = this.$route.params.index
      this.list = this.$store.getters.currentList
    },
    components: {
      vheader,
      categorieblock,
      colorblock,
      vmask
    }
  }
</script>

<style lang='stylus'>
  .view-todo
    position: relative
    width: 100%
    height: 100%
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
            line-height: 42px
            font-size: 26px
            margin-right: 20px
          .icon-list2
            display: block
            float: left
            font-size: 42px
        .right
          flex: 1
          span
            display: block
            float: left
            font-size: 26px
            line-height: 42px
            height: 35px
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
    .panel
      display: flex
      flex-direction: column
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      z-index: 300
      width: 90%
      border-radius: 5px
      box-shadow: 0 0 5px #323232
      background: #fff
      h6
        flex: 1
        height: 120px
        font-size: 36px
        line-height: 120px
        text-indent: 34px
      &.select-list
        ul
          li
            display: flex
            align-items: center
            height: 130px
            padding-left: 40px
            .colorblock-wrapper
              width: 100px
              align-self: center
            p
              flex: 1
              font-size: 44px
              color: #636363
      &.select-categorie
        ul
          font-size: 20px
          li
            display: flex
            align-items: center
            height: 166px
            margin: 0 18px 18px 18px
            background: #bababa
            .left
              width: 166px
              text-align: center
              font-size: 0
              .circle
                display: inline-block
                position: relative
                width: 100px
                height: 100px
                border-radius: 50%
                background: #fff
                line-height: 106px
                .categorieblock-wrapper
                  position: absolute
                  top: 50%
                  left: 50%
                  transform: translate(-50%, -50%)
            .right
              flex: 1
              color: #fff
              p
                font-size: 24px
                line-height: 50px
                vertical-align: top
              span
                font-size: 28px

</style>
