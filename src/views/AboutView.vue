<template>
  <div class="mx-4 my-8 lg:m-16 max-w-7xl">
    <p class="text-2xl font-semibold">About My Project</p>

    <p class="mt-4">
      Use this page to tell us about the choices made, things added, assumptions
      made, questions, suggestions, etc...
    </p>

    <div
      class="rounded-1rem shadow-md border-2 p-4 border-amber-400 mb-4 mt-4 hover:shadow-amber-300"
    >
      <h2 class="font-bold m-2 underline">Add/Changes</h2>
      <ul>
        <li>
          <details>
            <summary>MemberView page</summary>
            <p>
              In this page it calls the api to request members data and return
              three states: error, isLoading, and isLoaded. It also pass each
              member to its child component member-card component who is solely
              responsible for the display of the member.
            </p>
          </details>
        </li>
        <li>
          <details>
            <summary>MemberCard component</summary>
            <p>
              This component is responsible for displaying the member
              information and will also transform the data to the required
              format when necessary.
            </p>
          </details>
        </li>
        <li>
          <details>
            <summary>LoadingCircle page</summary>
            <p>This is a simple loading screen.</p>
          </details>
        </li>
      </ul>
    </div>
    <div
      class="rounded-1rem shadow-md border-2 p-4 border-amber-400 mb-4 mt-4 hover:shadow-amber-300"
    >
      <h2 class="font-bold m-2 underline">Roadblocks</h2>
      <ul>
        <li>
          <details>
            <summary>environment issues:</summary>
            <strong>Node environment issue:</strong>
            <i>
              @achrinza/node-ipc@9.2.2: The engine "node" is incompatible with
              this module. Expected version "8 || 10 || 12 || 14 || 16 || 17".
              Got "20.5.1</i
            >
            <div>
              <strong>Solution:</strong>Addressing this common environmental
              challenge can be effectively accomplished by implementing a Node
              environment management tool such as NVM. Nevertheless, an even
              more robust solution entails the adoption of Docker to mitigate
              environmental issues. It would be highly beneficial if this test
              were accompanied by a preconfigured Docker file by default. In
              this solution, a new .nvmrc file is created. The node version in
              this file is fixed to version 16.20.2.
            </div>
          </details>
        </li>
      </ul>
    </div>

    <div
      class="rounded-1rem shadow-md border-2 p-4 border-amber-400 mb-4 hover:shadow-amber-300"
    >
      <h3 class="font-bold m-2 underline">Improvements</h3>
      <ul>
        <li>
          <details>
            <summary>UX :Loading screen</summary>
            after clicking the 'load members' button, it is suggested to have
            either a load screen or a skeleton screen. This could tell users
            that something is happening and could also prevent race conditions.
            A simple race condition question is what if users keep clicking the
            button. Rxjs has amazing solutions for this which are called:
            switchMap/concatMap/mergeMap/exhaustMap. I wrote an
            <a
              href="https://medium.com/dev-genius/learn-rxjs-in-an-easy-way-8008f291ef8f"
              class="underline text-cyan-600"
              >article</a
            >
            about this on medium. In this test, I chose to display a loading
            screen to prevent it.
          </details>
        </li>
        <li>
          <details>
            <summary>UX :error screen</summary>
            not every api call will be successful. Could users retry 'load
            members' if errors happen? I would suggest adding a generic error
            screen with a retry button would be much beneficial.
          </details>
        </li>
        <li>
          <details>
            <summary>UX :pull to refresh</summary>
            Users should have the ability to pull the page and automatically
            call the api and cache the results for a few periods.
          </details>
        </li>

        <li>
          <details>
            <summary>UX :the member page pagination</summary>
            In this code test, the number of members is not substantial, but in
            actual practical scenarios, where the number of members is quite
            large, pagination would be necessary. I recommend incorporating
            pagination for an improved user experience.
          </details>
        </li>
        <li>
          <details>
            <summary>Code :more functional style?</summary>
            It is absolutely not wrong to enforce class programming. However,
            functional programming is likely to be more popular in the
            javascript community since the introduction of react hooks. This
            repo implements lots of class and decorators. decorators is a
            feature of class. Fortunately it is now in
            <a
              href="https://github.com/tc39/proposal-decorators"
              class="underline text-cyan-600"
              >stage 3</a
            >
            but it is not compatible with the old typescript decorator. I would
            assume that it would involve lots of work to migrate to the new
            decorators.
          </details>
          <details>
            <summary>Code :update class and decorators packages</summary>
            Both
            <a
              href="https://github.com/kaorun343/vue-property-decorator"
              class="underline text-cyan-600"
              >vue-property-decorator</a
            >
            and
            <a
              href="https://github.com/vuejs/vue-class-component"
              class="underline text-cyan-600"
              >vue-class-component</a
            >
            are depreciated now. It is suggested to migrate to new solutions in
            the near future.
          </details>
        </li>

        <li>
          <details>
            <summary>Code :reconsider rest api or graphql</summary>
            This is the great time to reconsider how to call your apis in the
            frontend. Should they be changed to graphql or still be restful?
            Should there be a BFF (backend for frontend)?
          </details>
        </li>
      </ul>
    </div>

    <div
      class="rounded-1rem shadow-md border-2 p-4 border-amber-400 mb-4 hover:shadow-amber-300"
    >
      <h4 class="font-bold m-2 underline">Assumptions</h4>
      <ul>
        <li>
          <details>
            <summary>how to call an api?</summary>
            This is not a requirement of this project. The easiest way is to use
            the native browser api, fetch. However, third-party package like
            axios could be much beneficial because its added functionalities
            like interceptors, request cancellation, and timeouts. There are
            more popular solution like vue-query (or react-query) or apollo
            client that could handles rest apis as well as graphql. It also
            supports caching automatically.
          </details>
        </li>
      </ul>
    </div>
    <footer>
      Due to time constrains there are no unit tests, integration tests or e2e.
      tests.
    </footer>
  </div>
</template>
<style lang="scss"></style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class AboutView extends Vue {}
</script>
