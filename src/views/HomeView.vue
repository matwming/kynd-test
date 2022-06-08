<template>
  <div class="flex flex-col h-full items-center justify-center px-4 lg:px-16 text-center">
    <img 
      src="../assets/kynd-1.svg"
      class="w-1/2 lg:w-1/3"
    >
    <p class="mt-12 font-semibold text-lg lg:text-2xl">
      {{ title }}
    </p>

    <p class="mt-8">
      Thanks for taking the time to do this test. Don't forget to look at the README file for instructions.
    </p>

    <p class="mt-4">
      Good luck!!!
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'

@Component({
  components: {
  },
})
export default class HomeView extends Vue {
  @State('title')
  private readonly title!: string

}
</script>
