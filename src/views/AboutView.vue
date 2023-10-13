<template>
  <div class="mx-4 my-8 lg:m-16">
    <p class="text-2xl font-semibold">About My Project</p>

    <p class="mt-4">
      Use this page to tell us about the choices made, things added, assumptions made, questions, suggestions, etc...
    </p>

    <h2>Roadblocks</h2>
    <ul>
      <li>
      <details>
        <summary>
          environment issues:
        </summary>
        <strong>Node environment issue:</strong> <i> @achrinza/node-ipc@9.2.2: The engine "node" is incompatible with this module. Expected version "8 || 10 || 12 || 14 || 16 || 17". Got "20.5.1</i>
        <div>
          <strong>Solution:</strong>Addressing this common environmental challenge can be effectively accomplished by implementing a Node environment management tool such as NVM. Nevertheless, an even more robust solution entails the adoption of Docker to mitigate environmental issues. It would be highly beneficial if this test were accompanied by a preconfigured Docker file by default.
        </div>
      </details>
      </li>
    </ul>
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
