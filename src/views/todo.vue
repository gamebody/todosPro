<template>
  <div class='view-todo'>
    <div class="header-wrapper">
      <vheader
        icon="back"
        :save="false"
        @goBack="goBack"
        @saved="saved"></vheader>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header/header'

  export default {
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      saved () {}
    },
    components: {
      vheader
    }
  }
</script>

<style lang='stylus'>

</style>
