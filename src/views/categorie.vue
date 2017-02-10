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
    <div class="view-categorie-content"></div>
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
</style>
