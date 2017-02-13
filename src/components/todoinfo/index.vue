<template>
  <div class='todoinfo'>
    <div class="todoinfo-header">
      <div class="left">
        <p><span>Created</span> 1 days ago</p>
      </div>
      <div class="right">
        <span class="icon-edit"></span>
      </div>
    </div>
    <div class="todoinfo-banner"></div>
    <div class="todoinfo-content">
      <p class="text">{{ todo.text }}</p>
      <div class="note" v-show="todo.note">
        <div class="note-header">
          <h6>NOTE</h6>
        </div>
        <div class="note-content">
          <p>{{ todo.note }}</p>
        </div>
      </div>
    </div>
    <div class="todoinfo-footer">
      <div class="completed" @click="completed">
        <div class="icon">
          <span class="icon-complete"></span>
        </div>
        <span>Completed</span>
      </div>
      <div class="delete" @click="deletetodo">
        <div class="icon">
          <span class="icon-delete"></span>
        </div>
        <span>Delete</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        default: function () {
          return {}
        }
      },
      index: {
        type: Number,
        default: 1
      }
    },
    methods: {
      completed () {
        this.$store.commit('completed', {
          categoriePosition: this.$route.params.index,
          todoPosition: this.index
        })
        this.$emit('finished')
      },
      deletetodo () {
        this.$store.commit('delete', {
          categoriePosition: this.$route.params.index,
          todoPosition: this.index
        })
        this.$emit('finished')
      }
    }
  }
</script>

<style lang='stylus'>
  .todoinfo
    display: flex
    height: 100%
    flex-direction: column
    .todoinfo-header
      font-size: 32px
      display: flex
      height: 115px
      line-height: 115px
      border-top: 1px solid #cecece
      .left
        flex: 1
        text-indent: 34px
      .right
        width: 116px
        text-align: center
        color: #6d6d6d
    .todoinfo-banner
      height: 234px
      border-top: 1px solid #cecece
      background: #ccc
    .todoinfo-content
      flex: 1
      .text
        width: 100%
        height: 158px
        text-indent: 36px
        font-size: 62px
        line-height: 158px
      .note
        .note-header
          height: 80px
          font-size: 24px
          color: #ec2e2b
          line-height: 80px
          text-indent: 36px
        .note-content
          font-size: 36px
          color: #000000
          padding: 0 36px
    .todoinfo-footer
      display: flex
      justify-content: space-between
      align-items: center
      height: 118px
      border-top: 1px solid #ccc
      text-align: center
      .completed
      .delete
        width: 250px
        font-size: 30px
</style>
