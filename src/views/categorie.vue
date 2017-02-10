<template>
  <div class='view-categorie'>
    <div class="header-wrapper">
      <vheader
        :list-name="categorie.categorieName"
        icon="back"
        @goBack="goBack"
        :backgroundColor="categorie.backgroundColor"
        color="#fff"></vheader>
    </div>

    <div class="view-categorie-data" :style="{backgroundColor: categorie.backgroundColor}">
      <div class="left">
        <ul>
          <li><span>7</span> completed!</li>
          <li><span>0</span> due today</li>
          <li><span>0</span> overdue</li>
        </ul>
      </div>
      <div class="right">
        <div class="circle-wrapper">
          <vcircle
            :borderColor="categorie.circleColor"
            :size="1.35"
            :borderWidth="0.18"
            :fontSize="0.4"
            :count="12"></vcircle>
        </div>
      </div>
    </div>
    <div class="view-categorie-content">
      <ul>
        <li 
          v-for="(todo,index) in categorie.todos"
          :style="{backgroundColor: todo.completed ? '#f4f4f4' : '#fff'}"
          @click="showTodoInfo(todo, index)">
          <div class="todo-text">
            <p 
              :style="{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#a8a8a8' : '#6b6b6b'
              }"
              >{{ todo.text }}</p>
            <p
              v-show="todo.dueDate"><span>Today</span> at 下午12:15</p>
          </div>
          <div class="todo-note">
            <span
              class="icon-note"
              v-show="todo.note"></span>
          </div>
          
        </li>
      </ul>
    </div>

    <div class="addbutton-wrapper" @click="goViewTodo">
      <addbutton
        :backgroundColor="categorie.backgroundColor"></addbutton>
    </div>

    <div class="todoinfo-wrapper" v-show="todoinfoShow">
      <todoinfo
        :todo="currentTodo"
        :index="currentIndex"
        @finished="finished"></todoinfo>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header/header'
  import addbutton from 'components/addbutton'
  import vcircle from 'components/circle'
  import todoinfo from 'components/todoinfo'

  export default {
    data () {
      return {
        todoinfoShow: false,
        currentTodo: {},
        currentIndex: 0
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      showTodoInfo (todo, index) {
        this.todoinfoShow = true
        this.currentTodo = todo
        this.currentIndex = index
      },
      finished () {
        this.todoinfoShow = false
      },
      goViewTodo () {
        this.$router.push({
          name: 'todo',
          params: {
            index: this.$route.params.index
          }
        })
      }
    },
    created () {
      const index = this.$route.params.index
      this.categorie = this.$store.getters.currentList.categories[index]
    },
    components: {
      vheader,
      addbutton,
      vcircle,
      todoinfo
    }
  }
</script>

<style lang='stylus'>
  .view-categorie
    .addbutton-wrapper
      position: fixed
      right: 44px
      bottom: 54px
    .view-categorie-data
      display: flex
      height: 166px
      font-size: 28px
      color: #c7e4e7
      ul
        margin-left: 124px
        li
          line-height: 38px
          span
            font-size: 29px
            color: #fff
            font-weight: bold
            text-shadow: 1px 1px 1px #007582
      .left
        flex: 1
      .right
        width: 200px
    .todoinfo-wrapper
      position: absolute
      top: 230px
      left: 0
      right: 0
      bottom: 0
      background: #fff
    .view-categorie-content
      position: absolute
      left: 0
      right: 0
      bottom: 0
      top: 284px
      overflow: auto
      ul
        li
          display: flex
          height: 116px
          border-bottom: 1px solid #f6f6f6
          border-top: 1px solid #ebebeb
          align-items: center
          .todo-text
            display: flex
            flex-direction: column
            flex: 1
            p
              text-indent: 35px
              &:nth-child(1)
                height: 48px
                font-size: 32px
                color: #6b6b6b
                line-height: 48px
              &:nth-child(2)
                flex: 1
                font-size: 21px
                color: #868484
                span
                  color: #3ea942
                  font-weight: bold
          .todo-note
            width: 66px
            font-size: 0
            span
              font-size: 20px
              color: #afafaf
</style>
