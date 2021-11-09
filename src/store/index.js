import { createStore } from 'vuex'

export default createStore({
  state: () =>({
        theme: 2,
        memory: 0,
        displayValue: '0.9810',
        action: null
  }),
  mutations: {
        setTheme: (state, value) => state.theme = value,
        setMemory: (state, value) => state.memory = value,
        setDisplayValue: (state, value) => state.DisplayValue = value,
        setAction: (state, value) => state.DisplayValue = value,
  },
  actions: {
  },
  getters: {
        getDisplayValue: state => state.displayValue.replace(/\./, ','),
        className: state => {
            const theme = [null, 'medium', 'default', 'hard']
            return theme[state.theme]
        }
  },
  modules: {
  }
})
