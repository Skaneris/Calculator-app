import { createStore } from 'vuex'

export default createStore({
      state: () =>({
            theme: 2,
            memory: 0,
            displayValue: '0',
            action: null,
            clear: false
      }),
      mutations: {
            setTheme: (state, value) => state.theme = value,
            setMemory: (state, value) => state.memory = value,
            setDisplayValue: (state, value) => state.displayValue = value,
            setAction: (state, value) => state.action = value,
            setClear: (state, value) => state.clear = value,
      },
      actions: {
            clickHandler({dispatch, commit, state}, button) {
                  if(button.type === 'number') dispatch('inputNumber', button.value)
                  if(button.value === 'RESET') dispatch('reset')
                  if(button.value === 'DEL') dispatch('delete')
                  const actions = ['plus', 'minus', 'multi', 'divide', 'total']
                  if(actions.includes(button.type)) dispatch('action', button.type)
            },
            inputNumber({commit, state}, number) {
                  if(state.clear) {
                        commit('setDisplayValue', '0')
                        commit('setClear', false)
                  }
                  const current = state.displayValue
                  if(number === '.' && current.includes('.')) return
                  if(number === '0' && current === '0') return
                  if(number !== '.' && current === '0') {
                        commit('setDisplayValue', number)
                  } else {
                        commit('setDisplayValue', current + number)
                  }
            },
            action({commit, state}, type) {
                  const action = state.action
                  const memory = state.memory
                  const value = Number(state.displayValue)
                  if(action === 'plus') {
                        commit('setMemory', memory + value)
                  } else if(action === 'minus') {
                        commit('setMemory', memory - value)
                  } else if(action === 'multi') {
                        commit('setMemory', memory * value)
                  } else if(action === 'divide') {
                        commit('setMemory', memory / value)
                  } else {
                        commit('setMemory', value)
                  }
                  commit('setDisplayValue', state.memory.toString())
                  commit('setClear', true)
                  type === 'total' ? commit('setAction', null) : commit('setAction', type)
            },
            reset({commit, state}) {
                  const current = state.displayValue
                  if(current.length > 1) {
                        commit('setDisplayValue', current.slice(0, -1))
                  } else {
                        commit('setDisplayValue', '0')
                  }
            },
            delete({commit}) {
                  commit('setDisplayValue', '0')
                  commit('setMemory', 0)
                  commit('setAction', null)
            },
            getTheme({commit}) {
                  const theme = localStorage.getItem('calcTheme');
                  if(theme) {
                        commit('setTheme', Number(theme))
                  }
            },
            changeTheme({commit}, value) {
                  localStorage.setItem('calcTheme', value.toString())
                  commit('setTheme', value)
            }
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
