<template>
  <div class="categorie" :style="{backgroundColor: backgroundColor}">
    <div class="categorie-name">
      <span>{{ categorieName }}</span>
    </div>
    <div class="categorie-content">
      <circler></circler>     
    </div>
  </div>
</template>

<script>
  import circler from 'components/circle'

  export default {
    props: {
      categorieName: {
        type: String,
        default: 'FCOUS'
      },
      backgroundColor: {
        type: String,
        default: '#00838f'
      }
    },
    components: {
      circler
    }
  }

</script>

<style lang='stylus'>
  .categorie
    display: flex
    flex-direction: column
    justify-content: center
    width: 100%
    height: 100%
    .categorie-name
      height: 158px
      text-align: center
      span
        font-size: 40px
        color: #fff
        font-weight: bold
    .categorie-content
      flex: 1
      text-align: center

</style>
