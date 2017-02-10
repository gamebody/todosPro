<template>
  <div class='renameCategories'>
    <div class="header-wrapper">
      <vheader
        list-name="Categories"
        icon="back"
        :save="false"
        @goBack="goBack"
        @saved="saved"></vheader>
    </div>

    <div class="renameCategories-content">
      <ul>
        <li v-for="(categorie,index) in currentList.categories" :style="{backgroundColor: categorie.backgroundColor}">
          <div class="left">
            <div class="categorie-block-circle">
              <div class="position-wrapper">
                <categorieblock
                  :color="categorie.backgroundColor"
                  wdith="big"
                  :position="index + 1"></categorieblock>
              </div>
            </div> 
          </div>
          <div class="right">
            <p>{{ info[index] }}</p>
            <input type="text" v-model="categorie.categorieName">
            <div>{{ inputLength -  categorie.categorieName.length }} characters left</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import vheader from 'components/header/header'
  import categorieblock from 'components/categorieblock'
  
  export default {
    data () {
      return {
        info: [
          'IMPORTANT AND URGENT',
          'IMPORTANT BUT NOT URGENT',
          'URGENT BUT NOT IMPORTANT',
          'NOT IMPORTANT OR URGENT'
        ],
        inputLength: 10,
        left: false,
        inputValues: []
      }
    },
    computed: {
      currentList () {
        return this.$store.getters.currentList
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      saved () {
        const oinputs = document.getElementsByTagName('input')
        const arr = []
        Array.from(oinputs).forEach((input) => {
          arr.push(input.value)
        })
        this.$store.commit('changeCategorieName', arr)
        this.goBack()
      }
    },
    components: {
      vheader,
      categorieblock
    },
    created () {
      this.$store.getters.currentList.categories.forEach((categorie) => {
        this.inputValues.push(categorie.categorieName)
      })
    }
  }
</script>

<style lang='stylus'>
  .renameCategories
    width: 100%
    height: 100%
    .renameCategories-content
      width: 100%
      ul
        li
          box-sizing: border-box
          display: flex
          width: 100%
          height: 200px
          padding-bottom: 39px
          padding-right: 40px
          .left
            width: 175px
            height: 162px
            text-align: center
            .categorie-block-circle
              position: relative
              display: inline-block
              width: 102px
              height: 102px
              border-radius: 50%
              background: #fff
              margin-top: 32px
              .position-wrapper
                position: absolute
                left: 50%
                top: 50%
                transform: translate(-50%, -50%)
          .right
            flex: 1
            font-size: 20px
            color: #fff
            p
              font-size: 18px
              height: 30px
              margin-top: 42px
            input
              width: 100%
              height: 50px
              font-size: 30px
              font-weight: bold
              line-height: 54px
              border-bottom: 3px solid #fff
              color: #fff
            div
              margin-top: 10px
</style>
