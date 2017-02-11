<template>
  <div class='theme'>
    <div class="theme-content">
      <ul>
        <li v-for="theme in themes" @click="changeTheme(theme)" :class="{active: theme.isCurrent}">
          <div class="color-block-wrapper">
            <colorblock
              :backgroundColors="theme.backgroundColors"></colorblock>     
          </div>
          <span :class="{active: theme.isCurrent}">{{ theme.name }}</span>
        </li>
      </ul>
    </div>
    <div class="theme-btn">
      <button @click="cancel">CANCEL</button>
      <button @click="save">SAVE</button>
    </div>
  </div>
</template>

<script>
  import colorblock from 'components/colorblock'

  export default {
    computed: {
      themes () {
        return this.$store.state.themes
      }
    },
    methods: {
      cancel () {
        this.$emit('cancel')
      },
      save () {
        this.$emit('save')
      },
      changeTheme (theme) {
        this.$store.commit('changeCurrent', theme)
      }
    },
    components: {
      colorblock
    }
  }
</script>

<style lang='stylus'>
  .theme
    width: 100%
    height: 390px
    .theme-content
      width: 100%
      height: 290px
      background: rgba(0, 0, 0, .7)
      overflow: auto
      ul
        display: flex
        width: (194 * 15)px
        height: 290px
        font-size: 0   
        li
          flex: 1
          &.active
            background: rgba(0, 0, 0, .5)
          .color-block-wrapper
            padding: 24px
          span
            display: block
            box-sizing: border-box
            width: 194px
            padding: 0 24px
            font-size: 24px
            text-align: center
            color: #fff
            text-shadow: 0 0 1px #000
            font-weight: bold
            &.active
              color: #00b1ff
    .theme-btn
      display: flex
      justify-content: flex-end
      flex-direction: row
      width: 100%
      height: 100px
      background: #fff
      button
        width: 184px
        outline: none
        border: none
        background: #fff
        font-size: 22px
        font-weight: bold
        color: #4d4d4d
        &:last-child
          color: #50a2d4
        
</style>
