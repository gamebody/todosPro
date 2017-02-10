<template>
  <div class="categorie" :style="{backgroundColor: backgroundColor}">
    <div class="categorie-name">
      <span>{{ categorieName }}</span>
    </div>
    <div class="categorie-content">
      <circler
        :border-color="borderColor"
        :count="count"
        backgroundColor="#fff"></circler>     
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
      },
      borderColor: {
        type: String,
        default: '#cac2b4'
      },
      todos: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    computed: {
      count () {
        return this.todos.filter((todo) => !todo.isFinished).length
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
    align-items: center
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

</style>
