import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [
      {
        listName: 'hahaha',
        theme: 'CLASSIC',
        categories: [
          {
            categorieName: 'FOCUS',
            todos: [
              {
                text: '',
                isFinished: false,
                time: 0
              }
            ]
          },
          {
            categorieName: 'GOALS',
            todos: [
              {
                text: '',
                isFinished: false,
                time: 0
              }
            ]
          },
          {
            categorieName: 'FIT IN',
            todos: [
              {
                text: '',
                isFinished: false,
                time: 0
              }
            ]
          },
          {
            categorieName: 'BACKBURNER',
            todos: [
              {
                text: '',
                isFinished: false,
                time: 0
              }
            ]
          }
        ]
      }
    ]
  }
})
