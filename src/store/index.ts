import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import MembersService, { Member } from '@/services/members'
import { StoreState } from './types'

Vue.use(Vuex)

export default new Vuex.Store<StoreState>({
  state: {
    title: 'Welcome to the Front End Developer Test',
    isLoaded: false,
    members:[],
    error:''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
