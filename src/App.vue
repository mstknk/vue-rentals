<template>
  <div class="header-container">
    <div class="navbar">
      <div class="navbar-main">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  top: 0;
  background-color: transparent;
  pointer-events: none;
  opacity: 1;
  justify-content: space-between;
  position: relative;
  height: 100px;
  flex-direction: row;
  flex-wrap: nowrap;
}
.navbar-main {
    display: flex;
    flex-direction: row;
    height: 100px;
    pointer-events: auto;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.header-container {
  max-width: 1024px;
  min-height: 5vh;
  background: #f9f9f9;
  margin: 0 auto;
}
.navbar-main a {
  color: #0a2b4e;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 20px;
  text-decoration: none;
  white-space: nowrap;
  padding-right: 20px;
}
</style>
