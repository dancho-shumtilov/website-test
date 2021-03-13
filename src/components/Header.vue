<template>    
  <header id="header">
    <h1>
      <router-link to="/"><img src='../assets/logo.svg' alt="my logo"/></router-link>
    </h1>

    <div class="hd-nav">
      <router-link class='ss' to="/about">About</router-link>
      <router-link to ="/CV">CV</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
#header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 1.25rem 0.75rem;
  background-color: #e6f5f7;
}

.hd-nav a {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  color: #181818;
  font-weight: 900;
  text-decoration: none;
}

.hd-nav a.router-link-exact-active {
  color: #1695a3;
}
</style>
