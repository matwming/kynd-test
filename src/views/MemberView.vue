<template>
  <div class="mx-4 my-8 lg:m-16">
    <p class="text-2xl font-semibold">This is a member view page</p>

    <button>Load Members</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {State} from "vuex-class";


@Component({
  components: {
  },
})
export default class MemberView extends Vue {

  @State('isLoaded')
  private readonly isLoaded: false | undefined;

  @State('members')
  private readonly members: [] | undefined;

  @State('error')
  private readonly error: '' | undefined;
}
</script>
