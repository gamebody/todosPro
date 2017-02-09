<template>
  <div class='alert'>
    <div class="alert-header">{{ text.headerText }}</div>
    <div class="alert-content" v-show="operation !== 'deleteList'">
      <input type="text" v-model="value" placeholder="ListName">  
    </div>
    <div class="alert-footer">
      <div class="btn-wrapper">
        <button @click="cancel">Cancel</button>
        <button @click="ok">{{ text.okText }}</button>
      </div>    
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      operation: {
        type: String, // addList || rename || deleteList
        default: 'addList'
      }
    },
    data () {
      return {
        value: ''
      }
    },
    computed: {
      text () {
        let headerText = ''
        let okText = ''
        switch (this.operation) {
          case 'addList':
            headerText = 'Add New List'
            okText = 'Add'
            break
          case 'rename':
            headerText = 'Rename List'
            okText = 'Rename'
            break
          case 'deleteList':
            headerText = 'Delete this list and all of its tasks?'
            okText = 'Delete'
            break
          default:
            headerText = 'Add New List'
            okText = 'Add'
            break
        }
        return {
          headerText: headerText,
          okText: okText
        }
      }
    },
    methods: {
      cancel () {
        this.value = ''
        this.$emit('cancelAlert')
      },
      ok () {
        if (this.value.length === 0 && this.operation !== 'deleteList') {
          return
        }
        if (this.operation === 'addList') {
          this.$emit('addListOk')
        } else if (this.operation === 'rename') {
          this.$emit('rename')
        } else {
          console.log('1')
          this.$emit('deleteList')
        }
      }
    }
  }
</script>

<style lang='stylus'>
  .alert
    box-sizing: border-box
    width: 86%
    padding: 50px
    border: 1px solid #e0e6e6
    border-radius: 6px
    background: #fff
    margin: 0 auto
    .alert-header
      height: 94px
      font-size: 32px
      vertical-align: top
      font-weight: bold
    .alert-content
      height: auto
      font-size: 0px
      input
        width: 100%
        height: 50px
        margin-bottom: 94px
        border-bottom: 4px solid #c7c7c7
        outline: none
        font-size: 28px
        line-height: 58px
    .alert-footer
      width: 100%
      height: 22px
      line-height: 22px
      font-size: 0
      .btn-wrapper
        float: right
        button
          font-size: 22px
          color: #008d7e
          font-weight: bold
          &:first-child
            margin-right: 64px
          &:last-child
            margin-right: 16px
</style>
