<template>
  <div class='alert'>
    <div class="alert-header">Add New List</div>
    <div class="alert-content">
      <input type="text" v-model="value">
    </div>
    <div class="alert-footer">
      <button @click="cancel">Cancel</button>
      <button @click="add">Add</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: ''
      }
    },
    methods: {
      cancel () {
        this.value = ''
        this.$emit('cancelAddList')
      },
      add () {
        this.$emit('addListOk')
      }
    }
  }
</script>

<style lang='stylus'>
  .alert
    width: 80%
    margin: 0 auto
</style>
