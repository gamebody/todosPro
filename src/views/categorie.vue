<template>
  <div class='view-categorie'>
    <div class="header-wrapper">
      <vheader
        :list-name="$route.params.categorie.categorieName"
        icon="back"
        @goBack="goBack"
        :backgroundColor="$route.params.categorie.backgroundColor"
        color="#fff"></vheader>
    </div>

    <div class="view-categorie-data" :style="{backgroundColor: $route.params.categorie.backgroundColor}">
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
            :borderColor="$route.params.categorie.circleColor"
            :size="1.35"
            :borderWidth="0.18"
            :fontSize="0.4"
            :count="12"></vcircle>
        </div>
      </div>
    </div>
    <div class="view-categorie-content">
      <ul>
        <li v-for="(todo,index) in $route.params.categorie.todos">
          <div class="todo-text">
            <p>{{ todo.text }}</p>
            <p><span>Today</span> at 下午12:15</p>
          </div>
          <div class="todo-note">
            <span class="icon-note"></span>
          </div>
          
        </li>
      </ul>
    </div>
    <div class="addbutton-wrapper">
      <addbutton
        :backgroundColor="$route.params.categorie.backgroundColor"></addbutton>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header/header'
  import addbutton from 'components/addbutton'
  import vcircle from 'components/circle'

  export default {
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    },
    components: {
      vheader,
      addbutton,
      vcircle
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
            padding: 23px 0
            p
              text-indent: 35px
              &:nth-child(1)
                height: 47px
                font-size: 30px
                color: #6b6b6b
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
