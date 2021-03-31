<template>
 <div class="container">
   <div class="inner-container">
    <h2 class="hello-box">
      <svg width="425" height="100" viewBox="0 0 425 100">
        <path class='svg-l h1' d="M2 96.176V3.44H29.072V38H61.04V3.44H88.112V96.176H61.04V61.616H29.072V96.176H2Z"/>
        <path class='svg-l e2' d="M101.141 96.176V3.44H171.413V24.176H128.213V39.296H166.085V60.32H128.213V75.44H171.413V96.176H101.141Z"/>
        <path class='svg-l l3' d="M180.031 96.176V3.44H207.103V75.44H248.863V96.176H180.031Z"/>
        <path class='svg-l l4' d="M256.109 96.176V3.44H283.181V75.44H324.941V96.176H256.109Z"/>
        <path class='svg-l o5' d="M375.277 97.616C359.917 97.616 348.157 93.872 339.997 86.384C331.933 78.896 327.901 66.8 327.901 50.096C327.901 38.576 329.725 29.312 333.373 22.304C337.021 15.2 342.349 10.064 349.357 6.89601C356.461 3.632 365.101 2 375.277 2C385.453 2 394.045 3.632 401.053 6.89601C408.157 10.064 413.533 15.2 417.181 22.304C420.829 29.312 422.653 38.576 422.653 50.096C422.653 66.8 418.573 78.896 410.413 86.384C402.253 93.872 390.541 97.616 375.277 97.616ZM375.277 74.576C382.189 74.576 387.181 72.656 390.253 68.816C393.421 64.88 395.005 58.64 395.005 50.096C395.005 40.976 393.421 34.544 390.253 30.8C387.181 26.96 382.189 25.04 375.277 25.04C368.365 25.04 363.325 26.96 360.157 30.8C357.085 34.544 355.549 40.976 355.549 50.096C355.549 58.64 357.085 64.88 360.157 68.816C363.325 72.656 368.365 74.576 375.277 74.576Z"/>
      </svg>
    </h2>
    <div class="tw">
      <div class="tw-inner">
        <h3 class='text-animate'>My name is Dancho Shumtilov</h3>
      </div>
    </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.inner-container {
  background: #1a2a27;
  padding-top: 2.5rem;
  padding-bottom: 1.25rem;
}

.hello-box {
  margin: 2.5rem 0 1.25rem;
}

 .svg-l {
  fill: transparent;
  stroke: #fff;
  stroke-width: 4;
}

.h1 {
  stroke-dasharray: 496;
  stroke-dashoffset: 496;
  animation: dash 0.5s ease-in-out forwards;
}

.e2 {
  stroke-dasharray: 488;
  stroke-dashoffset: 488;
  animation: dash 0.5s ease-in-out forwards 0.5s;
}

.l3,
.l4 {
  stroke-dasharray: 323;
  stroke-dashoffset: 323;
  animation: dash 0.5s ease-in-out forwards 1s;
}

.l4 {
  animation-delay: 1.5s;
}

.o5 {
  stroke-dasharray: 456;
  stroke-dashoffset: 456;
  animation: dash 0.5s ease-in-out forwards 2s;
}

.tw {
  display: flex;
  justify-content: center;
}

.tw-inner {
  display: inline-block;
}

.text-animate {
  display: inline-block;
  overflow: hidden;
  margin: 0 auto;
  border-right: .10em solid transparent;  
  color: #fff;
  font-family: monospace;
  font-size: 1.875rem;
  letter-spacing: .12em;
  white-space: nowrap;
  width: 0;
  -webkit-animation: typing 2.5s steps(30, end) forwards 3s, blink .5s step-end infinite 5.25s;
  -moz-animation: typing 2.5s steps(30, end) forwards 3s, blink .5s step-end infinite 5.25s;
  -o-animation: typing 2.5s steps(30, end) forwards 3s, blink .5s step-end infinite 5.25s;
  animation: typing 2.5s steps(30, end) forwards 3s, blink .5s step-end infinite 5.25s;
}
</style>