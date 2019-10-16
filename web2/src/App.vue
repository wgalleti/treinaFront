<template>
  <div id="app">
    <app-toolbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
}
.container {
  max-width: 960px;
  padding-top: 60px;
  margin: 0 auto;
}
</style>
