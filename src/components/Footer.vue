<template>
  <footer>
    <h3>Contacts</h3>
    <div class='email'>
      <a href='mailto:dancho.shumtilov@gmail.com' title='Contact me via Email'>dancho.shumtilov@gmail.com</a>
    </div>
    <div class="social">
      <a class="linkedin" href='https://www.linkedin.com/in/dancho-shumtilov-37b090124/' title='My LInkedin page' target='_blank' rel='nofollow noopener'>linkedin</a>
      <a class="github" href='https://github.com/dancho-shumtilov' title='My Github page' target='_blank' rel='nofollow noopener'>github</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',  
}
</script>

<style scoped>
  footer {
    padding: 2.5rem 0.75rem 0.25rem;
    background-color: #b2dae2;
  }

  h3 {
    margin-bottom: 0.75rem;
    color: #111;
    font-weight: 900;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .email a {
    position: relative;
    display: inline-block;
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    color: #181818;
    font-weight: 700;
    text-decoration: none;
    -webkit-transition: all 0.3s ease-in-out ;
    -moz-transition: all 0.3s ease-in-out ;
    -o-transition: all 0.3s ease-in-out ;
    transition: all 0.3s ease-in-out ;
  }

  .email a::before {
    position: absolute;
    content: '\ea83';
    top: 50%; left: 0;
    color: inherit;
    font: 20px/1 'icomoon';
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }

.email a:focus,
.email a:hover,
.email a:active {
    color: #1695a3;
    text-decoration: none;
  }
  
.social a {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin: 0 0.75rem 1.25rem;
  vertical-align: middle;
  color: transparent;
  font-size: 0.1px;
}

.social a::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #111;
  font-size: 2rem;
  line-height: 3rem;
  font-family: 'icomoon';
  text-align: center;
  -webkit-transition: all 0.3s ease-in-out ;
  -moz-transition: all 0.3s ease-in-out ;
  -o-transition: all 0.3s ease-in-out ;
  transition: all 0.3s ease-in-out ;
}

.social .linkedin::before {
  content: '\eac9';
}

.social .github::before {
  content: '\eab0';
}

.social a:hover::before {
  color: #1695a3;
  text-transform: none;
}
</style>
