import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      person: [],
      nextPage: ''
    }
  },
  mutations: {
    getTemplate(state, newTemplate) {
      state.person = newTemplate.results
      state.nextPage = newTemplate.info.next
    },
    getTemplate2(state, newTemplate2) {
      state.person = state.person.concat(newTemplate2.results)
      state.nextPage = newTemplate2.info.next
    },
    
  },
  actions: {
    async getPerson(context, search = '') {
      await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          context.commit("getTemplate", data);
        })
    },


    async getPerson2(context) {
      await fetch(`${context.state.nextPage}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          context.commit("getTemplate2", data);
        })
    }
  },
  modules: {}
})