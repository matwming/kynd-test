import { StoreState } from "@/store/types";
import { Member } from "@/services/members";
import { MutationTree } from "vuex";

export enum MutationType {
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR_STATE = "SET_ERROR_STATE",
  SET_MEMBERS_STATE = "SET_MEMBERS_STATE",
  SET_IS_LOADED = "SET_IS_LOADED",
}

export type Mutations = {
  [MutationType.SET_IS_LOADING](
    state: StoreState,
    payload: { loading: boolean }
  ): void;
  [MutationType.SET_ERROR_STATE](
    state: StoreState,
    payload: { error: string }
  ): void;
  [MutationType.SET_MEMBERS_STATE](
    state: StoreState,
    payload: { members: Member[] }
  ): void;
  [MutationType.SET_IS_LOADED](
    state: StoreState,
    payload: {
      isLoaded: boolean;
    }
  ): void;
};

export const mutations: MutationTree<StoreState> & Mutations = {
  [MutationType.SET_IS_LOADING](state, payload) {
    state.isLoading = payload.loading;
  },
  [MutationType.SET_ERROR_STATE](state, payload) {
    state.error = payload.error;
  },
  [MutationType.SET_MEMBERS_STATE](state, payload) {
    state.members = payload.members;
  },
  [MutationType.SET_IS_LOADED](state, payload) {
    state.isLoaded = payload.isLoaded;
  },
};
