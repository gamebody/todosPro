<template>
  <div class='theme'>
    <div class="theme-content">
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="theme-btn">
      <button @click="cancel">CANCEL</button>
      <button @click="save">SAVE</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      cancel () {
        this.$emit('cancel')
      },
      save () {
        this.$emit('save')
      }
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
      background: rgba(0, 0, 0, .8)
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
