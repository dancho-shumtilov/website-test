<template>
  <footer>
    <div class="container">
      <div class="ft-flex">
        <div class='webmaster'>© Dancho Shumtilov 2021</div>
        <div class="social">
          <a class='email' href='mailto:dancho.shumtilov@gmail.com' title='Contact me via Email'>dancho.shumtilov@gmail.com</a>
          <a class="linkedin" href='https://www.linkedin.com/in/dancho-shumtilov-37b090124/' title='My LInkedin page' target='_blank' rel='nofollow noopener'>linkedin</a>
          <a class="github" href='https://github.com/dancho-shumtilov' title='My Github page' target='_blank' rel='nofollow noopener'>github</a>
        </div>
      </div>
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
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: #edf8fa;
  }

  h3 {
    margin-bottom: 0.75rem;
    color: #111;
    font-weight: 900;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
 
.social a {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin: 0 0.75rem;
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

.social .email::before {
  content: '\ea83';
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

@media (min-width: 768px) {
  .ft-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
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
