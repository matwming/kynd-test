<template>
  <div class="mx-4 my-8 lg:m-16">
    <p class="text-2xl font-semibold">About My Project</p>

    <p class="mt-4">
      Use this page to tell us about the choices made, things added, assumptions made, questions, suggestions, etc...
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
export default class AboutView extends Vue {
}
</script>
