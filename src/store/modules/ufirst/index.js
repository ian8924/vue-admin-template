
export default function() {
  return {
    namespaced: true,
    state: {
      list: [{ id: 1, date: '2020/01/20' }]
    },
    mutations: {},
    getters: {
      allList: state => {
        return state.list
      }
    },
    actions: {}
  }
}

