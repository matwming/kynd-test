<template>
  <div id="app" class="flex items-center h-screen flex-col lg:flex-col-reverse">    
    <div class="flex-1 relative w-full overflow-auto">
      <router-view/>
    </div>

    <nav class="flex-none w-full text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
