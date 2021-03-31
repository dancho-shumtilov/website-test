<template>    
  <header id="header" aria-labelledby="logo">
    <div class="container">
      <div class="hd-flex">
        <h1 id='logo'>
          <router-link to="/" id='logo'><img src='../assets/logo.svg' alt="my logo"/></router-link>
        </h1>

        <nav class="hd-nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <!-- <router-link to ="/CV">CV</router-link> -->
          <router-link to ="/fake-store">Fake Store</router-link>
          <!-- <router-link to="/api-test">Api Test</router-link> -->
        </nav>
      </div>
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
  padding: 1.25rem 0;
  background-color: #e6f5f7;
}

.hd-flex{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.hd-nav a {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  color: #181818;
  font-weight: 900;
  text-decoration: none;
  -webkit-transition: all 0.3s ease-in-out ;
  -moz-transition: all 0.3s ease-in-out ;
  -o-transition: all 0.3s ease-in-out ;
  transition: all 0.3s ease-in-out ;
}

.hd-nav a:first-child {
  position: relative;
  padding-left: 1.5rem;
}

.hd-nav a:first-child::before {
  position: absolute;
  content: '\e902';
  top: 50%; left: 0;
  color: inherit;
  font: 18px/1 'icomoon';
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.hd-nav a:focus,
.hd-nav a:hover,
.hd-nav a:active {
  color: #1695a3;
  text-decoration: none;
}

.hd-nav a.router-link-exact-active {
  color: #1695a3;
}
</style>
