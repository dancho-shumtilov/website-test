<template>
  <Header />
  <main id='main-content'>
    <router-view/> 
  </main>
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

@font-face {
  font-family: 'icomoon';
  src:  url('./assets/fonts/icomoon/icomoon.eot?2aihqq');
  src:  url('./assets/fonts/icomoon/icomoon.eot?2aihqq#iefix') format('embedded-opentype'),
    url('./assets/fonts/icomoon/icomoon.ttf?2aihqq') format('truetype'),
    url('./assets/fonts/icomoon/icomoon.woff?2aihqq') format('woff'),
    url('./assets/fonts/icomoon/icomoon.svg?2aihqq#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

html, body {
  height: 100%;
  margin: 0;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
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
  max-width: 1920px;
  margin: 0 auto;
  color: #181818;
  font-size: 1.125rem;
  font-weight: 400;
  font-family: 'Inter', Arial, sans-serif;
  line-height: 1.25em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#main-content {
  position: relative;
  flex: 1 0 auto;
}

.footer {
  flex-shrink: 0;
}

.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

p strong {
  font-weight: 900;
}

@keyframes dash {
  to {stroke-dashoffset: 0;}
}

@-webkit-keyframes dash {
  to {stroke-dashoffset: 0;}
}

@-moz-keyframes dash {
  to {stroke-dashoffset: 0;}
}

@-o-keyframes dash {
  to {stroke-dashoffset: 0;}
}

@keyframes blink {
  from, to {color: transparent;}
  50% {color: #fff;}
}

@-webkit-keyframes blink {
  from, to {color: transparent;}
  50% {color: #fff;}
}

@-moz-keyframes blink {
  from, to {color: transparent;}
  50% {color: #fff;}
}

@-o-keyframes blink {
  from, to {color: transparent;}
  50% {color: #fff;}
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: #eb7f00; }
}

@media (min-width: 768px) {
  .container {
    width: 744px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 964px;
  }
}

@media (min-width: 1224px) {
  .container {
    width: 1200px;
  }
}

@media (min-width: 1620px) {
  .container {
    width: 1596px;
  }
}
</style>
