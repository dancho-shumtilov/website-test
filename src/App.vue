<template>
  <Header />
  <div id='main-content'>
    <router-view/>
  </div>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


<style>
@import '/path/to/reset-css/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  min-height: 100%;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: 'Inter', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #181818;
}

#main-content {
  flex: 1 0 auto;
}

.footer {
  flex-shrink: 0;
}
</style>
