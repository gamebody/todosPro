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
            backgroundColor: '#00838f',
            circleColor: '#cac2b4',
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
            backgroundColor: '#f9c23b',
            circleColor: '#cac2b4',
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
            backgroundColor: '#d76055',
            circleColor: '#cac2b4',
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
            backgroundColor: '#687c94',
            circleColor: '#cac2b4',
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
