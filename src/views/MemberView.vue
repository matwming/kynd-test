<template>
  <div class="mx-4 my-8 lg:m-16">
    <div
      class="flex flex-col h-full items-center justify-center px-4 lg:px-16 text-center vertical-center"
      v-if="!isLoaded"
    >
      <div v-if="isLoading">
        <loading-circle></loading-circle>
      </div>
      <button
        v-else
        v-on:click="loadMembers"
        class="bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white w-48 p-2 rounded-1rem"
      >
        Load Members
      </button>
    </div>
    <div v-if="error">
      Opps! there is an error: {{ error }}. Please refresh the page.
    </div>
    <div v-if="isLoaded && members && members.length > 0">
      <p class="font-bold">
        Found {{ members.length }} members with an average age of
        {{ averageAge }}
      </p>
      <div class="container mt-4 flex flex-wrap max-w-7xl overflow-auto h-full">
        <div v-for="member of members" class="mb-4 w-full sm:w-1/3">
          <member-card v-bind:member="member" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import MemberCard from "../components/MemberCard.vue";
import members, { Member } from "../services/members";
import LoadingCircle from "../components/LoadingCircle.vue";
import { ActionTypes } from "../store/actions";

@Component({
  computed: {
    members() {
      return members;
    },
  },
  components: {
    LoadingCircle,
    MemberCard,
  },
})
export default class MemberView extends Vue {
  @State("isLoading")
  private readonly isLoading!: boolean;

  @State("isLoaded")
  private readonly isLoaded!: boolean;
  @State("members")
  private readonly members!: Member[];

  @State("error")
  private readonly error!: string;

  @Action(ActionTypes.FETCH_MEMBERS) fetchMembers!: () => void;
  loadMembers() {
    this.fetchMembers();
  }

  get totalNumOfMembers() {
    return this.members?.length as number;
  }
  get averageAge(): string {
    const sum = this.members?.reduce((acc, member: Member) => {
      return acc + member.age;
    }, 0) as number;
    const averageAge = sum / this.totalNumOfMembers;
    return averageAge.toFixed(0);
  }
}
</script>
