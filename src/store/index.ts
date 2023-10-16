import Vue from "vue";
import Vuex from "vuex";
import { loadMembers } from "@/services/members";
import { StoreState } from "./types";

Vue.use(Vuex);

export default new Vuex.Store<StoreState>({
  state: {
    title: "Welcome to the Front End Developer Test",
    isLoading: false,
    isLoaded: false,
    members: [],
    error: "",
  },
  getters: {},
  mutations: {
    setIsLoadingState(state, payload) {
      state.isLoading = payload.loading;
    },
    setErrorState(state, payload) {
      state.error = payload.error;
    },
    setMembersState(state, payload) {
      state.members = payload.members;
    },
    setIsLoadedState(state, payload) {
      state.isLoaded = payload.isLoaded;
    },
  },
  actions: {
    async fetchMembers({ commit }) {
      commit("setIsLoadingState", { loading: true });
      try {
        const members = await loadMembers();
        if (members && members.length > 0) {
          commit("setMembersState", { members });
          commit("setIsLoadedState", { isLoaded: true });
        } else {
          commit("setErrorState", { error: "No members found" });
        }
      } catch (e: any) {
        commit("setErrorState", { error: e?.message });
      } finally {
        commit("setIsLoadingState", { isLoading: false });
      }
    },
  },
  modules: {},
});
