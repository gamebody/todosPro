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
          <li><span>{{ completedCount }}</span> completed!</li>
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
            :count="UnCompletedCount"></vcircle>
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

    <transition name="slide-top" mode="">
      <div class="todoinfo-wrapper" v-show="todoinfoShow">
      <todoinfo
        :todo="currentTodo"
        :index="currentIndex"
        @finished="finished"></todoinfo>
      </div>    
    </transition>
    <div class="mask-wrapper" v-show="maskShow" @click="finished">
      <vmask></vmask>
    </div>
  </div>

</template>

<script>
  import vheader from 'components/header/header'
  import addbutton from 'components/addbutton'
  import vcircle from 'components/circle'
  import todoinfo from 'components/todoinfo'
  import vmask from 'components/mask'

  export default {
    data () {
      return {
        todoinfoShow: false,
        maskShow: false,
        currentTodo: {},
        currentIndex: 0
      }
    },
    computed: {
      UnCompletedCount () {
        return this.categorie.todos.filter((todo) => !todo.completed).length
      },
      completedCount () {
        return this.categorie.todos.filter((todo) => todo.completed).length
      },
      totalCount () {
        return this.categorie.todos.length
      }
    },
    methods: {
      toggleMaskShow () {
        this.maskShow = !this.maskShow
      },
      goBack () {
        this.$router.go(-1)
      },
      showTodoInfo (todo, index) {
        this.todoinfoShow = true
        this.toggleMaskShow()
        this.currentTodo = todo
        this.currentIndex = index
      },
      finished () {
        this.todoinfoShow = false
        this.toggleMaskShow()
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
      todoinfo,
      vmask
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
      z-index: 300
      background: #fff
    .slide-top-enter
    .slide-top-leave-to
      transform: translate(0, 100%)
    .slide-top-enter-to
    .slide-top-leave
      transform: translate(0)
    .slide-top-enter-active
    .slide-top-leave-active
      transition: all .5s ease
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
