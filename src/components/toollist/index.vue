<template>
  <div class='tool-list'>
    <ul>
      <li @click="change('changeTheme')">Change Theme</li>
      <li @click="change('renameList')">Rename List</li>
      <li @click="change('deleteList')">Delete List</li>
      <li @click="change('renameCategories')">Rename Categories</li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      change (sign) {
        this.$emit(sign)
      }
    }
  }
</script>

<style lang='stylus'>
  .tool-list
    width: 410px
    border-radius: 6px
    box-shadow: 1px 1px 4px #005c67
    background: #fff
    color: #0c0c0c
    font-size: 34px
    line-height: 100px
    text-indent: 34px
    text-align: left
</style>
