import Vue from "vue";
import Vuex from "vuex";
import { StoreState } from "./types";
import { mutations } from "@/store/mutations";
import {actions} from "@/store/actions";

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
  mutations,
  actions,
  modules: {},
});
