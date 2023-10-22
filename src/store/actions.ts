import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { StoreState } from "./types";
import { loadMembers, Member } from "../services/members";
export enum ActionTypes {
  FETCH_MEMBERS = "FETCH_MEMBERS",
}

type ActionAugments = Omit<ActionContext<StoreState, StoreState>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.FETCH_MEMBERS](context: ActionAugments): void;
};

export const actions: ActionTree<StoreState, StoreState> & Actions = {
  async [ActionTypes.FETCH_MEMBERS]({ commit }) {
    commit(MutationType.SET_IS_LOADING, { loading: true });
    try {
      const members: Member[] = await loadMembers();
      if (members && members.length > 0) {
        commit(MutationType.SET_MEMBERS_STATE, { members });
        commit(MutationType.SET_IS_LOADED, { isLoaded: true });
      } else {
        commit(MutationType.SET_ERROR_STATE, { error: "No members found" });
      }
    } catch (e: any) {
      commit(MutationType.SET_ERROR_STATE, { error: e?.message });
    } finally {
      commit(MutationType.SET_IS_LOADING, { loading: false });
    }
  },
};
