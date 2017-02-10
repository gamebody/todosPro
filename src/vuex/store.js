import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentId: 0,
    lists: [
      {
        listName: 'main',
        id: 0,
        themeName: 'I LIKE',
        isCurrent: true,
        categories: [
          {
            categorieName: 'FOCUS',
            backgroundColor: '#00838f',
            circleColor: '#cac2b4',
            todos: [
              {
                text: '好好过',
                completed: false,
                dueDate: 122,
                note: ''
              },
              {
                text: '222',
                completed: false,
                dueDate: 0,
                note: ''
              },
              {
                text: '333',
                completed: false,
                dueDate: 0,
                note: ''
              },
              {
                text: '4444',
                completed: true,
                dueDate: 0,
                note: ''
              }
            ]
          },
          {
            categorieName: 'GOALS',
            backgroundColor: '#f9c23b',
            circleColor: '#cac2b4',
            todos: []
          },
          {
            categorieName: 'FIT IN',
            backgroundColor: '#d76055',
            circleColor: '#cac2b4',
            todos: []
          },
          {
            categorieName: 'BACKBURNER',
            backgroundColor: '#687c94',
            circleColor: '#cac2b4',
            todos: []
          }
        ]
      }
    ],
    themes: [
      {
        name: 'CLASSIC',
        backgroundColors: ['#EE5148', '#00BAD5', '#FFAE27', '#00BEA4'],
        circleColors: ['#CE4342', '#CBE7EF', '#CA8E1C', '#008D77'],
        isCurrent: false
      },
      {
        name: 'I LIKE',
        backgroundColors: ['#00828A', '#FEC337', '#D56250', '#617993'],
        circleColors: ['#CDC2B2', '#F6F3E8', '#CCC3B4', '#CCC2B7'],
        isCurrent: false
      },
      {
        name: 'ICE CREAM',
        backgroundColors: ['#DC7D9B', '#696D8A', '#D6967A', '#BC6959'],
        circleColors: ['#DFADA4', '#F7EFED', '#D1BBCF', '#C7B5A7'],
        isCurrent: false
      },
      {
        name: 'LIGHT',
        backgroundColors: ['#ED938B', '#7AC3CC', '#FEBE52', '#58BEB3'],
        circleColors: ['#B46D69', '#DCEBEE', '#C8901D', '#008A77'],
        isCurrent: false
      },
      {
        name: 'LUMBER JACK',
        backgroundColors: ['#F6B269', '#62AA92', '#C44939', '#306958'],
        circleColors: ['#9C6D41', '#D1CFCC', '#942317', '#62AE90'],
        isCurrent: false
      },
      {
        name: 'CLASSIC',
        backgroundColors: ['#', '#', '#', '#'],
        circleColors: ['#', '#', '#', '#'],
        isCurrent: false
      }
    ]
  },
  mutations: {
    changeThemeCurrent (state, themeName) {
      state.themes.forEach((theme) => {
        theme.isCurrent = false
        if (theme.name === themeName) {
          theme.isCurrent = true
        }
      })
    },
    changeCurrent ({ themes, lists }, selectTheme) {
      themes.forEach((theme) => {
        theme.isCurrent = false
        if (theme === selectTheme) {
          theme.isCurrent = true
        }
      })
      lists.forEach((list) => {
        if (list.isCurrent) {
          let i = 0
          list.categories.forEach((categorie) => {
            categorie.backgroundColor = selectTheme.backgroundColors[i]
            categorie.circleColor = selectTheme.circleColors[i]
            i++
          })
        }
      })
    },
    cancelTheme ({ themes, lists }) {
      let i = 0
      lists.forEach((list) => {
        if (list.isCurrent) {
          const oldTheme = themes.filter((theme) => {
            return theme.name === list.themeName
          })[0]
          list.categories.forEach((categorie) => {
            categorie.backgroundColor = oldTheme.backgroundColors[i++]
          })
        }
      })
    },
    saveTheme ({ themes, lists }) {
      lists.forEach((list) => {
        if (list.isCurrent) {
          themes.forEach((theme) => {
            if (theme.isCurrent) {
              list.themeName = theme.name
            }
          })
        }
      })
    },
    addList (state, name) {
      state.currentId++

      state.lists.forEach((list) => {
        list.isCurrent = false
      })
      const list = {
        listName: name,
        id: state.currentId,
        themeName: 'CLASSIC',
        isCurrent: true,
        categories: [
          {
            categorieName: 'FOCUS',
            backgroundColor: '#00838f',
            circleColor: '#cac2b4',
            todos: []
          },
          {
            categorieName: 'GOALS',
            backgroundColor: '#f9c23b',
            circleColor: '#cac2b4',
            todos: []
          },
          {
            categorieName: 'FIT IN',
            backgroundColor: '#d76055',
            circleColor: '#cac2b4',
            todos: []
          },
          {
            categorieName: 'BACKBURNER',
            backgroundColor: '#687c94',
            circleColor: '#cac2b4',
            todos: []
          }
        ]
      }
      state.lists.push(list)
    },
    selectList ({ lists }, computedList) {
      lists.forEach((list) => {
        list.isCurrent = false
        if (list.id === computedList.id) {
          list.isCurrent = true
        }
      })
    },
    rename (state, newName) {
      state.lists.forEach((list) => {
        if (list.isCurrent) {
          list.listName = newName
        }
      })
    },
    deleteList (state) {
      for (let [index, value] of state.lists.entries()) {
        if (value.isCurrent) {
          state.lists.splice(index, 1)
        }
      }
      state.lists[0].isCurrent = true
    },
    changeCategorieName (state, arr) {
      let i = 0
      state.lists.forEach((list) => {
        if (list.isCurrent) {
          list.categories.forEach((categorie) => {
            categorie.categorieName = arr[i++]
          })
        }
      })
    },
    completed (state, {categoriePosition, todoPosition}) {
      state.lists.filter((list) => list.isCurrent)[0].categories[categoriePosition].todos[todoPosition].completed = true
    },
    delete (state, {categoriePosition, todoPosition}) {
      state.lists.filter((list) => list.isCurrent)[0].categories[categoriePosition].todos.splice(todoPosition, 1)
    },
    reset (state, {categoriePosition, todoPosition}) {
      state.lists.filter((list) => list.isCurrent)[0].categories[categoriePosition].todos[todoPosition].completed = false
    }
  },
  getters: {
    currentList ({lists}) {
      return lists.filter((list) => list.isCurrent)[0]
    }
  }
})
