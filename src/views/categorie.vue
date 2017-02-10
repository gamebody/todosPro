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

    <div class="view-categorie-data">
      <div class="left">
        <ul>
          <li>7 completed!</li>
          <li>0 due today</li>
          <li>0 overdue</li>
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
</style>
